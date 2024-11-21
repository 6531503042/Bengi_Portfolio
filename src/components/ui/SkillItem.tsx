import { SkillCategory } from "@/types";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SkillItem = ({ data }: { data: SkillCategory }) => {
  const Icon = data.icon;
  
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-gray-50 rounded-md">
          <Icon className="w-5 h-5 text-gray-600" />
        </div>
        <h3 className="text-base font-medium text-gray-800">
          {data.title}
        </h3>
      </div>
      
      <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
        {data.skills.map((skill) => (
          <TooltipProvider key={skill.name}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-6 h-6 object-contain"
                  />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent 
                side="top" 
                sideOffset={5}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg"
              >
                <p className="text-sm font-medium text-gray-800">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillItem; 