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
    className="relative pl-8 pb-12 last:pb-0"
  >
    <div className="flex items-center gap-6">
      <div className="absolute left-0 flex items-center justify-center">
        <motion.div 
          className="w-4 h-4 bg-white rounded-full border-2 border-gray-300 z-10"
          whileInView={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-4 bottom-0 left-1/2 w-px bg-gray-200 transform -translate-x-1/2" />
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full">
        <div className="flex items-start gap-4 mb-4">
          <img src={logo} alt={title} className="w-12 h-12 rounded-full bg-white border border-gray-200" />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-semibold">{title}</h3>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{period}</span>
            </div>
            <p className="text-gray-600">{subtitle}</p>
          </div>
        </div>
        
        <ul className="space-y-2 ml-4">
          {description.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-600 list-disc"
            >
              {item}
            </motion.li>
          ))}
        </ul>
        
        {link && (
          <motion.a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-gray-600 hover:text-black transition-colors"
            whileHover={{ x: 5 }}
          >
            {link.text} →
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

export default TimelineItem;