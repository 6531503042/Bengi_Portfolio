import { motion } from "framer-motion";
import { Code2, Server, Layout, Smartphone, Tool, Network } from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    icon: <Code2 className="w-4 h-4" />,
    items: [
      { name: "Java", icon: "java" },
      { name: "Go", icon: "go" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Dart", icon: "dart" }
    ]
  },
  {
    category: "Backend",
    icon: <Server className="w-4 h-4" />,
    items: [
      { name: "Spring Boot", icon: "spring" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Echo", icon: "go" }
    ]
  },
  {
    category: "Frontend",
    icon: <Layout className="w-4 h-4" />,
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Angular", icon: "angular" }
    ]
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-4 h-4" />,
    items: [
      { name: "Flutter", icon: "flutter" },
      { name: "React Native", icon: "react-native" }
    ]
  },
  {
    category: "DevOps & Tools",
    icon: <Tool className="w-4 h-4" />,
    items: [
      { name: "Kafka", icon: "kafka" },
      { name: "Prometheus", icon: "prometheus" },
      { name: "Grafana", icon: "grafana" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub", icon: "github" }
    ]
  },
  {
    category: "API",
    icon: <Network className="w-4 h-4" />,
    items: [
      { name: "gRPC", icon: "grpc" },
      { name: "RESTful API", icon: "api" },
      { name: "Polyglot API", icon: "api" }
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
          <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
          <div className="flex flex-wrap gap-4">
            {category.items.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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