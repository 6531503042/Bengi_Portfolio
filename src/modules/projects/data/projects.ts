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

export interface Technology {
  name: string;
  icon: string;
}



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
    image: "/projects/sport-complex/Sport-Complex-Banner.png",
    screenshots: [
      "/projects/sport-complex/Sport-Complex-Banner.png",
      "/projects/sport-complex/booking-gym.png",
      "/projects/sport-complex/confirm-booking.png",
      "/projects/sport-complex/payment-client.png",
      "/projects/sport-complex/payment-scan-qr-code.png"
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
    image: "/projects/ata-senior/Screenshot 2568-04-08 at 23.22.27.png",
    screenshots: [
      "/projects/ata-senior/Screenshot 2568-04-08 at 23.22.27.png",
      "/projects/ata-senior/Screenshot 2568-04-08 at 23.24.27.png",
      "/projects/ata-senior/Screenshot 2568-04-08 at 23.24.56.png",
      "/projects/ata-senior/Screenshot 2568-04-08 at 23.25.05.png",
      "/projects/ata-senior/Screenshot 2568-04-08 at 23.25.26.png",
      "/projects/ata-senior/Screenshot 2568-04-08 at 23.25.39.png",
      "/projects/ata-senior/Screenshot 2568-04-08 at 23.25.57.png",
      "/projects/ata-senior/Screenshot 2568-04-08 at 23.26.14.png",
      "/projects/ata-senior/Screenshot 2568-04-08 at 23.27.23.png",
      "/projects/ata-senior/Screenshot 2568-04-08 at 23.27.34.png",
      "/projects/ata-senior/Screenshot 2568-04-08 at 23.27.47.png"
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
      "/projects/deap-application"
    ],
    image: "https://github.com/6531503042/Deap-Mobile-Application/raw/main/assets/DeapV2.png",
    technologies: [
      { name: "Flutter", icon: "/skills/flutter.svg" },
      { name: "Firebase", icon: "/skills/firebase.svg" },
      { name: "Dart", icon: "/skills/dart.svg" }
    ],
    featured: false,
    demoUrl: "https://github.com/6531503042/Deap-Mobile-Application/releases/tag/v1.0.0",
    sourceUrl: "https://github.com/6531503042/Deap-Mobile-Application"
  },
  {
    id: "fc-online",
    title: "FC Online Platform",
    description: "A sports club management platform allowing fans to connect, purchase merchandise, book tickets, and participate in club activities. Built with modern web technologies for a seamless user experience.",
    icons: [
      "/skills/nextjs.svg",
      "/skills/typescript.svg",
      "/skills/nodejs.svg",
      "/skills/mongodb.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.College,
    githubUrl: "https://github.com/6531503042/FC-Online",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Responsive Design",
      "Sports Platform"
    ],
    screenshots: [
      "/projects/fc-online/s1.png",
      "/projects/fc-online/s2.png",
      "/projects/fc-online/s3.png",
      "/projects/fc-online/s4.png",
      "/projects/fc-online/s5.png",
      "/projects/fc-online/s6.png",
      "/projects/fc-online/s7.png"
    ],
    image: "/projects/fc-online/s1.png",
    technologies: [
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" }
    ],
    featured: false,
    sourceUrl: "https://github.com/6531503042/FC-Online"
  },
  {
    id: "hllc-2025",
    title: "HLLC 2025 Conference",
    description: "Website for the HLLC 2025 conference providing information about the event, registration, schedule, and speakers with a clean, professional interface.",
    icons: [
      "/skills/nextjs.svg",
      "/skills/typescript.svg",
      "/skills/tailwind.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.Freelance,
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Conference",
      "Event Website"
    ],
    image: "/projects/hllc-2025/HLLC-Banner.png",
    screenshots: [
      "/projects/hllc-2025/HLLC-Banner.png",
      "/projects/hllc-2025/1.png",
      "/projects/hllc-2025/2.png"
    ],
    technologies: [
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "TailwindCSS", icon: "/skills/tailwind.svg" }
    ],
    featured: true,
    sourceUrl: "https://github.com/6531503042/HLLC-2025"
  },
  {
    id: "iot-sensor",
    title: "IoT Sensor Dashboard",
    description: "Real-time IoT sensor monitoring dashboard with data visualization, alerting system, and remote device management capabilities.",
    icons: [
      "/skills/react.svg",
      "/skills/nodejs.svg",
      "/skills/mqtt.svg",
      "/skills/mongo.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    tags: [
      "React",
      "Node.js",
      "IoT",
      "MQTT",
      "MongoDB",
      "Real-time Data",
      "Dashboard"
    ],
    image: "/projects/iot-sensor/IoT-Banner.png",
    screenshots: [
      "/projects/iot-sensor/IoT-Banner.png",
      "/projects/iot-sensor/1.png",
      "/projects/iot-sensor/2.png",
      "/projects/iot-sensor/3.png",
      "/projects/iot-sensor/4.png",
      "/projects/iot-sensor/5.png",
      "/projects/iot-sensor/6.png",
      "/projects/iot-sensor/7.png"
    ],
    technologies: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" }
    ],
    featured: true
  },
  {
    id: "readrealm",
    title: "ReadRealm Book Platform",
    description: "An online book reading and publishing platform with features for authors to publish, readers to discover, and a community to discuss literary works.",
    icons: [
      "/skills/nextjs.svg",
      "/skills/typescript.svg",
      "/skills/postgresql.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.Team,
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Books",
      "Publishing",
      "Community"
    ],
    image: "/projects/readrealm/ReadRealm-Banner.png",
    screenshots: [
      "/projects/readrealm/ReadRealm-Banner.png",
      "/projects/readrealm/1.png",
      "/projects/readrealm/2.png",
      "/projects/readrealm/3.png",
      "/projects/readrealm/4.png",
      "/projects/readrealm/5.png",
      "/projects/readrealm/6.png",
      "/projects/readrealm/7.png",
      "/projects/readrealm/8.png",
      "/projects/readrealm/9.png"
    ],
    technologies: [
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "PostgreSQL", icon: "/skills/postgresql.svg" }
    ],
    featured: true,
    sourceUrl: "https://github.com/6531503042/ReadRealm"
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
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    image: "/placeholder.svg",
    technologies: [
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "TailwindCSS", icon: "/placeholder.svg" }
    ],
    featured: false,
    demoUrl: "https://bengi-portfolio.vercel.app",
    sourceUrl: "https://github.com/6531503042/Bengi_Portfolio"
  },
  {
    id: "devwithme",
    title: "DevWithMe",
    description: "A social platform for developers to collaborate on projects, share knowledge, and build their professional network with real-time chat, project management tools, and resource sharing.",
    icons: [
      "/skills/nextjs.svg",
      "/skills/typescript.svg",
      "/skills/tailwind.svg",
      "/skills/firebase.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/devwithme",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "Real-time",
      "Collaboration",
      "Developer Community"
    ],
    image: "/projects/devWithMe/devWithMe-Banner.png",
    screenshots: [
      "/projects/devWithMe/devWithMe-Banner.png",
      "/projects/devWithMe/landing-page.png",
      "/projects/devWithMe/login.png",
      "/projects/devWithMe/dashboard-tumbnail.png",
      "/projects/devWithMe/kanban.png",
      "/projects/devWithMe/kanban-column.png",
      "/projects/devWithMe/kanban-newcard.png",
      "/projects/devWithMe/task-create-tumbnail.png",
      "/projects/devWithMe/pomodoro-page.png",
      "/projects/devWithMe/finance-overall.png",
      "/projects/devWithMe/finance-weekly.png",
      "/projects/devWithMe/fiance-monthly.png",
      "/projects/devWithMe/finance-yearly.png"
    ],
    technologies: [
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "TailwindCSS", icon: "/skills/tailwind.svg" },
      { name: "Firebase", icon: "/skills/firebase.svg" }
    ],
    featured: true,
    demoUrl: "https://devwithme.vercel.app",
    sourceUrl: "https://github.com/6531503042/devwithme"
  }
];