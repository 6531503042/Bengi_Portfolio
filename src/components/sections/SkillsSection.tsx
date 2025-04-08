"use client";

import { motion } from "framer-motion";
import { data } from "@/data/store";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-8 border border-white/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.skills.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            {/* Content */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-400">{category.description}</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 mb-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group/skill relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative flex flex-col items-center gap-2">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-xs text-gray-400 text-center">{skill.name}</span>
                    </div>

                    {/* Tooltip for specialized skills */}
                    {skill.specialties && (
                      <div className="absolute -top-2 -right-2 opacity-0 group-hover/skill:opacity-100 transition-opacity">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                          +{skill.specialties.length}
                        </div>
                      </div>
                    )}

                    {/* Specialties Popup */}
                    {skill.specialties && (
                      <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-48 opacity-0 invisible group-hover/skill:opacity-100 group-hover/skill:visible transition-all duration-300 z-50">
                        <div className="bg-[#1a1b1e]/95 backdrop-blur-sm rounded-lg p-3 border border-white/10 shadow-xl">
                          <div className="text-xs font-medium text-white mb-2">Specialized in:</div>
                          <ul className="space-y-1">
                            {skill.specialties.map((specialty: string, idx: number) => (
                              <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                {specialty}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-[#1a1b1e] border-r border-b border-white/10 rotate-45"></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Category-specific specialties */}
              {category.specialties && (
                <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="text-sm font-medium text-blue-400 mb-2">Advanced Capabilities:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {category.specialties.map((specialty: string, idx: number) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;