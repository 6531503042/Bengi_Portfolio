import { Code2, Server, Layout, Wrench, Database } from "lucide-react";
import { DataStore, IProjectItem, RepoType, ProjectType } from '@/types';
import { projects } from "./projects";

export const data: DataStore = {
  career: [
    {
      name: "Freelance Developer",
      href: "https://github.com/6531503042",
      title: "Full Stack Developer",
      logo: "/freelance.png",
      start: "Jan 2023",
      description: [
        "Successfully delivered multiple web applications and systems for various clients",
        "Developed a Sport Complex Booking System using Go and Next.js with microservices architecture",
        "Built ATA Feedback System for ATA IT LIMITED Canada Banking using Spring Boot and Next.js",
        "Created Deap Appointment App, a mobile application using Flutter and Firebase",
        "Implemented Weather Forecast application using Spring Boot and JSP",
        "Developed Gigantic-Mall, an e-commerce platform using Spring Boot and React"
      ],
      links: [
        {
          name: "Portfolio",
          href: "https://github.com/6531503042",
          icon: "globe"
        }
      ]
    },
    {
      name: "Tech Innovations Corp",
      href: "https://example.com",
      title: "Senior Software Engineer",
      logo: "/company1.png",
      start: "Jan 2023",
      description: [
        "Led development of a microservices architecture handling 1M+ daily requests using Node.js and Kubernetes",
        "Implemented real-time analytics dashboard reducing data processing latency by 60% using React and WebSocket"
      ]
    },
    {
      name: "Digital Solutions Ltd",
      href: "https://example.org",
      title: "Full Stack Developer",
      logo: "/company2.png",
      start: "Mar 2022",
      end: "Dec 2022",
      description: [
        "Architected and deployed an AI-powered recommendation engine increasing user engagement by 45%",
        "Developed a scalable content management system serving 500k+ monthly active users"
      ],
      links: [
        {
          name: "Project X",
          href: "https://project-x.demo",
          icon: "globe"
        }
      ]
    },
  ],
  education: [
    {
      name: "Mae Fah Luang University",
      href: "https://agroindustry.mfu.ac.th",
      title: "Bachelor of Engineering in Software Engineering",
      logo: "https://agroindustry.mfu.ac.th/wp-content/uploads/2018/07/icon_logo.png",
      start: "2022",
      end: "2026",
      description: [
        "Currently Studying",
        "3rd Year Student",
        "School of Information Technology",
        "Focus on Full Stack Development and Software Architecture",
        "Active participant in coding competitions and hackathons"
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
        { name: "JavaScript", icon: "/skills/javascript.svg" },
        { name: "Node.js", icon: "/skills/nodejs.svg" },
        { name: "Python", icon: "/skills/python.svg" },
        { name: "Go", icon: "/skills/go.svg" },
        { name: "C#", icon: "/skills/csharp.svg" },
        { name: "Java", icon: "/skills/java.svg" },
        { name: "Dart", icon: "/skills/dart.svg" },
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
        { name: "Terraform", icon: "/skills/terraform.svg" },
        { name: "Kubernetes", icon: "/skills/kubernetes.svg" },
        { name: "Jenkins", icon: "/skills/jenkins.svg" },
        { name: "Git", icon: "/skills/git.svg" },
        { name: "GitHub", icon: "/skills/github.svg" }
      ]
    },
    {
      title: "Database & Tools",
      description: "Experience with various databases and data management tools for building scalable applications.",
      icon: Database,
      skills: [
        { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
        { name: "MongoDB", icon: "/skills/mongodb.svg" },
        { name: "Redis", icon: "/skills/redis.svg" },
        { name: "SQLite", icon: "/skills/sqlite.svg" },
        { name: "MySQL", icon: "/skills/mysql.svg" },
        { name: "Firebase", icon: "/skills/firebase.svg" },
        { name: "Kafka", icon: "/skills/kafka.svg" },
        { name: "Hugging Face", icon: "https://res.cloudinary.com/dyjxveu11/image/upload/v1625971707/Hugging_Face_400_200_00523b4a7e.png" }
      ]
    }
  ],
  projects: projects
};