//! Handles config files and default config.
//!
//! Looks for `DEFAULT_LOCATION` and patches unset fields from `DEFAULT_CONFIG`
//!

#![warn(missing_docs,
        missing_copy_implementations,
        trivial_casts, trivial_numeric_casts,
        unsafe_code,
        unstable_features,
        unused_import_braces, unused_qualifications)]
//#![warn(missing_debug_implementations)]


use std::path::{Path,PathBuf};
use std::env::{home_dir,current_dir};
use util::yaml;
use util::yaml::{Yaml, YamlError};

/// Name of the configfile
pub const DEFAULT_LOCATION: &'static str = ".asciii.yml";

/// Looks for a configuration yaml in your `HOME_DIR`
#[derive(Debug)]
pub struct ConfigReader{
    /// Path of config file
    pub path: PathBuf,
    defaults: Yaml,
    custom: Yaml,
    local: Yaml
}

impl ConfigReader{

    /// The Path of the config file.
    pub fn path_home() -> PathBuf {
        let home = home_dir().expect("Can't find HOME DIRECTORY");
        home.join(DEFAULT_LOCATION)
    }

    /// Opens config from `self.path()` and parses Yaml right away.
    pub fn new() -> Result<ConfigReader, YamlError> {
        let home_path = ConfigReader::path_home();
        let local_path = Path::new(DEFAULT_LOCATION);

        let config = Ok(ConfigReader{
            path: home_path.to_owned(),
            defaults: yaml::parse(&DEFAULT_CONFIG)?,
            custom: yaml::open(&home_path).unwrap_or(Yaml::Null),
            local:  yaml::open(&local_path).unwrap_or(Yaml::Null)
        });

        if !home_path.exists(){
            error!("{} does not exist, falling back to defaults", home_path.display())
        }

        if let (Some(home_dir),Ok(current_dir)) = (home_dir(), current_dir()) {
            if local_path.exists() && current_dir != home_dir {
                warn!("{} exists, this overrides defaults and user settings", local_path.display())
            }
        }

        config
    }

    /// Returns whatever it finds in that position
    ///
    /// Supports simple path syntax: `top/middle/child/node`
    pub fn get(&self, path:&str) -> Option<&Yaml>{
        yaml::get(&self.local, path)
            .or_else(||yaml::get(&self.custom, path))
            .or_else(||yaml::get(&self.defaults, path))
    }

    /// Returns the first character.
    ///
    /// # Panics
    /// This panics if nothing is found.
    /// You should have a default config for everything that you use.
    pub fn get_char(&self, key:&str) -> Option<char> {
        self.get_str(key).and_then(|s|s.chars().nth(0))
    }

    /// Returns the string in the position or an empty string
    pub fn get_str(&self, key:&str) -> Option<&str> {
        yaml::get_str(&self.local, key)
            .or_else(||yaml::get_str(&self.custom, key))
            .or_else(||yaml::get_str(&self.defaults, key))
            //.expect(&format!("Config file {} in field {} does not contain a string value", DEFAULT_LOCATION, key))
    }

    /// Returns the a vec of &strs if possible
    pub fn get_strs(&self, key:&str) -> Option<Vec<&str>> {
        try_some!(self.get(key))
            .as_vec()
            .map(|v| v.iter()
                      .filter_map(|s|s.as_str())
                      .collect()
                )
    }

    /// Returns the string in the position or an empty string
    ///
    /// # Panics
    /// This panics if nothing is found.
    /// You should have a default config for everything that you use.
    pub fn get_to_string(&self, key:&str) -> Option<String>{
        yaml::get_to_string(&self.local, key)
            .or_else(||yaml::get_to_string(&self.custom, key))
            .or_else(||yaml::get_to_string(&self.defaults, key))
            //.expect(&format!("Config file {} in field {} does not contain a value", DEFAULT_LOCATION, key))
    }

    /// Tries to get the config field as float
    pub fn get_f64(&self, key:&str) -> Option<f64>{
        yaml::get_f64(&self.local, key)
            .or_else(||yaml::get_f64(&self.custom, key))
            .or_else(||yaml::get_f64(&self.defaults, key))
            //.expect(&format!("Config file {} in field {} does not contain a value", DEFAULT_LOCATION, key))
    }

    /// Returns the boolean in the position or `false`
    ///
    /// # Panics
    /// This panics if nothing is found.
    /// You should have a default config for everything that you use.
    pub fn get_bool(&self, key:&str) -> bool {
        self.get(key)
            .and_then(|y|y.as_bool())
            .expect(&format!("Config file {} in field {} does not contain a boolean value", DEFAULT_LOCATION, key))
    }

}

/// Default configuration that will be used if a value is not set in yaml file at `DEFAULT_LOCATION`
pub const DEFAULT_CONFIG: &'static str = include_str!("./default_config.yml");

#[test]
fn simple_reading(){
    assert!(ConfigReader::path_home().exists());
    let config = ConfigReader::new().unwrap();

    assert_eq!(config.get("user/name").unwrap().as_str().unwrap(),
               config.get_str("user/name").unwrap());

    assert_eq!(config.get("list/colors").unwrap().as_bool().unwrap(),
               config.get_bool("list/colors"));

    assert!(config.get(&"dirs").is_some());
    assert!(config.get(&"dirs/storage").is_some());
    assert!(config.get(&"dirs/working").is_some());
    assert!(config.get(&"dirs/storage").is_some());

}
