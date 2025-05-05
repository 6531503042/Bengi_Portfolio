"use client";

import { Experience } from "@/modules/experience/data/experience";
import TimelineItem from "@/modules/timeline/components/TimelineItem";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface TimelineProps {
  items: Experience[];
  className?: string;
}

export const Timeline = ({ items, className }: TimelineProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  
  // Auto-focus first item after initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (items.length > 0) {
        setActiveIndex(0);
      }
    }, 800);
    
    return () => clearTimeout(timer);
  }, [items]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="visible"
      className={`relative ${className}`}
    >

      <div className="space-y-6">
        {items.map((experienceItem, index) => (
          <motion.div
            key={index}
            variants={itemVariant}
            onMouseEnter={() => setActiveIndex(index)}
            className={`relative ${activeIndex === index ? 'z-10' : 'z-0'}`}
          >
            <TimelineItem experience={experienceItem} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;