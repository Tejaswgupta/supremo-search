export interface EducationQualification {
    degree: string;
    subject: string;
    division: string;
    institute: string;
}

export interface ExperienceDetail {
    level: string;
    ministry: string;
    period_to: string;
    designation: string;
    period_from: string;
    organisation: string;
    experience_major: string;
    experience_minor: string;
    inferred_ministry: {
        office: string;
        location: string;
        ministry: string;
        department: string;
    };
}

interface InferredMinistry {
    office: string | null;
    location: string | null;
    ministry: string;
    department: string | null;
}

export function jsonToPerson(json: any): Person {
    return {
        name: json.name,
        identity_no: json.identity_no,
        service: json.service,
        cadre_state: json.cadre_state,
        allotment_year: json.allotment_year,
        source_of_recruitment: json.source_of_recruitment,
        date_of_birth: json.date_of_birth,
        gender: json.gender,
        place_of_domicile: json.place_of_domicile,
        mother_tongue: json.mother_tongue,
        languages_known: json.languages_known,
        retirement_reason: json.retirement_reason,
        education_qualifications: json.education_qualifications,
        experience_details: json.experience_details,
        mid_career_training_details: json.mid_career_training_details,
        in_service_training_details: json.in_service_training_details,
        domestic_training_details: json.domestic_training_details,
        international_training_details: json.international_training_details,
        inferred_ministry_details: json.inferred_ministry_details
    };
}

export interface Person {
    name: string;
    identity_no: string;
    service: string;
    cadre_state: string;
    allotment_year: number;
    source_of_recruitment: string;
    date_of_birth: string;
    gender: string;
    place_of_domicile: string;
    mother_tongue: string;
    languages_known: string;
    retirement_reason: string;
    education_qualifications: EducationQualification[];
    experience_details: ExperienceDetail[];
    mid_career_training_details: any[]; // Assuming it could be an array of any data type
    in_service_training_details: any[]; // Assuming it could be an array of any data type
    domestic_training_details: any[]; // Assuming it could be an array of any data type
    international_training_details: any[]; // Assuming it could be an array of any data type
    inferred_ministry_details: InferredMinistry | null; // Assuming it could be any data type or null
}

