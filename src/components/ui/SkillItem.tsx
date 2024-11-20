import { SkillCategory } from "@/types";
import { motion } from "framer-motion";

const SkillItem = ({ data }: { data: SkillCategory }) => {
  const Icon = data.icon;
  
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-gray-50 rounded-md">
          <Icon className="w-4 h-4 text-gray-600" />
        </div>
        <h3 className="text-base font-medium text-gray-800">
          {data.title}
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-1.5">
        {data.skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
          >
            <img 
              src={skill.icon} 
              alt={skill.name} 
              className="w-4 h-4"
            />
            <span className="text-xs font-medium text-gray-600">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillItem; 