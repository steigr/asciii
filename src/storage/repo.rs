#![allow(dead_code, unused_variables)]
use std::fmt;
use std::path::{Path, PathBuf};
#[cfg(feature="git_statuses")]
use std::collections::HashMap;
use std::io::Write;
use std::process::{Command,ExitStatus};

#[cfg(not(feature="git_statuses"))]
use std::error::Error;

#[cfg(feature="git_statuses")]
use git2;
use term::{color,Attr};
use term::color::Color;

/// More Rustacious way of representing a git status
#[derive(Debug,Clone)]
pub enum GitStatus{
    IndexNew, IndexModified , IndexDeleted, IndexRenamed, IndexTypechange,
    WorkingNew, WorkingModified, WorkingDeleted, WorkingTypechange, WorkingRenamed,
    Ignored, Conflict, Current, Unknown
}

impl GitStatus{
    pub fn to_format(&self) -> Attr{
        //Bold,
        //Dim,
        //Italic(bool),
        //Underline(bool),
        //Blink,
        //Standout(bool),
        //Reverse,
        //Secure,
        //ForegroundColor(Color),
        //BackgroundColor(Color),

        Attr::Reverse
    }

    pub fn to_style(&self) -> (Color,Option<Attr>) {
        match *self{
        // => write!(f, "{:?}",  self)
         GitStatus::Current         => (color::BLUE,    None),
         GitStatus::Conflict        => (color::RED,     None),
         GitStatus::WorkingNew      => (color::GREEN,   None),
         GitStatus::WorkingModified => (color::YELLOW,  None),
         GitStatus::IndexNew        => (color::RED,     Some(Attr::Bold)),
         GitStatus::IndexModified   => (color::BLUE,    Some(Attr::Bold)),
         _                          => (color::WHITE,   None)
        }
    }
}

impl fmt::Display for GitStatus{
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
// X ✘ ✓
        match *self{
        // => write!(f, "{:?}", self)
         GitStatus::Conflict        => write!(f, "X"),
         GitStatus::Current         => write!(f, "+"),
         GitStatus::WorkingNew      => write!(f, "+"),
         GitStatus::WorkingModified => write!(f, "~"),
         GitStatus::IndexNew        => write!(f, "+"),
         GitStatus::IndexModified   => write!(f, "✓"),
         GitStatus::Unknown         => write!(f, "" ),
         _                          => write!(f, "{:?}", self),

        }
    }
}

#[cfg(feature="git_statuses")]
impl From<git2::Status> for GitStatus{
    fn from(status:git2::Status) -> Self{
        match status{
            //s if s.contains(git2::STATUS_CURRENT)          => GitStatus::Current,
            s if s.contains(git2::STATUS_INDEX_NEW)        => GitStatus::IndexNew,
            s if s.contains(git2::STATUS_INDEX_MODIFIED)   => GitStatus::IndexModified ,
            s if s.contains(git2::STATUS_INDEX_DELETED)    => GitStatus::IndexDeleted,
            s if s.contains(git2::STATUS_INDEX_RENAMED)    => GitStatus::IndexRenamed,
            s if s.contains(git2::STATUS_INDEX_TYPECHANGE) => GitStatus::IndexTypechange,
            s if s.contains(git2::STATUS_WT_NEW)           => GitStatus::WorkingNew,
            s if s.contains(git2::STATUS_WT_MODIFIED)      => GitStatus::WorkingModified,
            s if s.contains(git2::STATUS_WT_DELETED)       => GitStatus::WorkingDeleted,
            s if s.contains(git2::STATUS_WT_TYPECHANGE)    => GitStatus::WorkingTypechange,
            s if s.contains(git2::STATUS_WT_RENAMED)       => GitStatus::WorkingRenamed,
            s if s.contains(git2::STATUS_IGNORED)          => GitStatus::Ignored,
            s if s.contains(git2::STATUS_CONFLICTED)       => GitStatus::Conflict,
            _                                              => GitStatus::Unknown
        }
    }
}

/// Convenience Wrapper for `git2::Repository`
#[cfg(feature="git_statuses")]
pub struct Repository{
    /// Git Repository for StorageDir
    pub repo: git2::Repository,
    pub workdir: PathBuf,
    /// Maps GitStatus to each path
    pub statuses: HashMap<PathBuf, GitStatus>
}

