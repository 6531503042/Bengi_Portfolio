import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";
import { SkillCategory } from "@/modules/skill/data/skills";
import { Box, CardBox } from "@/shared/core";
import { useState, useEffect } from "react";

const SkillItem = ({ data }: { data: SkillCategory }) => {
  const [isLoading, setIsLoading] = useState(true);
  const Icon = data.icon;

  useEffect(() => {
    // Simulate loading time for better UX
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(loadingTimer);
  }, []);

  // Skeleton component for skill item
  const SkillItemSkeleton = () => (
    <CardBox
      noHoverEffect
      bgColor="bg-white"
      padding="p-4"
      classNames="rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
    >
      <Box display="flex" direction="row" align="center" className="gap-3 mb-3">
        <div className="w-9 h-9 bg-gray-200 rounded-md animate-pulse" />
        <div className="w-24 h-5 bg-gray-200 rounded animate-pulse" />
      </Box>

      <Box display="grid" className="grid-cols-4 sm:grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div
            key={index}
            className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"
          />
        ))}
      </Box>
    </CardBox>
  );

  if (isLoading) {
    return <SkillItemSkeleton />;
  }

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
                  transition={{ duration: 0.15 }}
                  className="flex items-center justify-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group cursor-pointer"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
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
