import { LucideIcon } from "lucide-react";

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

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  featured?: boolean;
  demoUrl?: string;
  sourceUrl?: string;
}

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
  projects: Project[];
}