import { IProjectItem, RepoType, ProjectType } from './store';

export const projects: IProjectItem[] = [
  {
    id: "Sport-Complex",
    title: "Sport-Complex",
    description: "This is my college project booking system built using Go and Next.js used Microservices.",
    icons: ["/skills/go.svg", "/skills/nextjs.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.College,
    githubUrl: "https://github.com/6531503042/Sport-Complex",
    link: "https://github.com/6531503042/Sport-Complex",
    tags: ["Go", "Next.js", "Microservices", "MongoDB", "Docker", "Kafka", "JWT", "Management"],
    image: "https://raw.githubusercontent.com/6531503042/Sport-Complex/blob/main/assets/Screenshot%202567-09-01%20at%2021.57.59.png",
    screenshots: [
      "https://raw.githubusercontent.com/6531503042/Sport-Complex/refs/heads/main/assets/Screenshot%202567-09-01%20at%2021.57.59.png",
    ],
    technologies: [
      { name: "Go", icon: "/skills/go.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" }
    ],
    featured: true,
    sourceUrl: "https://github.com/6531503042/Sport-Complex"
  },
  {
    id: "ATA Feedback System",
    title: "ATA Feedback System",
    description: "Feedback System management for ATA IT LIMITED Canada Banking",
    icons: ["/skills/spring-boot.svg", "/skills/nextjs.svg", "/skills/python.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.College,
    githubUrl: "https://github.com/6531503042/feedback-ata-microservices-clean-arch-v1.git",
    link: "https://github.com/6531503042/feedback-ata-microservices-clean-arch-v1.git",
    tags: ["Java", "Spring Boot", "Next.js", "Python", "PostgreSQL", "MongoDB", "Docker", "Hugging Face"],
    image: "./public/ata.png",
    screenshots: [
      "./public/ata.png",
    ],
    technologies: [
      { name: "Spring Boot", icon: "/skills/spring-boot.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "Python", icon: "/skills/python.svg" },
      { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "Hugging Face", icon: "https://res.cloudinary.com/dyjxveu11/image/upload/v1625971707/Hugging_Face_400_200_00523b4a7e.png" }
    ],
    featured: false,
    demoUrl: "https://mood-metrics-zi4z.vercel.app/",
    sourceUrl: "https://github.com/6531503042/mood-metrics"
  },
  {
    id: "Deap-Appointment-App",
    title: "Deap Appointment App",
    description: "Deap App is an appointment mobile application developed using Flutter and Firebase.",
    icons: ["/skills/flutter.svg", "/skills/firebase.svg", "/skills/dart.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.College,
    githubUrl: "https://github.com/6531503042/Deap-Mobile-Application",
    link: "https://github.com/6531503042/Deap-Mobile-Application",
    url: "https://github.com/6531503042/Deap-Mobile-Application/releases/tag/v1.0.0",
    playStore: "https://play.google.com/store/apps/details?id=com.mobileapp.deap",
    tags: ["Dart", "Flutter", "Firebase"],
    screenshots: [
      "https://github.com/6531503042/Deap-Mobile-Application/raw/main/assets/DeapV2.png",
    ],
    image: "https://github.com/6531503042/Deap-Mobile-Application/raw/main/assets/DeapV2.png",
    technologies: [
      { name: "Flutter", icon: "/skills/flutter.svg" },
      { name: "Firebase", icon: "/skills/firebase.svg" },
      { name: "Dart", icon: "/skills/dart.svg" }
    ],
    featured: true,
    demoUrl: "https://github.com/6531503042/Deap-Mobile-Application/releases/tag/v1.0.0",
    sourceUrl: "https://github.com/6531503042/Deap-Mobile-Application"
  },
  {
    id: "Gigantic-Mall",
    title: "Gigantic-Mall",
    description: "Is a Shopping Mall for both Management & Buyer for web application developed using Spring Boot and React. And Used Microservices Architecture.",
    icons: ["/skills/spring-boot.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/Gigantic-Mall",
    link: "https://github.com/6531503042/Gigantic-Mall",
    tags: ["Java", "Spring Boot", "React", "MySQL", "Heroku"],
    screenshots: [
      "https://raw.githubusercontent.com/6531503042/Gigantic-Mall/refs/heads/main/assets/Gigantic_icon.png",
    ],
    image: "https://raw.githubusercontent.com/6531503042/Gigantic-Mall/refs/heads/main/assets/Gigantic_icon.png",
    technologies: [
      { name: "Spring Boot", icon: "/skills/spring-boot.svg" },
      { name: "React", icon: "/skills/react.svg" }
    ],
    featured: false,
    demoUrl: "https://github.com/6531503042/Gigantic-Mall",
    sourceUrl: "https://github.com/6531503042/Gigantic-Mall"
  },
];