import { motion } from "framer-motion";
import { data } from "@/data/store";
import ProjectList from "../ProjectList";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#0a0b0c]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">My Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here you can find a collection of my public projects.
              Feel free to explore and check them out!
            </p>
          </div>

          <div className="overflow-hidden py-4">
            <ProjectList projects={data.projects} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;