import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java", "Spring Boot", "PostgreSQL"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "CI/CD", "Agile"]
  }
];

const Skills = () => {
  return (
    <div className="space-y-8">
      {skills.map((category, index) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
          <div className="flex flex-wrap gap-2">
            {category.items.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;