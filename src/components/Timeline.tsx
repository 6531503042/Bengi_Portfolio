import { Experience } from "@/types";
import TimelineItem from "./TimelineItem";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

interface TimelineProps {
  items: Experience[];
  className?: string;
}

export const Timeline = ({ items, className }: TimelineProps) => {
  return (
    <Card className={`bg-white/50 dark:bg-[#1a1b1e]/80 backdrop-blur-sm border border-gray-100/20 dark:border-gray-800/20 ${className}`}>
      <CardContent className="p-6">
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative ml-3 space-y-6 border-l border-gray-200 dark:border-gray-700"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TimelineItem experience={item} />
            </motion.div>
          ))}
        </motion.ul>
      </CardContent>
    </Card>
  );
};

export default Timeline;