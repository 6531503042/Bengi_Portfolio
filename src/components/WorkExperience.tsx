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
      className="flex gap-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img src={logo} alt={company} className="w-12 h-12 rounded-full" />
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-gray-500">{period}</span>
        </div>
        <h3 className="text-xl font-semibold mb-1">{company}</h3>
        <p className="text-gray-600 mb-2">{role}</p>
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