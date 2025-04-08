import { LucideIcon } from "lucide-react";
import { RefObject } from "react";

export enum RepoType {
  Public = "Public",
  Private = "Private"
}

export enum ProjectType {
  Personal = "Personal",
  JobWork = "JobWork",
  Freelance = "Freelance",
  College = "College",
  Team = "Team",
  OpenSource = "OpenSource",
}

export interface CoreComponentsProps {
  children?: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  id?: string;
  elementRef?: RefObject<HTMLDivElement>;
}

export interface IProjectItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  icons?: string[];
  repoType: RepoType;
  projectType: ProjectType;
  githubUrl?: string;
  url?: string;
  playStore?: string;
  tags: string[];
  screenshots?: string[];
  image?: string;
  technologies?: Technology[];
  featured?: boolean;
  demoUrl?: string;
  sourceUrl?: string;
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

export interface Skill {
  name: string;
  icon: string;
  specialties?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
  specialties?: string[];
}

export interface DataStore {
  career: Experience[];
  education: Experience[];
  skills: SkillCategory[];
  projects: IProjectItem[];
}