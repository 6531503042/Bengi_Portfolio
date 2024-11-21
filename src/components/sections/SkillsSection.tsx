import { motion } from "framer-motion";
import { data } from "@/data/store";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#0a0b0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/50 dark:bg-[#1a1b1e]/80 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/60 dark:hover:bg-[#1a1b1e] transition-all duration-300 border border-gray-100/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{category.description}</p>
              
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-[#2a2b2e] rounded-xl p-2 transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-[#3a3b3e]">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-8 h-8 object-contain"
                      />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs text-gray-900 dark:text-white whitespace-nowrap bg-white/50 dark:bg-black/50 px-2 py-1 rounded">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;