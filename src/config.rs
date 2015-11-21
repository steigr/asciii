#![allow(dead_code)]
use std::path::PathBuf;
use std::env::home_dir;
use yaml;
use yaml::{Yaml, YamlLoader, YamlError};

const DEFAULT_LOCATION: &'static str = ".ascii-invoicer.yml";

/// Looks for a configuration yaml in your HOME_DIR
pub struct ConfigReader{
    pub path: PathBuf,
    defaults: Yaml,
    user_val: Yaml
}

impl ConfigReader{

    /// The Path of the config file.
    pub fn path() -> PathBuf {
        let home = home_dir().expect("Can't find HOME DIRECTORY");
        return home.join(DEFAULT_LOCATION);
    }

    /// Opens config from `self.path()` and parses Yaml right away.
    pub fn new () -> Result<ConfigReader, YamlError> {
        let path = ConfigReader::path();
        Ok(ConfigReader{
            path: path.to_owned(),
            defaults: try!(YamlLoader::load_from_str(&DEFAULT_CONFIG)).get(0).unwrap().to_owned(),
            user_val: try!(yaml::open_yaml(&path))
        })
    }

    /// Returns whatever it finds in that position
    pub fn get(&self, key:&str) -> Option<&Yaml>{
        yaml::gey_hash_content(&self.user_val, &key).or(
        yaml::gey_hash_content(&self.defaults, &key))
    }

    /// Returns whatever it finds in that position
    ///
    /// Supports simple path syntax: "top/middle/child/node"
    pub fn get_path(&self, path:&str) -> Option<&Yaml>{
        yaml::get(&self.user_val, &path).or(
        yaml::get(&self.defaults, &path)
            )
    }

    /// Returns the string in the position or an empty string
    pub fn get_str(&self, key:&str) -> &str {
        yaml::get_str(&self.user_val, &key).or(
        yaml::get_str(&self.defaults, &key)).unwrap_or("")
    }

    /// Returns the boolean in the position or `false`
    pub fn get_bool(&self, key:&str) -> bool {
        self.get_path(key).and_then(|y|y.as_bool()).unwrap_or(false)
    }

}

pub const DEFAULT_CONFIG: &'static str = r#"
---
manager_name: "The Unnamed Manager"
verbose:  false
editor:   "vim -O"
opener:   "xdg-open"
colors:   false
list_sort: index

path: "~"
output_path: "."
dirs:
  storage: caterings
  working: working
  archive: archive
  templates: templates

## CAREFUL HERE
project_file_extension: .yml
use_git: true
latex:    pdflatex
log_file: ~/.ascii_log
calendar_file: invoicer.ics # will be put in current directory

defaults:
  tax: 0.19
  lang: de
  canceled: false
  includes:
    logopath:
    name:
    strasse:
    universitaet:
    fakultaet:
    zusatz:
    retouradresse:
    ort:
    land:
    telefon:
    telefax:
    telex:
    http:
    email:
    bank:
    blz:
    iban:
    bic:
    konto:
    steuernummer:

  messages:
    de:
      offer:
        - Angebot
        - "hiermit möchten wir Ihnen für die gastronomische Betreuung Ihrer Veranstaltung am __EVENT__PRETTYDATE__ folgendes Angebot unterbreiten:"
        - ""
      invoice:
        - Rechnung
        - "wir bedanken uns für Ihren Auftrag für das Catering am __EVENT__PRETTYDATE__ und erlauben uns Ihnen folgende Rechnung zu stellen:"
        - "Wir bitten um eine Begleichung des Betrags innerhalb von 14 Tagen nach Erhalt der Rechnung."
      signature: Mit freundlichen Grüßen

currency: "eur" # see gem "money"

gender_matches:
  herr: male
  frau: female
  professor: male
  professorin: female

lang_addressing:
  de:
    male: Sehr geehrter
    female: Sehr geehrte
  en:
    male: Dear
    female: Dear
...
"#;

#[test]
fn simple_reading(){
    assert!(ConfigReader::path().exists());
    let config = ConfigReader::new().unwrap();

    assert_eq!(config.get("manager_name").unwrap().as_str().unwrap(),
               config.get_str("manager_name"));

    assert_eq!(config.get("colors").unwrap().as_bool().unwrap(),
               config.get_bool("colors"));

    assert!(config.get_path(&"defaults").is_some());
    assert!(config.get_path(&"defaults/includes").is_some());
    assert!(config.get_path(&"defaults/includes/name").is_some());
    assert!(config.get_path(&"defaults/includes/name/foo").is_none());

    println!("{:?}", config.get_path("defaults/includes/name"));
    println!("{:?}", config.get_str("defaults/includes/name"));
    println!("{:?}", config.get_str("defaults/includes/name/foo"));
}