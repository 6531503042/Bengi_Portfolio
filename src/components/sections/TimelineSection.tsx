import TimelineItem from "../Timeline";

interface TimelineSectionProps {
  items: Array<{
    logo: string;
    title: string;
    subtitle: string;
    period: string;
    description: string[];
    link?: { url: string; text: string };
  }>;
}

const TimelineSection = ({ items }: TimelineSectionProps) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default TimelineSection;