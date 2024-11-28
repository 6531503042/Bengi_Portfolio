import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimelineSection from "../components/sections/TimelineSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import MouseEffect from "../components/effects/MouseEffect";
import { Experience } from "@/types";
import { Lock } from "lucide-react";
import { data } from "@/data/store";
import SkillsSection from "@/components/sections/SkillsSection";

const ChainLink = ({ className = "", rotate = 0 }) => (
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

const ChainContainer = ({ children, className = "" }) => (
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
                <TabsList className="grid w-full grid-cols-3 relative z-50">
                  <TabsTrigger value="education" className="data-[state=active]:bg-white">
                    Education
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="data-[state=active]:bg-white">
                    Skills
                  </TabsTrigger>
                  <TabsTrigger value="work" className="relative group data-[state=active]:bg-white">
                    <div className="flex items-center justify-center gap-2">
                      <span>Work</span>
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        animate={{ 
                          y: [0, -2, 2, 0],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                      >
                        <div className="absolute inset-0 bg-amber-400/30 blur-xl rounded-full animate-pulse" />
                        <div className="relative bg-gradient-to-br from-amber-500 to-amber-700 p-1.5 rounded-lg shadow-lg">
                          <Lock className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="mt-6 p-6 relative">
                <TabsContent value="education" className="mt-0 relative">
                  <TimelineSection items={data.education} />
                </TabsContent>
                
                <TabsContent value="skills" className="mt-0">
                  <SkillsSection />
                </TabsContent>
                
                <TabsContent value="work" className="mt-0 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative p-24 rounded-xl bg-gradient-to-b from-gray-50/50 to-white border-4 border-dashed border-gray-300"
                  >
                    <div className="flex flex-col items-center gap-12">
                      <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 to-amber-500/5 rounded-xl" />
                      <div className="absolute inset-0 animate-pulse">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute inset-0 border-2 border-amber-400/20 rounded-xl"
                            animate={{
                              scale: [1, 1.05, 1],
                              opacity: [0.5, 0.2, 0.5],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.5,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative z-10"
                      >
                        <div className="absolute inset-0 bg-amber-400/20 blur-3xl rounded-full" />
                        <div className="absolute inset-0 bg-amber-500/10 blur-2xl rounded-full animate-pulse" />
                        
                        <div className="relative bg-gradient-to-br from-amber-500 to-amber-700 p-12 rounded-3xl shadow-2xl border-4 border-amber-400/50">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-amber-300/50 rounded-full"
                              animate={{
                                x: [0, Math.cos(i * 45) * 30],
                                y: [0, Math.sin(i * 45) * 30],
                                opacity: [1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeOut",
                              }}
                              style={{
                                left: '50%',
                                top: '50%',
                              }}
                            />
                          ))}
                          
                          <Lock className="w-24 h-24 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]" />
                        </div>
                      </motion.div>

                      <div className="relative z-10 text-center max-w-2xl bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          🔒 Work Experience Quest
                        </h3>
                        <p className="text-lg text-gray-600">
                          Currently leveling up as a 3rd-year student at Mae Fah Luang University. 
                          While this achievement is still locked, I'm gathering experience and preparing for real-world challenges!
                        </p>
                      </div>
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
  );
};

export default Index;