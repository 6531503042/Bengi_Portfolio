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
    description: "A redesigned scalable sport complex system built with Go, gRPC, Kafka, Redis, and Next.js. It manages facility booking, payment, and notifications using microservices and Kubernetes-ready architecture.",
    icons: [
      "/skills/go.svg", "/skills/grpc.svg", "/skills/mongodb.svg", "/skills/docker.svg", "/skills/nextjs.svg",
      "/skills/kafka.svg", "/skills/tailwind.png", "/skills/typescript.svg", "/skills/redis.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.College,
    githubUrl: "https://github.com/6531503042/Sport-Complex",
    tags: [
      "Go", "gRPC", "MongoDB", "Docker", "Next.js", "Kafka", "Redis", "TailwindCSS", "Typescript", "Kubernetes", "Microservices"
    ],
    technologies: [
      { name: "Go", icon: "/skills/go.svg" },
      { name: "gRPC", icon: "/skills/grpc.png" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "Kafka", icon: "/skills/kafka.svg" },
      { name: "Redis", icon: "/skills/redis.svg" },
      { name: "TailwindCSS", icon: "/skills/tailwind.png" },
      { name: "Typescript", icon: "/skills/typescript.svg" }
    ],
    image: "/projects/sport-complex/Sport-Complex-Banner.png",
    screenshots: [
      "/projects/sport-complex/booking-gym.png",
      "/projects/sport-complex/confirm-booking.png",
      "/projects/sport-complex/payment-client.png",
      "/projects/sport-complex/payment-scan-qr-code.png"
    ],
    featured: true,
    sourceUrl: "https://github.com/6531503042/Sport-Complex"
  },
  {
    id: "ata-feedback",
    title: "ATA Feedback System",
    description: "A microservices-based confidential feedback platform for ATA Canada Bank using Java Spring WebFlux, NLP in Python, and role-based control. Features include AI sentiment analysis, visual dashboards, and secure user workflows.",
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
      "Java", "Spring WebFlux", "Python", "PostgreSQL", "MongoDB", "Docker", "Swagger", "Next.js", "Typescript", "TailwindCSS", "Hero UI", "ReactBit"
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
      { name: "Spring WebFlux", icon: "/skills/spring-boot.svg" },
      { name: "Python", icon: "/skills/python.svg" },
      { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "TailwindCSS", icon: "/skills/tailwind.png" }
    ],
    featured: true,
    demoUrl: "https://mood-metrics-zi4z.vercel.app/",
    sourceUrl: "https://github.com/6531503042/mood-metrics"
  },
  {
    id: "deap-appointment",
    title: "Deap Appointment App",
    description: "A Flutter-based dental appointment mobile app integrating Firebase for scheduling, reviews, calendar sync, and doctor info. Features include booking by specialization and in-app user feedback.",
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
    tags: ["Dart", "Flutter", "Firebase", "Dental", "Real-time", "Mobile", "Reviews"],
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
    description: "A full-stack website for Garena's Football Game Fan Meet, built in 3 days for user team voting, prize claim, CSV import/export, and admin dashboards. Scales for over 1,000+ users.",
    icons: [
      "/skills/nextjs.svg",
      "/skills/go.svg",
      "/skills/tailwind.png",
      "/skills/typescript.svg",
      "/skills/nodejs.svg",
      "/skills/mongodb.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.College,
    githubUrl: "https://github.com/6531503042/FC-Online",
    tags: [
      "Next.js", "Go", "TypeScript", "Node.js", "MongoDB", "TailwindCSS", "Responsive Design", "Sports Platform"
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
      { name: "Go", icon: "/skills/go.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TailwindCSS", icon: "/skills/tailwind.png" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" }
    ],
    featured: true,
    sourceUrl: "https://github.com/6531503042/FC-Online"
  },
  {
    id: "hllc-2025",
    title: "HLLC 2025 Conference",
    description: "A multi-platform conference system for MFU with 3D interactive tools, student check-in tracking, SSE notifications, and gRPC backends. Designed for 3,000–4,000 concurrent users.",
    icons: [
      "/skills/nestjs.png",
      "/skills/mongodb.svg",
      "/skills/react-native.svg",
      "/skills/redis.svg",
      "/skills/grpc.png",
      "/skills/kafka.svg",
      "/skills/tailwind.png",
      "/skills/blender.png"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.Freelance,
    tags: [
      "Nest.js", "MongoDB", "React Native", "Redis", "gRPC", "Kafka", "SSE", "Next.js", "Hero UI", "TailwindCSS", "3D", "Blender"
    ],
    image: "/projects/hllc-2025/HLLC-Banner.png",
    screenshots: [
      "/projects/hllc-2025/1.png",
      "/projects/hllc-2025/2.png"
    ],
    technologies: [
        { name: "Nest.js", icon: "/skills/nestjs.png" },
        { name: "MongoDB", icon: "/skills/mongodb.svg" },
        { name: "React Native", icon: "/skills/react-native.svg" },
        { name: "Redis", icon: "/skills/redis.svg" },
        { name: "gRPC", icon: "/skills/grpc.png" },
        { name: "Kafka", icon: "/skills/kafka.svg" },
        { name: "TailwindCSS", icon: "/skills/tailwind.png" },
        { name: "Blender", icon: "/skills/blender.png" }
    ],
    featured: true,
    sourceUrl: "https://github.com/6531503042/HLLC-2025"
  },
  {
    id: "iot-sensor",
    title: "IoT Sensor Dashboard",
    description: "UI/UX mockup dashboard for real-time sensor data using React, Radix UI, Hero UI, Shadcn, and Leaflet. Built for visualizing mock IoT metrics on maps.",
    icons: [
      "/skills/react.svg",
      "/skills/nodejs.svg",
      "/skills/mqtt.svg",
      "/skills/mongo.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    tags: ["React", "Radix", "Leaflet", "Hero UI", "Shadcn", "IoT", "Dashboard", "UX/UI"],
    image: "/projects/iot-sensor/IoT-Banner.png",
    screenshots: [
      "/projects/iot-sensor/1.png",
      "/projects/iot-sensor/2.png",
      "/projects/iot-sensor/3.png",
      "/projects/iot-sensor/4.png",
      "/projects/iot-sensor/5.png",
      "/projects/iot-sensor/6.png",
      "/projects/iot-sensor/7.png"
    ],
    technologies: [
      { name: "React", icon: "/skills/react.svg" }
    ],
    featured: true
  },
  {
    id: "readrealm",
    title: "ReadRealm Book Platform",
    description: "A manga and book reading platform with CMS, payment integration, VIP membership, and advertising modules. Backend powered by Golang and MongoDB.",
    icons: [
      "/skills/nextjs.svg",
      "/skills/typescript.svg",
      "/skills/go.svg",
      "/skills/mongodb.svg"
    ],
    repoType: RepoType.Public,
    projectType: ProjectType.Team,
    tags: ["Next.js", "Golang", "MongoDB", "Book", "CMS", "Coin System", "Payment"],
    image: "/projects/readrealm/ReadRealm-Banner.png",
    screenshots: [
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
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Golang", icon: "/skills/go.svg" }
    ],
    featured: true,
    sourceUrl: "https://github.com/6531503042/ReadRealm"
  },
  {
    id: "devwithme",
    title: "DevWithMe",
    description: "A productivity suite for students/devs featuring Pomodoro, tasks, finance tracker, and Kanban—built with Vite, Tailwind, Supabase, and Recharts.",
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
      "Next.js", "TypeScript", "Hero UI", "TailwindCSS", "Radix", "Supabase", "Recharts", "Pomodoro", "Kanban", "Finance Tracker"
    ],
    image: "/projects/devWithMe/devWithMe-Banner.png",
    screenshots: [
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
      { name: "TailwindCSS", icon: "/skills/tailwind.png" },
      { name: "Supabase", icon: "/skills/supabase.png" }
    ],
    featured: true,
    demoUrl: "https://devwithme.vercel.app",
    sourceUrl: "https://github.com/6531503042/devwithme"
  }
];