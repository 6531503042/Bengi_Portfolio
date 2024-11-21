import { IProjectItem, ProjectType, RepoType } from "@/types";

export const projects: IProjectItem[] = [
  {
    id: "Sport-Complex",
    title: "Sport-Complex",
    description: "This is my college project booking system built using Go and Next.js used Microservices.",
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
    id: "ATA Feedback System",
    title: "ATA Feedback System",
    description: "Feedback System for ATA IT LIMITED Canada Banking for Feedback System.",
    icons: ["/skills/spring-boot.svg", "/skills/nextjs.svg", "/skills/python.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/mood-metrics",
    tags: ["Java", "Spring Boot", "Next.js", "Python", "MySQL", "Heroku"],
    image: "https://raw.githubusercontent.com/6531503042/Portfolio-BenGi/main/img/project5.png",
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
    icons: ["/skills/flutter.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/Deap-Mobile-Application",
    url: "https://github.com/6531503042/Deap-Mobile-Application/releases",
    playStore: "https://play.google.com/store/apps/details?id=com.mobileapp.deap",
    tags: ["Dart", "Flutter", "Firebase"],
    screenshots: [
      "https://github.com/6531503042/Deap-Mobile-Application/raw/main/assets/DeapV2.png",
    ],
    image: "https://github.com/6531503042/Deap-Mobile-Application/raw/main/assets/DeapV2.png",
    technologies: [
      { name: "Flutter", icon: "/skills/flutter.svg" },
      { name: "Firebase", icon: "/skills/firebase.svg" }
    ],
    featured: true,
    demoUrl: "https://github.com/6531503042/Deap-Mobile-Application/releases",
    sourceUrl: "https://github.com/6531503042/Deap-Mobile-Application"
  },
  {
    id: "Weather-Forecast",
    title: "Weather-Forecast",
    description: "A weather forecast application developed using Spring Boot, Java and JSP during my 2nd year. It provides current weather updates and a 5-day forecast with hourly details.",
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
    id: "Gigantic-Mall",
    title: "Gigantic-Mall",
    description: "Is a Shopping Mall for both Management & Buyer for web application developed using Spring Boot and React. And Used Microservices Architecture.",
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
