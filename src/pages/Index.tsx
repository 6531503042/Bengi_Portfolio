import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimelineSection from "../components/sections/TimelineSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import MouseEffect from "../components/effects/MouseEffect";
import { Experience } from "@/types";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <MouseEffect />
      <HeroSection />
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFFFFFFF]/80 backdrop-blur-sm rounded-3xl p-8"
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
    start: "2022",
    end: "2027",
    description: [
      "Currently Studying",
      "3rd Year Student",
      "School of Information Technology",
    ]
  }
];

const workExperiences: Experience[] = [
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
  }
];

export default Index;