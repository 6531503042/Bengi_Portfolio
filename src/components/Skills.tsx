import { motion } from "framer-motion";
import { data } from "@/data/store";

const Skills = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
      {data.skills.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-[#1a1b1e]/80 backdrop-blur-sm rounded-3xl p-8 hover:bg-[#1a1b1e] transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
          <p className="text-gray-400 mb-6">{category.description}</p>
          
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-12 h-12 flex items-center justify-center bg-[#2a2b2e] rounded-xl p-2 transition-all duration-300 group-hover:bg-[#3a3b3e]">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-8 h-8 object-contain"
                  />
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-white whitespace-nowrap bg-black/50 px-2 py-1 rounded">
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
  );
};

export default Skills;