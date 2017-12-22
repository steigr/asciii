#![feature(plugin, custom_derive)]
#![plugin(rocket_codegen)]

extern crate asciii;
extern crate serde;
extern crate serde_json;
#[macro_use] extern crate log;
#[macro_use] extern crate lazy_static;
extern crate linked_hash_map;

extern crate rocket;
extern crate rocket_contrib;

use rocket::response::NamedFile;

use asciii::project::Project;
use asciii::storage::{self, ProjectList, Storage, StorageDir, Storable};
use linked_hash_map::LinkedHashMap;

use std::path::{Path, PathBuf};
use std::sync::Mutex;
use std::sync::mpsc::{sync_channel, SyncSender};
use std::thread;


pub struct ProjectLoader {
    storage: Storage<Project>,
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

        Self {
            storage,
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

    #[get("/projects/year/<year>")]
    fn by_year_all(year: Year) -> content::Json<String> {
        ::CHANNEL.send(()).unwrap();
        let loader = ::PROJECTS.lock().unwrap();
        let projects = &*loader.projects_all;
        let exported = projects.iter()
            .filter(|&p| if let Some(y) = Storable::year(p) {y == year } else {false})
            .map(|p: &Project| {
                let exported: Complete = p.export();
                exported
            })
            .collect::<Vec<Complete>>();

        content::Json(serde_json::to_string(&exported).unwrap())
    }

    #[get("/projects/year/<year>/<num>")]
    fn by_year(year: Year, num: usize) -> content::Json<Option<String>> {
        ::CHANNEL.send(()).unwrap();
        let loader = ::PROJECTS.lock().unwrap();
        let projects = &*loader.projects_all;
        let exported = projects.iter()
            .filter(|&p| if let Some(y) = Storable::year(p) {y == year } else {false})
            .map(|p: &Project| {
                let exported: Complete = p.export();
                exported
            })
            .map(|p: Complete| serde_json::to_string(&p).unwrap())
            .nth(num);
        content::Json(exported)
    }

    #[get("/full_projects", rank=1)]
    fn all_json() -> content::Json<String> {
        let loader = ::PROJECTS.lock().unwrap();
        let list = loader.projects_map.iter()
                         .map(|(ident, p)| {
                             let exported: Complete = p.export();
                             (ident, exported)
                         })
                         .collect::<LinkedHashMap<_,_>>();

        content::Json(serde_json::to_string(&list).unwrap())
    }

    #[get("/projects", rank=1)]
    fn names_json() -> content::Json<String> {
        let loader = ::PROJECTS.lock().unwrap();
        let list = loader.projects_map.iter()
                         .map(|(ident, _)| ident)
                         .collect::<Vec<_>>();

        content::Json(serde_json::to_string(&list).unwrap())
    }

    #[get("/projects/<name>", rank=1)]
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
    rocket::ignite()
        .mount("/", routes![static_files])
        .mount("/cal/plain", routes![calendar::cal_plain, calendar::cal_plain_params])
        .mount("/cal", routes![calendar::cal, calendar::cal_params])
        .mount("/api", routes![projects::by_year, projects::by_year_all,
                               projects::names_json,
                               projects::all_json,
                               projects::by_name])
        .launch();
}
