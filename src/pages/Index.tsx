import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import Navigation from "../components/Navigation";
import WorkExperience from "../components/WorkExperience";

const Index = () => {
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
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold mb-6">
            hi nimit here 👋
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            21-year-old software engineering student from Thailand 🇹🇭
          </p>
          <p className="text-xl text-gray-600 mb-8">
            I like to develop full-stack applications and learn new technologies.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50">
              Resume <span>↓</span>
            </button>
          </div>
          <div className="flex gap-6 mt-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-black" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-gray-600 hover:text-black" />
            </a>
            <a href="mailto:email@example.com">
              <Mail className="w-6 h-6 text-gray-600 hover:text-black" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Work Experience Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex gap-4 mb-8">
          <button className="px-6 py-2 bg-black text-white rounded-full">Work</button>
          <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full">Education</button>
        </div>
        <div className="space-y-12">
          {workExperiences.map((exp, index) => (
            <WorkExperience key={index} {...exp} />
          ))}
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
        {/* Add your featured projects here */}
      </section>
    </div>
  );
};

export default Index;
