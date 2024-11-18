import { motion } from "framer-motion";

interface TimelineItemProps {
  logo: string;
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  link?: { url: string; text: string };
}

const TimelineItem = ({ logo, title, subtitle, period, description, link }: TimelineItemProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-[auto,1fr] gap-6 relative pb-12 last:pb-0"
  >
    <div className="relative">
      <img src={logo} alt={title} className="w-12 h-12 rounded-full bg-white border border-gray-200" />
      <div className="absolute top-[calc(100%+1rem)] left-1/2 bottom-0 w-px bg-gray-200 -translate-x-1/2 last:hidden" />
    </div>
    <div>
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-gray-500">•</span>
        <span className="text-gray-500">{period}</span>
      </div>
      <p className="text-gray-600 mb-4">{subtitle}</p>
      <ul className="list-disc list-inside space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-600">{item}</li>
        ))}
      </ul>
      {link && (
        <a 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm text-gray-600 hover:text-black transition-colors"
        >
          {link.text} →
        </a>
      )}
    </div>
  </motion.div>
);

export default TimelineItem;