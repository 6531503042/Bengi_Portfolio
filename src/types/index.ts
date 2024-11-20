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

export interface Project {
  name: string;
  description: string;
  image: string;
  href?: string;
  tags: string[];
  links: Link[];
}

export interface DataStore {
  career: Experience[];
  education: Experience[];
  projects: Project[];
}