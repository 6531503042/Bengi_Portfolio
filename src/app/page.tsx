"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight, GraduationCap, Cpu } from "lucide-react";
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
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 mb-3"
          >
            Experience & Background
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            My professional journey, education, and technical skillset
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl border border-white/10 overflow-hidden"
        >
          <Tabs defaultValue="experience" className="w-full">
            <div className="relative">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <TabsList className="w-full grid grid-cols-3 bg-transparent backdrop-blur-md h-auto p-2">
                <TabsTrigger
                  value="experience"
                  className="flex items-center justify-center gap-3 text-white/70 data-[state=active]:text-white rounded-lg transition-all py-3 data-[state=active]:bg-white/5 data-[state=active]:border-t-2 data-[state=active]:border-blue-500"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Experience</span>
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="flex items-center justify-center gap-3 text-white/70 data-[state=active]:text-white rounded-lg transition-all py-3 data-[state=active]:bg-white/5 data-[state=active]:border-t-2 data-[state=active]:border-purple-500"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="flex items-center justify-center gap-3 text-white/70 data-[state=active]:text-white rounded-lg transition-all py-3 data-[state=active]:bg-white/5 data-[state=active]:border-t-2 data-[state=active]:border-pink-500"
                >
                  <Cpu className="w-4 h-4" />
                  <span>Skills</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="experience" className="p-6 sm:p-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-start gap-5 bg-white/5 p-5 rounded-xl border border-white/10"
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Professional Experience
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Full Stack Developer since 2023
                  </p>
                </div>
              </motion.div>
              <TimelineSection items={experienceData} />
            </TabsContent>

            <TabsContent value="education" className="p-6 sm:p-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-start gap-5 bg-white/5 p-5 rounded-xl border border-white/10"
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                    Academic Background
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Bachelor of Engineering in Software Engineering
                  </p>
                </div>
              </motion.div>
              <TimelineSection items={timelineData.education} />
            </TabsContent>

            <TabsContent value="skills" className="p-6 sm:p-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-start gap-5 bg-white/5 p-5 rounded-xl border border-white/10"
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-full"></div>
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-blue-500/20 border border-white/10">
                    <Cpu className="w-6 h-6 text-pink-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400">
                    Technical Skillset
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Languages, frameworks, and tools I specialize in
                  </p>
                </div>
              </motion.div>
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
