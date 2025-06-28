"use client";

import { motion } from "framer-motion";
import Timeline from "@/modules/timeline/components/Timeline";
import { Experience } from "@/modules/experience/data/experience";

interface TimelineSectionProps {
  items: Experience[];
}

const TimelineSection = ({ items }: TimelineSectionProps) => {
  // Empty state
  if (!items || items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-10 text-center space-y-4"
      >
        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-white">No items found</h3>
        <p className="text-gray-400 max-w-sm text-sm">
          No timeline items are currently available. Check back later for
          updates.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-2"
    >
      <Timeline items={items} />
    </motion.div>
  );
};

export default TimelineSection;
