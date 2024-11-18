import { motion } from "framer-motion";
import { Code2, Server, Layout, Smartphone, Database, Cloud, Brain } from "lucide-react";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-4 h-4" />,
    items: [
      { name: "Java", icon: "/icons/java.svg" },
      { name: "Go", icon: "/icons/go.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "C#", icon: "/icons/csharp.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Dart", icon: "/icons/dart.svg" }
    ]
  },
  {
    category: "Frontend Development",
    icon: <Layout className="w-4 h-4" />,
    items: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "SASS", icon: "/icons/sass.svg" }
    ]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-4 h-4" />,
    items: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Express.js", icon: "/icons/express.svg" },
      { name: "Socket.io", icon: "/icons/socketio.svg" },
      { name: "Spring Boot", icon: "/icons/spring.svg" },
      { name: "Fiber", icon: "/icons/fiber.svg" }
    ]
  },
  {
    category: "Mobile App Development",
    icon: <Smartphone className="w-4 h-4" />,
    items: [
      { name: "Flutter", icon: "/icons/flutter.svg" }
    ]
  },
  {
    category: "Database Management",
    icon: <Database className="w-4 h-4" />,
    items: [
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" }
    ]
  },
  {
    category: "DevOps/VCS",
    icon: <Cloud className="w-4 h-4" />,
    items: [
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" }
    ]
  },
  {
    category: "Miscellaneous",
    icon: <Code2 className="w-4 h-4" />,
    items: [
      { name: "Firebase", icon: "/icons/firebase.svg" },
      { name: "Ubuntu", icon: "/icons/ubuntu.svg" }
    ]
  },
  {
    category: "Nontechnical Skills",
    icon: <Brain className="w-4 h-4" />,
    items: [
      { name: "Problem Solving", icon: "/icons/problem-solving.svg" },
      { name: "Collaboration", icon: "/icons/collaboration.svg" },
      { name: "Analytical Skills", icon: "/icons/analytical.svg" }
    ]
  }
];

const Skills = () => {
  return (
    <div className="space-y-12">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-2 mb-6">
            {category.icon}
            <h3 className="text-xl font-semibold">{category.category}</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {category.items.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;