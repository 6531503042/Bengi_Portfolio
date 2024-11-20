import { LucideIcon } from "lucide-react";

export enum RepoType {
  Public = "Public",
  Private = "Private"
}

export enum ProjectType {
  Personal = "Personal",
  JobWork = "JobWork",
  Freelance = "Freelance"
}

export interface IProjectItem {
  id: string;
  title: string;
  description: string;
  icons: string[];
  repoType: RepoType;
  projectType: ProjectType;
  githubUrl?: string;
  url?: string;
  playStore?: string;
  tags: string[];
  screenshots?: string[];
  image?: string;
  technologies?: Technology[];
}

export interface Link {
  name: string;
  href: string;
  icon: string;
}

export interface Experience {
  name: string;
  href: string;
  title: string;
  logo: string;
  start: string;
  end?: string;
  description: string[];
  links?: Link[];
}

export interface Technology {
  name: string;
  icon: string;
}

// Remove duplicate Project interface and use IProjectItem instead
export type Project = IProjectItem;

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface DataStore {
  career: Experience[];
  education: Experience[];
  skills: SkillCategory[];
  projects: IProjectItem[];
}