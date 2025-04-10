// --------------------
// Resume-related types
// --------------------

export interface LanguageItem {
  bgColor: string;
  completed: number;
  id: number;
  title: string;
}

export interface WorkExperience {
  company: string;
  jobTitle: string;
  tenure: string;
  responsibilities: string[];
}

export interface Resume {
  languages: LanguageItem[];
  technologiesAndTools: string[];
  softSkills: string[];
  workHistory: WorkExperience[];
}

export interface CoreSkills {
  languages: LanguageItem[];
  workHistory: WorkExperience[];
  technologiesAndTools: string[];
  softSkills: string[];
}
// ---------
// About Me
// ---------

export interface AboutMeItem {
  id: number;
  bio: string;
}

// ----------------------------
// Single Project-related types
// ----------------------------

export interface ProjectTitle {
  title: string;
  publishDate: string;
  tags: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  projectHeader?: ProjectTitle;
}

export type ProjectData = Record<string, Project>;

// -----------------------------------------
// Single Project-related types full details
// -----------------------------------------

export interface ProjectHeader {
  title: string;
  tenure: string;
  jobTitle: string;
}
export interface ProjectImages {
  id: number;
  title: string;
  img: string;
}
export interface CompanyInfoItem {
  id: number;
  emoji: string;
  title?: string;
  details: string;
}

export interface TechnologyItem {
  emoji: string;
  techs: string[];
}

export interface ProjectDetails {
  id: number;
  details: string;
}

export interface ProjectInfo {
  clientHeading: string;
  companyInfo: CompanyInfoItem[];
  technologies: TechnologyItem[];
  projectDetailsHeader: string;
  projectDetails: ProjectDetails[];
}

export interface ProjectCompleteData {
  projectHeader: ProjectHeader;
  projectImages: ProjectImages[];
  projectInfo: ProjectInfo;
}

export type ProjectFullDetails = Record<string, ProjectCompleteData>;
