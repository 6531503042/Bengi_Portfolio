'use client';

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimelineSection from "@/components/sections/TimelineSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import { data } from "@/data/store";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="relative">
      {/* Content */}
      <div className="relative">
        <HeroSection />
        
        <section id="experience" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden border border-white/10"
            >
              <Tabs defaultValue="experience" className="w-full">
                <div className="px-6 pt-6">
                  <TabsList className="grid w-full grid-cols-3 relative bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
                    <TabsTrigger 
                      value="experience" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:backdrop-blur-sm text-white/70 data-[state=active]:text-white rounded-lg transition-all duration-300"
                    >
                      Experience
                    </TabsTrigger>
                    <TabsTrigger 
                      value="education" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:backdrop-blur-sm text-white/70 data-[state=active]:text-white rounded-lg transition-all duration-300"
                    >
                      Education
                    </TabsTrigger>
                    <TabsTrigger 
                      value="skills" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:backdrop-blur-sm text-white/70 data-[state=active]:text-white rounded-lg transition-all duration-300"
                    >
                      Skills
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <div className="p-6">
                  <TabsContent value="experience" className="mt-0">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-8 border border-white/10"
                    >
                      <div className="relative z-10">
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center gap-4 mb-6"
                        >
                          <div className="relative">
                            <div className="absolute inset-0 blur-xl bg-blue-500/20 rounded-full" />
                            <Briefcase className="w-8 h-8 text-blue-400 relative z-10" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                              Freelance Experience
                            </h3>
                            <p className="text-gray-400">Full Stack Developer since 2023</p>
                          </div>
                        </motion.div>
                        <TimelineSection items={data.career} />
                      </div>
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="education" className="mt-0">
                    <TimelineSection items={data.education} />
                  </TabsContent>
                  
                  <TabsContent value="skills" className="mt-0">
                    <SkillsSection />
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
          </div>
        </section>

        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
} 