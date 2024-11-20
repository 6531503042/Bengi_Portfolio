import React from "react";
import { motion } from "framer-motion";
import { data } from "@/data/store";
import { Github, Globe } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden group"
        >
          <div className="aspect-video relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            {project.featured && (
              <Badge
                className="absolute top-2 right-2 bg-primary text-white"
                variant="default"
              >
                Featured
              </Badge>
            )}
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full"
                >
                  <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-2">
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-4 h-4" />
                  Live Demo
                </motion.a>
              )}
              {project.sourceUrl && (
                <motion.a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  Source
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsGrid;