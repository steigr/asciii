#![feature(plugin, custom_derive)]
#![plugin(rocket_codegen)]

extern crate asciii;
extern crate serde;
extern crate serde_json;
#[macro_use] extern crate log;
#[macro_use] extern crate lazy_static;
extern crate linked_hash_map;
extern crate itertools;

extern crate rocket;
extern crate rocket_contrib;
extern crate rocket_cors;

use rocket::response::NamedFile;
use itertools::Itertools;

use asciii::project::Project;
use asciii::storage::{self, ProjectList, Storage, StorageDir, Storable};
use linked_hash_map::LinkedHashMap;

use std::path::{Path, PathBuf};
use std::sync::Mutex;
use std::sync::mpsc::{sync_channel, SyncSender};
use std::thread;

use rocket::http::Method;
use rocket_cors::{AllowedOrigins, AllowedHeaders};

pub struct ProjectLoader {
    storage: Storage<Project>,
    years: Vec<i32>,
    projects_all: ProjectList<Project>,
    projects_map: LinkedHashMap<String, Project>,
}

impl<'a> ProjectLoader {
    pub fn new() -> Self {

        let storage = storage::setup().unwrap();
        let projects_all = storage.open_projects(StorageDir::All).unwrap();
        let projects_map = storage.open_projects(StorageDir::All)
            .unwrap()
            .into_iter()
            .map(|p| (format!("{}-{}",
                              Storable::year(&p).unwrap(),
                              Storable::ident(&p)),
                              p))
            .collect();
        let years = projects_all.iter()
                                    .filter_map(|p: &Project| p.year())
                                    .unique()
                                    .collect::<Vec<_>>();

        Self {
            storage,
            years,
            projects_all,
            projects_map,
        }
    }

    pub fn update(&mut self) {
        debug!("updating projects");
        self.projects_all = self.storage.open_projects(StorageDir::All).unwrap();
    }
}

#[derive(FromForm, Debug)]
struct Dir {
    year: Option<i32>,
    all: Option<bool>,
}

impl Dir {
    fn into_storage_dir(self) -> Result<StorageDir, String> {
        let dir = match self {
            Dir{all: Some(true), year: None} => StorageDir::All,
            Dir{all: Some(true), year: Some(_)} => return Err("Ambiguous".into()),
            Dir{all: None, year: Some(year)} => StorageDir::Archive(year),
            Dir{all: None, year: None} => StorageDir::Working,
            _ => StorageDir::Working,
        };
        Ok(dir)
    }
}

lazy_static! {
    pub static ref PROJECTS: Mutex<ProjectLoader> = Mutex::new(ProjectLoader::new());

    pub static ref CHANNEL: SyncSender<()> = {
        let (tx, rx) = sync_channel::<()>(1);

        thread::spawn(move || {
            println!("background thread");
            let mut count = 0;
            loop {
                rx.recv().unwrap();
                count += 1;
                if count % 6 == 0 {
                    debug!("updating projects");
                    PROJECTS.lock().unwrap().update();
                }
                debug!("callcount: {}", count);
            }
        });
        tx
    };
}

#[get("/<file..>", rank=5)]
fn static_files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("static/").join(file)).ok()
}

mod calendar {
    use super::Dir;

    use rocket::response::content::{self, Content};
    use rocket::http::ContentType;

    use asciii::actions;

    #[get("/", rank=2)]
    fn cal() -> Result<content::Content<String>, String> {
        cal_params(Dir{year:None,all:None})
    }

    #[get("/", rank=2)]
    fn cal_plain() -> Result<content::Plain<String>, String> {
        cal_plain_params(Dir{year:None,all:None})
    }

    #[get("/?<dir>", rank=1)]
    fn cal_params(dir: Dir) -> Result<content::Content<String>, String> {
        let storage_dir = dir.into_storage_dir()?;

        actions::calendar(storage_dir)
            .map(|s| Content(ContentType::new("text", "calendar"),s) )
            .map_err(|_|String::from("error"))
    }

