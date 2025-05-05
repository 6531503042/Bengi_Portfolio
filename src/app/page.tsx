'use client';

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import TimelineSection from "@/modules/timeline/components/TimelineSection";
import ProjectsSection from "@/modules/projects/components/ProjectsSection";
import ContactSection from "@/modules/contract/components/ContactSection";
import HeroSection from "@/modules/hero/components/HeroSection";
import { data as experienceData } from "@/modules/experience/data/experience";
import { data as timelineData } from "@/modules/timeline/data/timeline";
import SkillsSection from "@/modules/skill/components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <section id="experience" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl border border-white/10 overflow-hidden"
        >
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="w-full grid grid-cols-3 p-1 bg-white/5 backdrop-blur-md border-b border-white/10">
              <TabsTrigger 
                value="experience" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/20 data-[state=active]:to-purple-600/20 text-white/70 data-[state=active]:text-white rounded-lg transition-all"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger 
                value="education" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/20 data-[state=active]:to-purple-600/20 text-white/70 data-[state=active]:text-white rounded-lg transition-all"
              >
                Education
              </TabsTrigger>
              <TabsTrigger 
                value="skills" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/20 data-[state=active]:to-purple-600/20 text-white/70 data-[state=active]:text-white rounded-lg transition-all"
              >
                Skills
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="experience" className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative p-2 rounded-full bg-blue-500/10">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Professional Experience
                  </h3>
                  <p className="text-gray-400 text-sm">Full Stack Developer since 2023</p>
                </div>
              </div>
              <TimelineSection items={experienceData} />
            </TabsContent>
            
            <TabsContent value="education" className="p-6">
              <TimelineSection items={timelineData.education} />
            </TabsContent>
            
            <TabsContent value="skills" className="p-6">
              <SkillsSection />
            </TabsContent>
          </Tabs>
        </motion.div>
      </section>

      <ProjectsSection />
      <ContactSection />
    </main>
  );
} 