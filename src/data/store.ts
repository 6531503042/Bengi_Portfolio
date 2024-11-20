import { Code2, Server, Layout, Smartphone, Wrench, Database } from "lucide-react";
import { DataStore, IProjectItem, ProjectType, RepoType } from '@/types';
import { projects } from './projects';

export const data: DataStore = {
  career: [
    {
      name: "DBS Bank",
      href: "https://www.dbs.com.sg",
      title: "Graduate Associate (SEED Programme)",
      logo: "/dbs.png",
      start: "Jul 2023",
      description: [
        "Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow",
        "Built a custom database migration tool using Python and MariaDB and facilitated the migration of 1000+ processes from a vendor platform"
      ]
    },
    {
      name: "Singapore Institute of Technology",
      href: "https://www.singaporetech.edu.sg",
      title: "Software Developer (Contract)",
      logo: "/sit.png",
      start: "Apr 2023",
      end: "Jun 2023",
      description: [
        "Built NFTVue, a NFT gallery website that allows students to connect their crypto wallets to view and verify their school event-issued NFTs",
        "Worked on DemoConstruct, a full-stack web application (React + Python) that uses Meshroom to reconstruct 3D models from captured images"
      ],
      links: [
        {
          name: "NFTVue",
          href: "https://nftvue.vercel.app",
          icon: "globe"
        }
      ]
    },
    {
      name: "DBS Bank",
      href: "https://www.dbs.com.sg",
      title: "Software Developer (Intern)",
      logo: "/dbs.png",
      start: "May 2022",
      end: "Dec 2022",
      description: [
        "Worked on the backend for the digital exchange and asset custody application using Spring Boot and Java",
        "Built an admin dashboard web application for a DBS Metaverse event using Spring Security and Angular"
      ]
    },
    {
      name: "Activate Interactive Pte Ltd",
      href: "https://www.activate.sg",
      title: "Software Developer (Intern)",
      logo: "/activate.png",
      start: "May 2019",
      end: "Aug 2019",
      description: [
        "Developed RP Connect, the iOS and Android mobile app for Republic Polytechnic using React Native"
      ]
    }
  ],
  education: [
    {
      name: "Mae Fah Luang University",
      href: "https://mfu.ac.th",
      title: "Bachelor of Engineering in Software Engineering",
      logo: "https://agroindustry.mfu.ac.th/wp-content/uploads/2018/07/icon_logo.png",
      start: "2021",
      description: [
        "Currently pursuing my bachelor's degree",
        "3rd Year Student",
        "School of Information Technology"
      ]
    }
  ],
  skills: [
    {
      title: "Front-End",
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      icon: Layout,
      skills: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "Next.js", icon: "/icons/nextjs.svg" },
        { name: "TailwindCSS", icon: "/icons/tailwind.svg" }
      ]
    },
    {
      title: "Back-End",
      description: "Developing robust server-side applications and APIs.",
      icon: Server,
      skills: [
        { name: "Node.js", icon: "/icons/nodejs.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
        { name: "MongoDB", icon: "/icons/mongodb.svg" }
      ]
    },
    {
      title: "DevOps",
      description: "Managing deployment, scaling, and operations of applications.",
      icon: Wrench,
      skills: [
        { name: "Docker", icon: "/icons/docker.svg" },
        { name: "AWS", icon: "/icons/aws.svg" },
        { name: "Git", icon: "/icons/git.svg" },
        { name: "Linux", icon: "/icons/linux.svg" }
      ]
    },
    {
      title: "Databases & Tools",
      description: "Experience with various databases and development tools.",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
        { name: "MySQL", icon: "/icons/mysql.svg" },
        { name: "Firebase", icon: "/icons/firebase.svg" },
        { name: "Elasticsearch", icon: "/icons/elasticsearch.svg" }
      ]
    }
  ],
  projects
};

export { projects };
export function getProjectDetails(id: string) {
  return projects.find((project) => project.id === id) || null;
}