/// Convenience Wrapper for `git2::Repository`
#[cfg(not(feature="git_statuses"))]
pub struct Repository{
    /// Git Repository for StorageDir
    pub workdir: PathBuf,
}

impl Repository {

    #[cfg(feature="git_statuses")]
    pub fn new(path:&Path) -> Result<Self, git2::Error>{
        let repo = try!(git2::Repository::open(path));
        let statuses = try!(Self::cache_statuses(&repo));
        Ok(
            Repository{
                repo: repo,
                workdir: path.to_owned(),
                statuses: statuses
            }
          )
    }

    #[cfg(not(feature="git_statuses"))]
    pub fn new(path:&Path) -> Result<Self, GitError>{
        Ok( Repository{ workdir: path.to_owned()})
    }

    #[cfg(feature="git_statuses")]
    fn cache_statuses(repo:&git2::Repository) -> Result<HashMap<PathBuf, GitStatus>, git2::Error>{
        let repo_path = repo.path().parent().unwrap().to_owned();

        let git_statuses = try!(repo.statuses( Some( git2::StatusOptions::new()
                                                     .include_ignored(false)
                                                     .include_untracked(true) )));

        let mut statuses:HashMap<PathBuf,GitStatus> = HashMap::new();

        for entry in git_statuses.iter(){
            let status:GitStatus = entry.status().into();

            if let Some(path) = entry.path(){
                let path = repo_path.join(PathBuf::from(path));
                if path.is_file() {
                    if let Some(parent) = path.parent(){
                        statuses.insert(parent.to_path_buf(), status.to_owned());
                    }
                }
                statuses.insert(path, status);
            }
        }

        Ok(statuses)
    }

    /// Returns the status to a given path
    #[cfg(feature="git_statuses")]
    pub fn get_status(&self,path:&Path) -> GitStatus{
        self.statuses.get(path).unwrap_or(&GitStatus::Unknown).to_owned()
    }

    /// INERT: Returns the status to a given path
    #[cfg(not(feature="git_statuses"))]
    pub fn get_status(&self,path:&Path) -> GitStatus{
        GitStatus::Unknown
    }

    fn execute_git(&self, command:&str, args:&[&str]) -> ExitStatus{
        let gitdir  = self.workdir.join(".git");
        debug!("{:#?}", Command::new("git")
                 .args(&["--work-tree", self.workdir.to_str().unwrap()])
                 .args(&["--git-dir",   gitdir.to_str().unwrap()])
                 .arg(command).args(args));

        Command::new("git")
            .args(&["--work-tree", self.workdir.to_str().unwrap()])
            .args(&["--git-dir",   gitdir.to_str().unwrap()])
            .arg(command)
            .args(args)
            .status()
            .unwrap_or_else(|e| { panic!("failed to execute process: {}", e) })
    }

    pub fn add(&self, paths:&[PathBuf]) -> ExitStatus{
        info!("adding to git\n {:#?}", paths);
        let paths:Vec<&str> = paths.iter().filter_map(|p|p.to_str()).collect();
        self.execute_git("add", &paths)
    }

    pub fn commit(&self) -> ExitStatus{
        // TODO override git editor with asciii editor
        self.execute_git("commit", &[])
    }

    pub fn status(&self) -> ExitStatus{
        self.execute_git("status", &[])
    }

    pub fn push(&self) -> ExitStatus{
        self.execute_git("push", &["origin", "master"])
    }

    pub fn diff(&self) -> ExitStatus{
        self.execute_git("diff", &[])
    }

    pub fn pull(&self) -> ExitStatus{
        self.execute_git("pull", &["origin", "master"])
    }

    pub fn remote(&self) -> ExitStatus{
        self.execute_git("remote", &[])
    }

    pub fn log(&self) -> ExitStatus{
        self.execute_git("log", &[])
    }
}

#[cfg(not(feature="git_statuses"))]
#[derive(Debug)]
pub struct GitError;


#[cfg(not(feature="git_statuses"))]
impl Error for GitError{
    fn description(&self) -> &str{"git statuses is not a features of this build"}
}

#[cfg(not(feature="git_statuses"))]
impl fmt::Display for GitError{
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result{
            write!(f, "{}", self.description())
    }
}