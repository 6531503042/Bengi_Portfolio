import { Database, Layout, Server, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: string;
  specialties: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  specialties: string[];
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    description:
      "I love problem-solving and building complex systems. I strive to create scalable, reliable, and secure solutions.",
    icon: Server,
    specialties: [
      "Microservices Architecture Design",
      "API Gateway Implementation",
      "Event-Driven Architecture",
      "CQRS Pattern Implementation",
      "Domain-Driven Design (DDD)",
    ],
    skills: [
      {
        name: "Go",
        icon: "/skills/go.svg",
        specialties: [
          "Clean Architecture",
          "Microservices",
          "gRPC",
          "Gin Framework",
          "Concurrent Programming",
        ],
      },
      {
        name: "Spring Boot",
        icon: "/skills/spring-boot.svg",
        specialties: [
          "WebFlux & R2DBC",
          "Spring Cloud Gateway",
          "Spring Security",
          "JPA & Hibernate",
          "Event Sourcing",
        ],
      },
      {
        name: "Node.js",
        icon: "/skills/nodejs.svg",
        specialties: [
          "Express.js",
          "NestJS",
          "GraphQL",
          "Socket.IO",
          "Microservices",
        ],
      },
      {
        name: "Python",
        icon: "/skills/python.svg",
        specialties: [
          "FastAPI",
          "Django",
          "Data Processing",
          "ML Integration",
        ],
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
        specialties: [
          "Type System Design",
          "Advanced Types",
          "Decorators",
          "Generic Types",
        ],
      },
      {
        name: "Java",
        icon: "/skills/java.svg",
        specialties: [
          "Spring Framework",
          "Reactive Programming",
          "Multithreading",
          "Design Patterns",
        ],
      },
    ],
  },
  {
    title: "Frontend & Design",
    description:
      "I'm passionate about design, animation, and interactions, always aiming to build fun websites with great user experiences.",
    icon: Layout,
    specialties: [
      "Responsive Design Architecture",
      "Animation Systems",
      "State Management Patterns",
      "Performance Optimization",
      "Micro-Frontend Architecture",
    ],
    skills: [
      {
        name: "React",
        icon: "/skills/react.svg",
        specialties: [
          "Custom Hooks",
          "Performance Optimization",
          "Server Components",
          "Advanced Patterns",
        ],
      },
      {
        name: "Next.js",
        icon: "/skills/nextjs.svg",
        specialties: [
          "App Router",
          "Server Actions",
          "Static Generation",
          "Edge Runtime",
        ],
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
        specialties: [
          "Type-Safe Components",
          "Custom Type Utils",
          "Advanced Generics",
        ],
      },
      {
        name: "TailwindCSS",
        icon: "/skills/tailwind.png",
        specialties: [
          "Custom Design Systems",
          "Animation Classes",
          "Responsive Patterns",
        ],
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "I have managed AWS, GCP, and various other cloud services for multiple start-ups and my own projects.",
    icon: Wrench,
    specialties: [
      "Container Orchestration",
      "CI/CD Pipeline Design",
      "Infrastructure as Code",
      "Cloud Architecture Design",
      "Service Mesh Implementation",
    ],
    skills: [
      {
        name: "Docker",
        icon: "/skills/docker.svg",
        specialties: [
          "Multi-stage Builds",
          "Custom Images",
          "Docker Compose",
          "Network Configuration",
        ],
      },
      {
        name: "Kubernetes",
        icon: "/skills/kubernetes.svg",
        specialties: [
          "Cluster Management",
          "Service Deployment",
          "Auto-scaling",
          "Resource Optimization",
        ],
      },
      {
        name: "AWS",
        icon: "/skills/aws.svg",
        specialties: [
          "ECS/EKS",
          "Lambda Functions",
          "API Gateway",
          "CloudFormation",
        ],
      },
      {
        name: "GitHub Actions",
        icon: "/skills/github.svg",
        specialties: [
          "Custom Workflows",
          "Matrix Builds",
          "Release Automation",
          "Security Scanning",
        ],
      },
    ],
  },
  {
    title: "Database & Tools",
    description:
      "Experience with various databases and data management tools for building scalable applications.",
    icon: Database,
    specialties: [
      "Database Design & Optimization",
      "Data Migration Strategies",
      "Caching Implementation",
      "Replication Setup",
      "Sharding Strategies",
    ],
    skills: [
      {
        name: "PostgreSQL",
        icon: "/skills/postgresql.svg",
        specialties: [
          "Performance Tuning",
          "Partitioning",
          "PL/pgSQL",
          "Replication",
        ],
      },
      {
        name: "MongoDB",
        icon: "/skills/mongodb.svg",
        specialties: [
          "Aggregation Pipeline",
          "Schema Design",
          "Indexing Strategies",
          "Sharding",
        ],
      },
      {
        name: "Redis",
        icon: "/skills/redis.svg",
        specialties: [
          "Caching Patterns",
          "Pub/Sub",
          "Data Structures",
          "Clustering",
        ],
      },
      {
        name: "Kafka",
        icon: "/skills/kafka.svg",
        specialties: [
          "Event Streaming",
          "Topic Design",
          "Consumer Groups",
          "Stream Processing",
        ],
      },
    ],
  },
];