    #[get("/?<dir>", rank=1)]
    fn cal_plain_params(dir:Dir) -> Result<content::Plain<String>, String> {
        let storage_dir = dir.into_storage_dir()?;
        actions::calendar(storage_dir)
            .map(|s| content::Plain(s) )
            .map_err(|_|String::from("error"))

    }
}

mod projects {
    use linked_hash_map::LinkedHashMap;
    use asciii::project::Project;
    use asciii::project::export::Complete;
    use asciii::project::export::ExportTarget;
    use asciii::storage::{Storable, Year};
    use serde_json;
    use rocket::response::content;

    #[get("/projects/year")]
    fn years() -> content::Json<String> {
        ::CHANNEL.send(()).unwrap();
        let loader = ::PROJECTS.lock().unwrap();
        content::Json(serde_json::to_string(&loader.years).unwrap())
    }

    #[get("/full_projects/year/<year>")]
    fn full_by_year(year: Year) -> content::Json<String> {
        ::CHANNEL.send(()).unwrap();
        let loader = ::PROJECTS.lock().unwrap();
        let exported = loader.projects_map.iter()
            .filter(|&(_, p)| if let Some(y) = Storable::year(p) {y == year } else {false})
            .map(|(ident, p)| {
                let exported: Complete = p.export();
                (ident.clone(), exported)
            })
            .collect::<LinkedHashMap<String, Complete>>();

        content::Json(serde_json::to_string(&exported).unwrap())
    }

    #[get("/projects/year/<year>")]
    fn by_year(year: Year) -> content::Json<String> {
        ::CHANNEL.send(()).unwrap();
        let loader = ::PROJECTS.lock().unwrap();
        let exported = loader.projects_map.iter()
            .filter(|&(_, p)| if let Some(y) = Storable::year(p) {y == year } else {false})
            .map(|(ident, _)| ident.as_str())
            .collect::<Vec<&str>>();

        content::Json(serde_json::to_string(&exported).unwrap())
    }

    #[get("/full_projects")]
    fn all_full() -> content::Json<String> {
        let loader = ::PROJECTS.lock().unwrap();
        let list = loader.projects_map.iter()
                         .map(|(ident, p)| {
                             let exported: Complete = p.export();
                             (ident, exported)
                         })
                         .collect::<LinkedHashMap<_,_>>();

        content::Json(serde_json::to_string(&list).unwrap())
    }

    #[get("/projects")]
    fn all_names() -> content::Json<String> {
        let loader = ::PROJECTS.lock().unwrap();
        let list = loader.projects_map.iter()
                         .map(|(ident, _)| ident)
                         .collect::<Vec<_>>();

        content::Json(serde_json::to_string(&list).unwrap())
    }

    #[get("/projects/<name>")]
    fn by_name(name: String) -> Option<content::Json<String>> {
        let loader = ::PROJECTS.lock().unwrap();
        let list = loader.projects_map.iter()
                         .map(|(ident, p)| {
                             let exported: Complete = p.export();
                             (ident, exported)
                         })
                         .collect::<LinkedHashMap<_,_>>();

         list.get(&name)
             .map(|p| content::Json(serde_json::to_string( p).unwrap()))
    }
}

fn main() {
    let (allowed_origins, failed_origins) = AllowedOrigins::some(&["http://localhost:8080"]);
    assert!(failed_origins.is_empty());

    let options = rocket_cors::Cors {
        allowed_origins: allowed_origins,
        allowed_methods: vec![Method::Get].into_iter().map(From::from).collect(),
        allowed_headers: AllowedHeaders::some(&["Authorization", "Accept"]),
        allow_credentials: true,
        ..Default::default()
    };

    rocket::ignite()
        .mount("/", routes![static_files])
        .mount("/cal/plain", routes![calendar::cal_plain, calendar::cal_plain_params])
        .mount("/cal", routes![calendar::cal, calendar::cal_params])
        .mount("/api", routes![projects::years,
                               projects::by_year,
                               projects::full_by_year,
                               projects::all_names,
                               projects::all_full,
                               projects::by_name])
        .attach(options)
        .launch();
}
