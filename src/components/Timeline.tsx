import { Experience } from "@/types";
import TimelineItem from "./TimelineItem";
import { Card, CardContent } from "./ui/card";

interface TimelineProps {
  items: Experience[];
  className?: string;
}

export const Timeline = ({ items, className }: TimelineProps) => {
  return (
    <Card className={className}>
      <CardContent className="p-0">
        <ul className="ml-10 border-l">
          {items.map((item, index) => (
            <TimelineItem key={index} experience={item} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Timeline;