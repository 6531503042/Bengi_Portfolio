import { motion } from "framer-motion";

interface WorkExperienceProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo: string;
}

const WorkExperience = ({ company, role, period, description, logo }: WorkExperienceProps) => {
  return (
    <motion.div 
      className="grid grid-cols-[auto,1fr] gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img src={logo} alt={company} className="w-12 h-12 rounded-full" />
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-xl font-semibold">{company}</h3>
          <span className="text-gray-500">•</span>
          <span className="text-gray-500">{period}</span>
        </div>
        <p className="text-gray-600 mb-4">{role}</p>
        <ul className="list-disc list-inside space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default WorkExperience;