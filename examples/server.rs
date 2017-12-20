#![feature(plugin, custom_derive)]
#![plugin(rocket_codegen)]

extern crate asciii;
extern crate serde;
extern crate serde_json;
#[macro_use] extern crate log;
#[macro_use] extern crate lazy_static;

extern crate rocket;
extern crate rocket_contrib;

use rocket::response::NamedFile;
use rocket::response::content::{self, Content};
use rocket::http::ContentType;

use asciii::actions;
use asciii::project::Project;
use asciii::project::export::Complete;
use asciii::project::export::ExportTarget;
use asciii::storage::{self, ProjectList, Storage, StorageDir, Storable, Year};

use std::path::{Path, PathBuf};
use std::sync::Mutex;
use std::sync::mpsc::{sync_channel, SyncSender};
use std::thread;


pub struct ProjectLoader {
    storage: Storage<Project>,
    projects: ProjectList<Project>
}

impl ProjectLoader {
    pub fn new() -> Self {
        let storage = storage::setup().unwrap();
        let projects = storage.open_projects(StorageDir::All).unwrap();

        Self {
            storage, projects
        }
    }

    pub fn update(&mut self) {
        debug!("updating projects");
        self.projects = self.storage.open_projects(StorageDir::All).unwrap();
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

#[get("/projects/year/<year>")]
fn projects_by_year_all(year: Year) -> content::Json<String> {
    CHANNEL.send(()).unwrap();
    let loader = PROJECTS.lock().unwrap();
    let projects = &*loader.projects;
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
fn projects_by_year(year: Year, num: usize) -> content::Json<Option<String>> {
    CHANNEL.send(()).unwrap();
    let loader = PROJECTS.lock().unwrap();
    let projects = &*loader.projects;
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

#[get("/<file..>", rank=5)]
fn static_files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("static/").join(file)).ok()
}


#[derive(FromForm, Debug)]
struct Dir {
    year: Option<i32>,
    all: Option<bool>,
}

#[get("/", rank=2)]
fn cal() -> Result<content::Content<String>, String> {
    cal_params(Dir{year:None,all:None})
}

#[get("/", rank=2)]
fn cal_plain() -> Result<content::Plain<String>, String> {
    cal_plain_params(Dir{year:None,all:None})
}

#[get("/?<dir>", rank=1)]
fn cal_params(dir:Dir) -> Result<content::Content<String>, String> {
    let storage_dir = match dir {
        Dir{all: Some(true), year:None} => StorageDir::All,
        Dir{all: Some(true), year:Some(_)} => return Err("Ambiguous".into()),
        Dir{all: None, year:Some(year)} => StorageDir::Archive(year),
        Dir{all: None, year:None} => StorageDir::Working,
        _ => StorageDir::Working,
    };

    actions::calendar(storage_dir)
        .map(|s| Content(ContentType::new("text", "calendar"),s) )
        .map_err(|_|String::from("error"))
}

#[get("/?<dir>", rank=1)]
fn cal_plain_params(dir:Dir) -> Result<content::Plain<String>, String> {
    let storage_dir = match dir {
        Dir{all: Some(true), year:None} => StorageDir::All,
        Dir{all: Some(true), year:Some(_)} => return Err("Ambiguous".into()),
        Dir{all: None, year:Some(year)} => StorageDir::Archive(year),
        Dir{all: None, year:None} => StorageDir::Working,
        _ => StorageDir::Working,
    };

    actions::calendar(storage_dir)
        .map(|s| content::Plain(s) )
        .map_err(|_|String::from("error"))
}

fn main() {
    asciii::util::setup_log();
    rocket::ignite()
        .mount("/", routes![static_files])
        .mount("/cal", routes![cal,cal_params])
        .mount("/api", routes![projects_by_year,projects_by_year_all])
        .launch();
}
