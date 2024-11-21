import { Code2, Server, Layout, Wrench, Database } from "lucide-react";
import { DataStore } from '@/types';

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
      title: "Backend",
      description: "I love problem-solving and building complex systems. I strive to create scalable, reliable, and secure solutions.",
      icon: Server,
      skills: [
        { name: "TypeScript", icon: "/skills/typescript.svg" },
        { name: "Node.js", icon: "/skills/nodejs.svg" },
        { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
        { name: "Python", icon: "/skills/python.svg" },
        { name: "Go", icon: "/skills/go.svg" },
        { name: "C#", icon: "/skills/csharp.svg" },
        { name: "Redis", icon: "/skills/redis.svg" },
        { name: "SQLite", icon: "/skills/sqlite.svg" },
        { name: "Spring Boot", icon: "/skills/spring-boot.svg" }
      ]
    },
    {
      title: "Frontend & Design",
      description: "I'm passionate about design, animation, and interactions, always aiming to build fun websites with great user experiences.",
      icon: Layout,
      skills: [
        { name: "React", icon: "/skills/react.svg" },
        { name: "Next.js", icon: "/skills/nextjs.svg" },
        { name: "TypeScript", icon: "/skills/typescript.svg" },
        { name: "HTML", icon: "/skills/html.svg" },
        { name: "CSS", icon: "/skills/css.svg" },
        { name: "JavaScript", icon: "/skills/javascript.svg" },
        { name: "Sass", icon: "/skills/sass.svg" },
        { name: "Redux", icon: "/skills/redux.svg" }
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "I have managed AWS, GCP, and various other cloud services for multiple start-ups and my own projects.",
      icon: Wrench,
      skills: [
        { name: "Docker", icon: "/skills/docker.svg" },
        { name: "AWS", icon: "/skills/aws.svg" },
        { name: "Kubernetes", icon: "/skills/kubernetes.svg" },
        { name: "Jenkins", icon: "/skills/jenkins.svg" },
        { name: "Git", icon: "/skills/git.svg" },
        { name: "GitHub", icon: "/skills/github.svg" }
      ]
    }
  ],
  
  projects: projects
};

export function getProjectDetails(id: string): IProjectItem | null {
  return projects.find((project) => project.id === id) || null;
}
