import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import { useState } from "react";
import TimelineItem from "../components/Timeline";
import Skills from "../components/Skills";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education" | "skills">("work");

  const workExperiences = [
    {
      company: "DBS Bank",
      role: "Graduate Associate (SEED Programme)",
      period: "Jul 2023 - Present",
      logo: "/dbs-logo.png",
      description: [
        "Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow",
        "Built a custom database migration tool using Python and MariaDB and facilitated the migration of 1000+ processes from a vendor platform"
      ]
    },
    {
      company: "Singapore Institute of Technology",
      role: "Software Developer (Contract)",
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
      institution: "Singapore Institute of Technology",
      degree: "Bachelor of Engineering in Software Engineering",
      period: "2020 - 2024",
      logo: "/sit-logo.png",
      description: ["First Class Honours", "GPA: 4.0/4.0"]
    }
  ];

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
              hi nimit here 👋
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              21-year-old software engineering student from Thailand 🇹🇭
            </p>
            <p className="text-xl text-gray-600 mb-8">
              I like to develop full-stack applications and learn new technologies.
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
            className="w-64 h-64 rounded-2xl object-cover"
          />
        </motion.div>
      </section>

      {/* Work, Education & Skills Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex gap-4 mb-12">
          {["work", "education", "skills"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full capitalize ${
                activeTab === tab ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
              } transition-colors`}
              onClick={() => setActiveTab(tab as typeof activeTab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="space-y-12">
          {activeTab === "work" && workExperiences.map((exp, index) => (
            <TimelineItem
              key={index}
              logo={exp.logo}
              title={exp.company}
              subtitle={exp.role}
              period={exp.period}
              description={exp.description}
              link={exp.link}
            />
          ))}
          {activeTab === "education" && education.map((edu, index) => (
            <TimelineItem
              key={index}
              logo={edu.logo}
              title={edu.institution}
              subtitle={edu.degree}
              period={edu.period}
              description={edu.description}
            />
          ))}
          {activeTab === "skills" && <Skills />}
        </div>
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
          {[1, 2, 3, 4].map((project) => (
            <motion.div
              key={project}
              className="project-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={`https://source.unsplash.com/random/800x600?programming&${project}`}
                alt={`Project ${project}`}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
              <p className="text-gray-600">
                A brief description of the project and the technologies used.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;