import { motion } from "framer-motion";
import { data } from "@/data/store";
import { GraduationCap, Calendar, School } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {data.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={edu.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.title}
                    </h3>
                    <a
                      href={edu.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                    >
                      <School className="w-4 h-4" />
                      {edu.name}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.start}</span>
                  </div>
                  <ul className="space-y-2">
                    {edu.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <GraduationCap className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection; 