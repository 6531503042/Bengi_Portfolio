import { Experience } from "@/types";
import TimelineItem from "./TimelineItem";
import { Card, CardContent } from "./ui/card";

interface TimelineProps {
  items: Experience[];
  className?: string;
}

export const Timeline = ({ items, className }: TimelineProps) => {
  return (
    <Card className={`bg-white/50 dark:bg-[#1a1b1e]/80 backdrop-blur-sm border border-gray-100/20 ${className}`}>
      <CardContent className="p-0">
        <ul className="ml-10 border-l border-gray-200 dark:border-gray-700">
          {items.map((item, index) => (
            <TimelineItem key={index} experience={item} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Timeline;