import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimelineSection from "../components/sections/TimelineSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import { Experience } from "@/types";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-card"
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
                <TabsContent value="education" className="mt-0">
                  <TimelineSection items={education} />
                </TabsContent>
                
                <TabsContent value="skills" className="mt-0">
                  <SkillsSection />
                </TabsContent>
                
                <TabsContent value="work" className="mt-0">
                  <TimelineSection items={workExperiences} />
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </section>

      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const education: Experience[] = [
  {
    name: "Mae Fah Luang University",
    href: "https://mfu.ac.th",
    title: "Bachelor of Engineering in Software Engineering",
    logo: "https://agroindustry.mfu.ac.th/wp-content/uploads/2018/07/icon_logo.png",
    start: "2021",
    description: [
      "Currently pursuing my bachelor's degree",
      "3rd Year Student",
      "School of Information Technology"
    ]
  }
];

const workExperiences: Experience[] = [
  {
    name: "DBS Bank",
    href: "https://www.dbs.com.sg",
    title: "Software Engineer",
    logo: "/dbs-logo.png",
    start: "Jul 2023",
    description: [
      "Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow",
      "Built a custom database migration tool using Python and MariaDB and facilitated the migration of 1000+ processes from a vendor platform"
    ]
  },
  {
    name: "Singapore Institute of Technology",
    href: "https://www.singaporetech.edu.sg",
    title: "Software Developer",
    logo: "/sit-logo.png",
    start: "Apr 2023",
    end: "Jun 2023",
    description: [
      "Built NFTVue, a NFT gallery website that allows students to connect their crypto wallets to view and verify their school event-issued NFTs",
      "Worked on DemoConstruct, a full-stack web application (React + Python) that uses Meshroom to reconstruct 3D models from captured images"
    ],
    links: [
      {
        name: "NFTVue",
        href: "https://nftvue.vercel.app",
        icon: "Globe"
      }
    ]
  }
];

export default Index;