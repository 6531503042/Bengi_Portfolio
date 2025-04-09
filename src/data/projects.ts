import { IProjectItem, ProjectType, RepoType } from "@/types";

export const projects: IProjectItem[] = [
  {
    id: "Sport-Complex",
    title: "Sport Complex Management",
    description: "A comprehensive sports facility management system built using Go and Next.js with microservices architecture. Features include real-time booking, facility management, payment processing, and user management.",
    icons: [
      "/skills/go.svg", 
      "/skills/nextjs.svg",
      "/skills/docker.svg",
      "/skills/mongodb.svg",
      "/skills/kafka.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.College,
    githubUrl: "https://github.com/6531503042/Sport-Complex",
    tags: [
      "Go",
      "Next.js",
      "Microservices",
      "MongoDB",
      "Docker",
      "Kafka",
      "JWT",
      "Management",
      "Real-time Booking"
    ],
    image: "/projects/sport-complex/main.png",
    screenshots: [
      "/projects/sport-complex/dashboard.png",
      "/projects/sport-complex/booking.png",
      "/projects/sport-complex/facilities.png",
      "/projects/sport-complex/admin.png"
    ],
    technologies: [
      { name: "Go", icon: "/skills/go.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Kafka", icon: "/skills/kafka.svg" }
    ],
    featured: true,
    sourceUrl: "https://github.com/6531503042/Sport-Complex"
  },
  {
    id: "ata-feedback",
    title: "ATA Feedback System",
    description: "An advanced feedback management system for ATA IT LIMITED Canada Banking, featuring sentiment analysis, automated response generation, and comprehensive analytics. Built with Spring Boot, Next.js, and Python for NLP processing.",
    icons: [
      "/skills/spring-boot.svg",
      "/skills/nextjs.svg",
      "/skills/python.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.College,
    githubUrl: "https://github.com/6531503042/feedback-ata-microservices-clean-arch-v1",
    tags: [
      "Java",
      "Spring Boot",
      "Next.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Hugging Face",
      "NLP",
      "Clean Architecture"
    ],
    image: "/projects/ata-feedback/main.png",
    screenshots: [
      "/projects/ata-feedback/dashboard.png",
      "/projects/ata-feedback/analytics.png",
      "/projects/ata-feedback/responses.png"
    ],
    technologies: [
      { name: "Spring Boot", icon: "/skills/spring-boot.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "Python", icon: "/skills/python.svg" },
      { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Docker", icon: "/skills/docker.svg" }
    ],
    featured: true,
    demoUrl: "https://mood-metrics-zi4z.vercel.app/",
    sourceUrl: "https://github.com/6531503042/mood-metrics"
  },
  {
    id: "deap-appointment",
    title: "Deap Appointment App",
    description: "A modern mobile appointment scheduling application built with Flutter and Firebase. Features include real-time scheduling, push notifications, user authentication, and calendar integration.",
    icons: [
      "/skills/flutter.svg",
      "/skills/firebase.svg",
      "/skills/dart.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.College,
    githubUrl: "https://github.com/6531503042/Deap-Mobile-Application",
    url: "https://github.com/6531503042/Deap-Mobile-Application/releases/tag/v1.0.0",
    playStore: "https://play.google.com/store/apps/details?id=com.mobileapp.deap",
    tags: [
      "Dart",
      "Flutter",
      "Firebase",
      "Real-time",
      "Mobile App",
      "Cloud Messaging",
      "Authentication"
    ],
    screenshots: [
      "https://github.com/6531503042/Deap-Mobile-Application/raw/main/assets/DeapV2.png",
      "/projects/deap/schedule.png",
      "/projects/deap/profile.png",
      "/projects/deap/notifications.png"
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
    id: "weather-forecast",
    title: "Weather Forecast App",
    description: "A comprehensive weather forecasting application built with Spring Boot and JSP. Features include current weather updates, 5-day forecasts with hourly details, location-based weather, and weather alerts.",
    icons: ["/skills/spring-boot.svg", "/skills/java.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.College,
    githubUrl: "https://github.com/6531503042/ForecastAPI",
    tags: [
      "Java",
      "Spring Boot",
      "JSP",
      "REST API",
      "Weather API",
      "Responsive Design"
    ],
    screenshots: [
      "https://raw.githubusercontent.com/6531503042/ForecastAPI/refs/heads/main/Assets/cover.png",
      "/projects/weather/forecast.png",
      "/projects/weather/details.png"
    ],
    image: "https://raw.githubusercontent.com/6531503042/ForecastAPI/refs/heads/main/Assets/cover.png",
    technologies: [
      { name: "Spring Boot", icon: "/skills/spring-boot.svg" },
      { name: "Java", icon: "/skills/java.svg" }
    ],
    featured: false,
    demoUrl: "https://github.com/6531503042/ForecastAPI",
    sourceUrl: "https://github.com/6531503042/ForecastAPI"
  },
  {
    id: "gigantic-mall",
    title: "Gigantic Mall",
    description: "A full-featured e-commerce platform built with Spring Boot and React, implementing microservices architecture. Features include product management, shopping cart, order processing, and admin dashboard.",
    icons: [
      "/skills/spring-boot.svg",
      "/skills/react.svg",
      "/skills/mysql.svg",
      "/skills/redis.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/Gigantic-Mall",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "Redis",
      "Microservices",
      "E-commerce",
      "Payment Gateway"
    ],
    screenshots: [
      "https://raw.githubusercontent.com/6531503042/Gigantic-Mall/refs/heads/main/assets/Gigantic_icon.png",
      "/projects/mall/products.png",
      "/projects/mall/cart.png",
      "/projects/mall/admin.png"
    ],
    image: "https://raw.githubusercontent.com/6531503042/Gigantic-Mall/refs/heads/main/assets/Gigantic_icon.png",
    technologies: [
      { name: "Spring Boot", icon: "/skills/spring-boot.svg" },
      { name: "React", icon: "/skills/react.svg" },
      { name: "MySQL", icon: "/skills/mysql.svg" },
      { name: "Redis", icon: "/skills/redis.svg" }
    ],
    featured: true,
    demoUrl: "https://github.com/6531503042/Gigantic-Mall",
    sourceUrl: "https://github.com/6531503042/Gigantic-Mall"
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "My personal portfolio website built with Next.js and TailwindCSS, featuring a modern UI design, animations, and responsive layout. Showcases my projects, skills, and experience.",
    icons: [
      "/skills/nextjs.svg",
      "/skills/typescript.svg",
      "/skills/tailwind.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/Bengi_Portfolio",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Responsive Design",
      "Portfolio"
    ],
    screenshots: [
      "/projects/portfolio/home.png",
      "/projects/portfolio/projects.png",
      "/projects/portfolio/skills.png",
      "/projects/portfolio/contact.png"
    ],
    image: "/projects/portfolio/main.png",
    technologies: [
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "TailwindCSS", icon: "/skills/tailwind.svg" }
    ],
    featured: true,
    demoUrl: "https://bengi-portfolio.vercel.app",
    sourceUrl: "https://github.com/6531503042/Bengi_Portfolio"
  }
];