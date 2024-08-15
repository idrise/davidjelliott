/**
 * Represents a hierarchical structure for bullet points, allowing for nested content.
 * This can be used to create collapsible sections in a CV or resume.
 * @example
 * const exampleHierarchicalContent: HierarchicalContent = [
 *    ["Work Experience", ["Developed web applications", "Managed team of 5"]],
 *    ["Skills", ["JavaScript", "TypeScript", "React", ["Frontend", ["HTML", "CSS"]]]]
 * ];
 */
type HierarchicalContent = string | [string, HierarchicalContent[]];

/**
 * Represents a physical location, typically used for addresses in a CV.
 */
export interface Location {
  /** The street address */
  streetAddress: string;
  /** The postal or zip code */
  postalCode: string;
  /** The city name (optional) */
  city?: string;
  /** The country code, preferably in ISO 3166-1 alpha-2 format (optional) */
  countryCode?: string;
  /** The region, state, or province (optional) */
  region?: string;
}

/**
 * Represents a social media profile or professional network account.
 */
export interface SocialProfile {
  /** The name of the social network or platform */
  platform:
    | "linkedin"
    | "twitter"
    | "facebook"
    | "instagram"
    | "github"
    | "skype"
    | "whatsapp"
    | "pinterest"
    | "youtube"
    | "tiktok"
    | "snapchat"
    | "twitch"
    | string;

  /** The username or handle on the platform */
  username: string;
  /** The URL to the profile */
  url: string;
}

/**
 * Contains the basic personal and contact information for a CV.
 */
export interface PersonalInfo {
  /** The full name of the individual */
  fullName: string;
  /** A brief professional title or tagline */
  professionalTitle: string;
  /** URL to a profile image or photograph (optional) */
  profileImageUrl?: string;
  /** Professional email address (optional) */
  emailAddress?: string;
  /** Contact phone number (optional) */
  phoneNumber?: string;
  /** Personal or professional website URL (optional) */
  websiteUrl?: string;
  /** A brief professional summary or objective statement (optional) */
  professionalSummary: string;
  /** Current or preferred location (optional) */
  location?: Location;
  /** List of social media or professional network profiles (optional) */
  socialProfiles?: SocialProfile[];
}

/**
 * Represents a job or work experience entry in the CV.
 */
export interface WorkExperience {
  /** URL to a background image related to the job (optional) */
  companyLogoUrl?: string;
  /** Name of the company or organization */
  companyName: string;
  /** Location of the job (optional) */
  jobLocation?: Location;
  /** Brief description of the company or role (optional) */
  companyDescription?: string;
  /** Job title or position held */
  jobTitle: string;
  /** Company website or job-related URL (optional) */
  companyUrl?: string;
  /** Start date of the job (format: YYYY-MM-DD) (optional) */
  startDate?: string;
  /** End date of the job (format: YYYY-MM-DD), or "Present" for current jobs (optional) */
  endDate?: string;
  /** Brief overview of the job responsibilities (optional) */
  jobSummary?: string;
  /** List of key achievements or responsibilities, using hierarchical content (optional) */
  achievements?: HierarchicalContent[];
  /** List of skills utilized or developed in this job */
  relevantSkills: string[];
}

/**
 * Represents an educational experience or qualification.
 */
export interface Education {
  /** Name of the educational institution */
  institutionName: string;
  /** Degree or qualification obtained */
  qualificationTitle: string;
  /** Field of study or major */
  fieldOfStudy: string;
  /** Brief overview of the program or key courses (optional) */
  programOverview?: string;
  /** Start date of the education (format: YYYY-MM-DD) (optional) */
  startDate?: string;
  /** End date of the education (format: YYYY-MM-DD), or "Present" for ongoing education (optional) */
  endDate?: string;
  /** Notable achievements or activities during the education (optional) */
  achievements?: string[];
}

/**
 * Represents an award or recognition received.
 */
export interface Award {
  /** Title or name of the award */
  awardTitle: string;
  /** Date the award was received (format: YYYY-MM-DD) (optional) */
  dateReceived?: string;
  /** Name of the organization that presented the award (optional) */
  awardingOrganization?: string;
  /** Brief description of the award and its significance (optional) */
  awardDescription?: string;
  /** URL of the award */
  url?: string;
}

/**
 * Represents a skill or competency.
 */
export interface Skill {
  /** Name of the skill */
  skillName: string;
  /** Proficiency level (e.g., "Beginner", "Intermediate", "Expert") (optional) */
  proficiencyLevel?: string;
  /** The organisation that certified the skill, IE LinkedIn or Microsoft */
  certifyingOrganisation?: string;
  /** The name of the certification */
  certificationName?: string;
  /** URL for demonstrating the skill or to the certificate (optional) */
  url?: string;
  /** List of related keywords or technologies (optional) */
  relatedKeywords?: string[];
}

/**
 * Represents language proficiency.
 */
export interface LanguageProficiency {
  /** Name of the language */
  languageName: string;
  /** Level of fluency (e.g., "Native", "Fluent", "Intermediate", "Basic") (optional) */
  fluencyLevel?: string;
}

/**
 * Represents a professional reference.
 */
export interface ProfessionalReference {
  /** Name of the reference */
  referenceName: string;
  /** Position or title of the reference */
  referenceTitle: string;
  /** The reference statement or quote */
  referenceStatement: string;
  /** Contact information for the reference (optional) */
  referenceContact?: string;
}

/** Represents a personal or professional interest */
export type Interest = string;

/**
 * The main Resume/CV structure that combines all the components.
 */
export interface Resume {
  /** Basic personal and contact information */
  personalInfo: PersonalInfo;
  /** List of work experiences */
  workExperience: WorkExperience[];
  /** List of skills and competencies (optional) */
  skills?: Skill[];
  /** List of educational qualifications (optional) */
  education: Education[];
  /** List of awards and recognitions (optional) */
  awards?: Award[];
  /** List of language proficiencies (optional) */
  languages?: LanguageProficiency[];
  /** List of personal interests (optional) */
  interests?: Interest[];
  /** List of professional references (optional) */
  professionalReferences?: ProfessionalReference[];
}
