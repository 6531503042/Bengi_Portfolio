"use client";

import { motion } from "framer-motion";
import { data } from "@/data/store";
import { AlertCircle, ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    target.src = '/placeholder.svg';
    target.classList.add('error-image');
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              My Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here you can find a collection of my public projects.
              Feel free to explore and check them out!
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-gradient-to-br from-white/5 via-white/[0.07] to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#151538] to-[#1F1155]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {!project.image && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#151538] to-[#1F1155]">
                        <ImageIcon className="w-16 h-16 text-white/20" />
                      </div>
                    )}
                    <img
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B1E]/90 via-[#0B0B1E]/50 to-transparent" />
                  
                  {/* Project Status Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500/80 to-purple-500/80 rounded-full text-xs font-medium text-white shadow-lg backdrop-blur-sm">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, idx) => (
                      <div
                        key={idx}
                        className="relative group/tech"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors p-1.5 border border-white/10">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                            onError={handleImageError}
                          />
                        </div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#151538]/90 backdrop-blur-sm text-white text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                          {tech.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4">
                    {project.sourceUrl && (
                      <motion.a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Source</span>
                      </motion.a>
                    )}
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;