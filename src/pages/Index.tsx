import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import { useState } from "react";
import TimelineItem from "../components/Timeline";
import Skills from "../components/Skills";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-start gap-12"
        >
          <div>
            <h1 className="text-6xl font-bold mb-6">
              hi BenGi here 👋
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Software engineer specializing in full-stack development and microservices architecture
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Passionate about building scalable systems and exploring new technologies
            </p>
            <Button variant="outline" className="mb-8">
              Resume ↓
            </Button>
            <div className="flex gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
              </a>
              <a href="mailto:email@example.com">
                <Mail className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
              </a>
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="/your-photo.jpg"
            alt="Profile"
            className="w-64 h-64 rounded-2xl object-cover shadow-lg"
          />
        </motion.div>
      </section>

      {/* Experience Tabs Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="work">Work</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="work" className="space-y-12">
            {workExperiences.map((exp, index) => (
              <TimelineItem
                key={index}
                {...exp}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="space-y-12">
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                {...edu}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="skills">
            <Skills />
          </TabsContent>
        </Tabs>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">featured projects</h2>
          <a href="/projects" className="text-gray-600 hover:text-black">
            view more →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const workExperiences = [
  {
    title: "DBS Bank",
    subtitle: "Software Engineer",
    period: "Jul 2023 - Present",
    logo: "/dbs-logo.png",
    description: [
      "Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow",
      "Built a custom database migration tool using Python and MariaDB and facilitated the migration of 1000+ processes from a vendor platform"
    ]
  },
  {
    title: "Singapore Institute of Technology",
    subtitle: "Software Developer",
    period: "Apr 2023 - Jun 2023",
    logo: "/sit-logo.png",
    description: [
      "Built NFTVue, a NFT gallery website that allows students to connect their crypto wallets to view and verify their school event-issued NFTs",
      "Worked on DemoConstruct, a full-stack web application (React + Python) that uses Meshroom to reconstruct 3D models from captured images"
    ],
    link: { url: "https://nftvue.com", text: "NFTVue" }
  }
];

const education = [
  {
    title: "Singapore Institute of Technology",
    subtitle: "Bachelor of Engineering in Software Engineering",
    period: "2020 - 2024",
    logo: "/sit-logo.png",
    description: ["First Class Honours", "GPA: 4.0/4.0"]
  }
];

const projects = [
  {
    id: 1,
    title: "NFTVue",
    description: "A NFT gallery website for viewing and verifying school event-issued NFTs",
    image: "/project1.jpg"
  },
  {
    id: 2,
    title: "DemoConstruct",
    description: "Full-stack web application for 3D model reconstruction from images",
    image: "/project2.jpg"
  },
  {
    id: 3,
    title: "Banking Service Platform",
    description: "Microservices-based banking platform with workflow automation",
    image: "/project3.jpg"
  },
  {
    id: 4,
    title: "Data Migration Tool",
    description: "Custom tool for large-scale database migrations with validation",
    image: "/project4.jpg"
  }
];

export default Index;
