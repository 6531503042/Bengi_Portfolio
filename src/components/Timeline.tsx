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
    <Card className={`bg-white/[0.02] backdrop-blur-xl border-white/10 shadow-2xl ${className}`}>
      <CardContent className="p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative space-y-2"
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
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default Timeline;