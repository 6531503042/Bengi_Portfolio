import Timeline from "../Timeline";
import { Experience } from "@/types";

interface TimelineSectionProps {
  items: Experience[];
}

const TimelineSection = ({ items }: TimelineSectionProps) => {
  return (
    <div className="space-y-8">
      <Timeline items={items} />
    </div>
  );
};

export default TimelineSection;