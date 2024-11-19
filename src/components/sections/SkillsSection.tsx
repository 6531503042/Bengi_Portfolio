import { motion } from "framer-motion";
import { Code2, Database, Server, Cpu, Palette, Terminal } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    "Frontend Development": [
      { name: "React", icon: <Code2 className="w-5 h-5" /> },
      { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <Palette className="w-5 h-5" /> },
    ],
    "Backend Development": [
      { name: "Node.js", icon: <Server className="w-5 h-5" /> },
      { name: "Python", icon: <Terminal className="w-5 h-5" /> },
      { name: "Java", icon: <Terminal className="w-5 h-5" /> },
    ],
    "Database & DevOps": [
      { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
      { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
      { name: "Docker", icon: <Cpu className="w-5 h-5" /> },
    ],
  };

  return (
    <div className="space-y-8">
      {Object.entries(skills).map(([category, categorySkills]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categorySkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="text-gray-600">{skill.icon}</div>
                <span className="text-gray-800">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsSection;