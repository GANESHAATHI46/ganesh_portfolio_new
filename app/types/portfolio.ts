export interface Project {
  number: string;
  title: string;
  type: string;
  summary: string;
  stack: string[];
  result: string;
  label: string;
  status: string;
  period: string;
  problem: string;
  contribution: string;
  impact: string;
  link?: string;
}

export interface SkillGroup {
  index: string;
  title: string;
  items: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  grade: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  featured?: boolean;
  points?: string[];
  summary?: string;
}

export interface CredentialItem {
  category: string;
  date: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  tagline: string;
  description: string;
  location: string;
  coordinates: string;
  email: string;
  phone: string;
  linkedin: string;
  siteUrl: string;
}
