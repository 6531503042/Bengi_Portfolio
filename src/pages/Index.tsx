import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimelineSection from "../components/sections/TimelineSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import Waves from "../components/effects/Waves";
import { data } from "@/data/store";
import SkillsSection from "@/components/sections/SkillsSection";

const ChainLink = ({ className = "", rotate = 0 }: { className?: string, rotate?: number }) => (
  <svg 
    viewBox="0 0 50 20" 
    className={`w-5 h-3 ${className}`} 
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <defs>
      <linearGradient id="metallic" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D1D5DB" />
        <stop offset="50%" stopColor="#F3F4F6" />
        <stop offset="100%" stopColor="#D1D5DB" />
      </linearGradient>
    </defs>
    
    <path
      d="M10,5 L40,5 C45,5 45,15 40,15 L10,15 C5,15 5,5 10,5 Z"
      fill="url(#metallic)"
      stroke="#9CA3AF"
      strokeWidth="1"
      className="drop-shadow-sm"
    />
    
    <path
      d="M12,7 L38,7 C42,7 42,13 38,13 L12,13 C8,13 8,7 12,7 Z"
      fill="white"
      opacity="0.3"
    />
  </svg>
);

const ChainContainer = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    className={`flex items-center -space-x-1.5 ${className}`}
    animate={{ 
      rotateZ: [-1, 1, -1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const Index = () => {
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
              <Tabs defaultValue="education" className="w-full">
                <div className="px-6 pt-6">
                  <TabsList className="grid w-full grid-cols-3 relative bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
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
                    <TabsTrigger 
                      value="experience" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:backdrop-blur-sm text-white/70 data-[state=active]:text-white rounded-lg transition-all duration-300"
                    >
                      Experience
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <div className="p-6">
                  <TabsContent value="education" className="mt-0">
                    <TimelineSection items={data.education} />
                  </TabsContent>
                  
                  <TabsContent value="skills" className="mt-0">
                    <SkillsSection />
                  </TabsContent>
                  
                  <TabsContent value="experience" className="mt-0">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-12 border border-white/10"
                    >
                      <div className="relative z-10 text-center max-w-2xl mx-auto">
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="flex justify-center mb-6"
                        >
                          <div className="relative">
                            <div className="absolute inset-0 blur-xl bg-purple-500/20 rounded-full" />
                            <Lock className="w-12 h-12 text-purple-400 relative z-10" />
                          </div>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
                          Work Experience Quest
                        </h3>
                        <p className="text-lg text-gray-300/90">
                          Currently leveling up as a 3rd-year student at{' '}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                            Mae Fah Luang University
                          </span>. 
                          <br />
                          While this achievement is still locked, I'm gathering experience and preparing for real-world challenges!
                        </p>
                      </div>
                    </motion.div>
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
};

export default Index;