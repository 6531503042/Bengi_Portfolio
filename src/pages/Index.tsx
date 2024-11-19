import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import TimelineItem from "../components/Timeline";
import Skills from "../components/Skills";
import ProjectsGrid from "../components/ProjectsGrid";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex items-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-12 items-center"
          >
            <div>
              <h1 className="text-6xl font-bold mb-6">
                hi BenGi here 👋
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                21-year-old backend software developer from Thailand 🇹🇭
              </p>
              <p className="text-xl text-gray-600 mb-8">
                I like to develop backend, drink instant coffee and get coding advice from my cat, Luffy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="outline">
                  Download Resume ↓
                </Button>
              </div>
              <div className="flex gap-6">
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-50 p-3 rounded-full"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
                </motion.a>
                <motion.a 
                  href="https://github.com/6531503042" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-50 p-3 rounded-full"
                >
                  <Github className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
                </motion.a>
                <motion.a 
                  href="mailto:nimittanbooutor@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-50 p-3 rounded-full"
                >
                  <Mail className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
                </motion.a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl -rotate-6"></div>
              <img
                src="/your-photo.jpg"
                alt="Profile"
                className="relative w-full h-full rounded-2xl object-cover shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/90 rounded-3xl shadow-xl border border-gray-800 overflow-hidden"
          >
            <Tabs defaultValue="education" className="w-full">
              <div className="px-6 pt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="work">Work</TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-6">
                <TabsContent value="education" className="space-y-8 mt-0">
                  {education.map((edu, index) => (
                    <TimelineItem key={index} {...edu} />
                  ))}
                </TabsContent>
                
                <TabsContent value="skills" className="mt-0">
                  <Skills />
                </TabsContent>
                
                <TabsContent value="work" className="space-y-8 mt-0">
                  {workExperiences.map((exp, index) => (
                    <TimelineItem key={index} {...exp} />
                  ))}
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">My Projects</h2>
              <p className="text-gray-400">
                Here you can find a collection of my public open-source projects.
                Feel free to explore and check them out!
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="/">← Back to Home</a>
              </Button>
            </div>
            <ProjectsGrid />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100"
          >
            <h2 className="text-4xl font-bold mb-6">let's work together</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              I'm always open to new opportunities and interesting projects. 
              Feel free to reach out if you'd like to collaborate or just chat!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Send me an email →
              </Button>
              <Button variant="outline" size="lg">
                Schedule a call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const education = [
  {
    logo: "https://agroindustry.mfu.ac.th/wp-content/uploads/2018/07/icon_logo.png",
    title: "Mae Fah Luang University",
    subtitle: "Bachelor of Engineering in Software Engineering",
    period: "2021 - Present",
    description: [
      "Currently pursuing my bachelor's degree",
      "3rd Year Student",
      "School of Information Technology"
    ]
  }
];

const workExperiences = [
  {
    logo: "/dbs-logo.png",
    title: "DBS Bank",
    subtitle: "Software Engineer",
    period: "Jul 2023 - Present",
    description: [
      "Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow",
      "Built a custom database migration tool using Python and MariaDB and facilitated the migration of 1000+ processes from a vendor platform"
    ]
  },
  {
    logo: "/sit-logo.png",
    title: "Singapore Institute of Technology",
    subtitle: "Software Developer",
    period: "Apr 2023 - Jun 2023",
    description: [
      "Built NFTVue, a NFT gallery website that allows students to connect their crypto wallets to view and verify their school event-issued NFTs",
      "Worked on DemoConstruct, a full-stack web application (React + Python) that uses Meshroom to reconstruct 3D models from captured images"
    ],
    link: { url: "https://nftvue.com", text: "NFTVue" }
  }
];

export default Index;
