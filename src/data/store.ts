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
      specialties: [
        "Microservices Architecture Design",
        "API Gateway Implementation",
        "Event-Driven Architecture",
        "CQRS Pattern Implementation",
        "Domain-Driven Design (DDD)"
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
            "Concurrent Programming"
          ]
        },
        { 
          name: "Spring Boot", 
          icon: "/skills/spring-boot.svg",
          specialties: [
            "WebFlux & R2DBC",
            "Spring Cloud Gateway",
            "Spring Security",
            "JPA & Hibernate",
            "Event Sourcing"
          ]
        },
        { 
          name: "Node.js", 
          icon: "/skills/nodejs.svg",
          specialties: [
            "Express.js",
            "NestJS",
            "GraphQL",
            "Socket.IO",
            "Microservices"
          ]
        },
        { 
          name: "Python", 
          icon: "/skills/python.svg",
          specialties: [
            "FastAPI",
            "Django",
            "Data Processing",
            "ML Integration"
          ]
        },
        { 
          name: "TypeScript", 
          icon: "/skills/typescript.svg",
          specialties: [
            "Type System Design",
            "Advanced Types",
            "Decorators",
            "Generic Types"
          ]
        },
        { 
          name: "Java", 
          icon: "/skills/java.svg",
          specialties: [
            "Spring Framework",
            "Reactive Programming",
            "Multithreading",
            "Design Patterns"
          ]
        }
      ]
    },
    {
      title: "Frontend & Design",
      description: "I'm passionate about design, animation, and interactions, always aiming to build fun websites with great user experiences.",
      icon: Layout,
      specialties: [
        "Responsive Design Architecture",
        "Animation Systems",
        "State Management Patterns",
        "Performance Optimization",
        "Micro-Frontend Architecture"
      ],
      skills: [
        { 
          name: "React", 
          icon: "/skills/react.svg",
          specialties: [
            "Custom Hooks",
            "Performance Optimization",
            "Server Components",
            "Advanced Patterns"
          ]
        },
        { 
          name: "Next.js", 
          icon: "/skills/nextjs.svg",
          specialties: [
            "App Router",
            "Server Actions",
            "Static Generation",
            "Edge Runtime"
          ]
        },
        { 
          name: "TypeScript", 
          icon: "/skills/typescript.svg",
          specialties: [
            "Type-Safe Components",
            "Custom Type Utils",
            "Advanced Generics"
          ]
        },
        { 
          name: "TailwindCSS", 
          icon: "/skills/tailwind.svg",
          specialties: [
            "Custom Design Systems",
            "Animation Classes",
            "Responsive Patterns"
          ]
        }
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "I have managed AWS, GCP, and various other cloud services for multiple start-ups and my own projects.",
      icon: Wrench,
      specialties: [
        "Container Orchestration",
        "CI/CD Pipeline Design",
        "Infrastructure as Code",
        "Cloud Architecture Design",
        "Service Mesh Implementation"
      ],
      skills: [
        { 
          name: "Docker", 
          icon: "/skills/docker.svg",
          specialties: [
            "Multi-stage Builds",
            "Custom Images",
            "Docker Compose",
            "Network Configuration"
          ]
        },
        { 
          name: "Kubernetes", 
          icon: "/skills/kubernetes.svg",
          specialties: [
            "Cluster Management",
            "Service Deployment",
            "Auto-scaling",
            "Resource Optimization"
          ]
        },
        { 
          name: "AWS", 
          icon: "/skills/aws.svg",
          specialties: [
            "ECS/EKS",
            "Lambda Functions",
            "API Gateway",
            "CloudFormation"
          ]
        },
        { 
          name: "GitHub Actions", 
          icon: "/skills/github.svg",
          specialties: [
            "Custom Workflows",
            "Matrix Builds",
            "Release Automation",
            "Security Scanning"
          ]
        }
      ]
    },
    {
      title: "Database & Tools",
      description: "Experience with various databases and data management tools for building scalable applications.",
      icon: Database,
      specialties: [
        "Database Design & Optimization",
        "Data Migration Strategies",
        "Caching Implementation",
        "Replication Setup",
        "Sharding Strategies"
      ],
      skills: [
        { 
          name: "PostgreSQL", 
          icon: "/skills/postgresql.svg",
          specialties: [
            "Performance Tuning",
            "Partitioning",
            "PL/pgSQL",
            "Replication"
          ]
        },
        { 
          name: "MongoDB", 
          icon: "/skills/mongodb.svg",
          specialties: [
            "Aggregation Pipeline",
            "Schema Design",
            "Indexing Strategies",
            "Sharding"
          ]
        },
        { 
          name: "Redis", 
          icon: "/skills/redis.svg",
          specialties: [
            "Caching Patterns",
            "Pub/Sub",
            "Data Structures",
            "Clustering"
          ]
        },
        { 
          name: "Kafka", 
          icon: "/skills/kafka.svg",
          specialties: [
            "Event Streaming",
            "Topic Design",
            "Consumer Groups",
            "Stream Processing"
          ]
        }
      ]
    }
  ],
  projects: projects
};