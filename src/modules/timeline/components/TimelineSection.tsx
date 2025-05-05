"use client";

import Timeline from "@/modules/timeline/components/Timeline";
import { Experience } from "@/modules/experience/data/experience";

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
