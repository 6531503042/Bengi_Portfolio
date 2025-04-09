"use client";

import { motion } from "framer-motion";
import { data } from "@/data/store";
import ProjectItem from "../ProjectItem";

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

          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data.projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;