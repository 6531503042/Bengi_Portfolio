import { Code2, Server, Layout, Smartphone, Wrench, Database } from "lucide-react";
import { DataStore, IProjectItem, ProjectType, RepoType } from '@/types';

export const projects: IProjectItem[] = [
  {
    id: "Sport-Complex",
    title: "Sport-Complex",
    description:
      "This is my college project booking system built using Go and Next.js used Microservices.",
    icons: ["/skills/go.svg", "/skills/nextjs.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/Sport-Complex",
    tags: ["Go", "Next.js", "Microservices", "MongoDB", "Docker", "Kafka", "JWT", "Management"],
    image: "https://raw.githubusercontent.com/6531503042/Portfolio-BenGi/main/img/project1.png",
    technologies: [
      { name: "Go", icon: "/skills/go.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" }
    ],
    featured: true,
    demoUrl: "https://github.com/6531503042/Sport-Complex",
    sourceUrl: "https://github.com/6531503042/Sport-Complex"
  },
  {
    id: "Weather-Forecast",
    title: "Weather-Forecast",
    description:
      "A weather forecast application developed using Spring Boot, Java and JSP during my 2nd year. It provides current weather updates and a 5-day forecast with hourly details.",
    icons: ["/skills/spring-boot.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/ForecastAPI",
    tags: ["Java", "Spring Boot", "Jsp"],
    screenshots: ["https://raw.githubusercontent.com/6531503042/Portfolio-BenGi/main/img/project2.png"],
    image: "https://raw.githubusercontent.com/6531503042/Portfolio-BenGi/main/img/project2.png",
    technologies: [
      { name: "Spring Boot", icon: "/skills/spring-boot.svg" }
    ],
    featured: false,
    demoUrl: "https://github.com/6531503042/ForecastAPI",
    sourceUrl: "https://github.com/6531503042/ForecastAPI"
  },
  {
    id: "Deap-Appointment-App",
    title: "Deap Appointment App",
    description:
      "Deap App is an appointment mobile application developed using Flutter and Firebase.",
    icons: ["/skills/flutter.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/Deap-Mobile-Application",
    url: "https://github.com/6531503042/Deap-Mobile-Application/releases",
    playStore: "https://play.google.com/store/apps/details?id=com.mobileapp.deap",
    tags: ["Dart", "Flutter", "Firebase"],
    screenshots: [
      "https://raw.githubusercontent.com/6531503042/Portfolio-BenGi/main/img/project2.png",
    ],
    image: "https://raw.githubusercontent.com/6531503042/Portfolio-BenGi/main/img/project3.png",
    technologies: [
      { name: "Flutter", icon: "/skills/flutter.svg" },
      { name: "Firebase", icon: "/skills/firebase.svg" }
    ],
    featured: true,
    demoUrl: "https://github.com/6531503042/Deap-Mobile-Application/releases",
    sourceUrl: "https://github.com/6531503042/Deap-Mobile-Application"
  },
  {
    id: "Gigantic-Mall",
    title: "Gigantic-Mall",
    description:
      "Is a Shopping Mall for both Management & Buyer for web application developed using Spring Boot and React. And Used Microservices Architecture",
    icons: ["/skills/spring-boot.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/Gigantic-Mall",
    tags: ["Java", "Spring Boot", "React", "MySQL", "Heroku"],
    image: "https://raw.githubusercontent.com/6531503042/Portfolio-BenGi/main/img/project4.png",
    technologies: [
      { name: "Spring Boot", icon: "/skills/spring-boot.svg" },
      { name: "React", icon: "/skills/react.svg" }
    ],
    featured: false,
    demoUrl: "https://github.com/6531503042/Gigantic-Mall",
    sourceUrl: "https://github.com/6531503042/Gigantic-Mall"
  },
];

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
  projects: projects
};

export function getProjectDetails(id: string): IProjectItem | null {
  return projects.find((project) => project.id === id) || null;
}
