use util;
use storage::Storable;

use super::Project;
use super::spec::*;

/// Fields that are accessible but are not directly found in the file format.
/// This is used to get fields that are computed through an ordinary `get("responsible")`
custom_derive! {
    #[derive(Debug,
             IterVariants(ComputedFields), IterVariantNames(ComputedFieldNames),
             EnumFromStr
             )]
    /// `Project::get()` allows accessing fields within the raw `yaml` data structure.
    /// Computed fields are fields that are not present in the document but computed.
    ///
    /// `ComputedFields` is an automatically generated type that allows iterating of the variants of
    /// this Enum.
    pub enum ComputedField{
        /// Usually `storage`, or in legacy part of `signature`
        Responsible,
        OfferNumber,
        /// Pretty version of `invoice/number`: "`R042`"
        InvoiceNumber,
        /// Pretty version of `invoice/number` including year: "`R2016-042`"
        InvoiceNumberLong,
        ///Overall Cost Project, including taxes
        Name,
        Final,
        Age,
        OurBad,
        TheirBad,
        Year,
        Employees,
        ClientFullName,
        Wages,

        /// Sorting index
        SortIndex,
        Date,
        Invalid,

        Format,
        Dir
    }
}

impl<'a> From<&'a str> for ComputedField {
    fn from(s: &'a str) -> ComputedField {
        s.parse::<ComputedField>().unwrap_or(ComputedField::Invalid)
    }
}

impl ComputedField {
    pub fn get(&self, project: &Project) -> Option<String> {
        let storage = util::get_storage_path();

        match *self {
            ComputedField::Responsible       => project.responsible().map(|s| s.to_owned()),
            ComputedField::OfferNumber       => project.offer().number(),
            ComputedField::InvoiceNumber     => project.invoice().number_str(),
            ComputedField::InvoiceNumberLong => project.invoice().number_long_str(),
            ComputedField::Name              => Some(project.name().map(ToString::to_string).unwrap()), // TODO remove name() from `Storable`, storables only need a slug()
            ComputedField::Final             => project.sum_sold().map(|c| util::currency_to_string(&c)).ok(),
            ComputedField::Age               => project.age().map(|a| format!("{} days", a)),

            ComputedField::OurBad            => project.our_bad()  .map(|a| format!("{} weeks", a.num_weeks().abs())),
            ComputedField::TheirBad          => project.their_bad().map(|a| format!("{} weeks", a.num_weeks().abs())),

            ComputedField::Year              => project.year().map(|i|i.to_string()),
            ComputedField::Date              => project.modified_date().map(|d| d.format("%Y.%m.%d").to_string()),
            ComputedField::SortIndex         => project.index(),

            ComputedField::Employees         => project.hours().employees_string(),
            ComputedField::ClientFullName    => project.client().full_name(),
            ComputedField::Wages             => project.wages().map(|c| util::currency_to_string(&c)),
            ComputedField::Invalid           => None,
            ComputedField::Format            => project.format().map(|f|f.to_string()),
            ComputedField::Dir               => project.dir().parent()
                .and_then(|d| d.strip_prefix(&storage).ok())
                .map(|d| d.display().to_string())

            // _ => None
        }
    }
}

