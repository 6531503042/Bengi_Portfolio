"use client";

import { Experience } from "@/modules/experience/data/experience";
import TimelineItem from "@/modules/timeline/components/TimelineItem";
import { motion } from "framer-motion";

interface TimelineProps {
  items: Experience[];
  className?: string;
}

export const Timeline = ({ items, className }: TimelineProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`space-y-4 ${className}`}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <TimelineItem experience={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Timeline;