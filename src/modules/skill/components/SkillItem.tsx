import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";
import { SkillCategory } from "@/modules/skill/data/skills";
import { Box, CardBox } from "@/shared/core";

const SkillItem = ({ data }: { data: SkillCategory }) => {
  const Icon = data.icon;

  return (
    <CardBox
      noHoverEffect
      bgColor="bg-white"
      padding="p-4"
      classNames="rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
    >
      <Box display="flex" direction="row" align="center" className="gap-3 mb-3">
        <Box className="p-2 bg-gray-50 rounded-md">
          <Icon className="w-5 h-5 text-gray-600" />
        </Box>
        <h3 className="text-base font-medium text-gray-800">{data.title}</h3>
      </Box>

      <Box display="grid" className="grid-cols-4 sm:grid-cols-4 gap-2">
        {data.skills.map((skill) => (
          <TooltipProvider key={skill.name}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group cursor-pointer"
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
                sideOffset={10}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg z-[9999] transform scale-125"
                style={{
                  zIndex: 9999,
                  transformOrigin: "bottom center",
                }}
              >
                <p className="text-sm font-medium text-gray-800">
                  {skill.name}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </Box>
    </CardBox>
  );
};

export default SkillItem;
