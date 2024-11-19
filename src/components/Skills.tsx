import { motion } from "framer-motion";
import { Code2, Server, Layout, Smartphone, Wrench, Network, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Front-End",
    description: "As a Junior Developer, I use the most popular frameworks and libraries. They have wide documentation which is making them easy to learn.",
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    skills: [
      { name: "HTML5", icon: "/icons/html5.svg" },
      { name: "CSS3", icon: "/icons/css3.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "jQuery", icon: "/icons/jquery.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Angular", icon: "/icons/angular.svg" },
      { name: "Axios", icon: "/icons/axios.svg" }
    ]
  },
  {
    title: "Back-End",
    description: "I use well-known tools and frameworks to create the behind-the-scenes parts of applications.",
    icon: <Server className="w-6 h-6 text-green-500" />,
    skills: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Express", icon: "/icons/express.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-6 h-6 text-purple-500" />,
    skills: [
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Jenkins", icon: "/icons/jenkins.svg" },
      { name: "Kafka", icon: "/icons/kafka.svg" },
      { name: "Git", icon: "/icons/git.svg" }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6 text-red-500" />,
    skills: [
      { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
      { name: "PyTorch", icon: "/icons/pytorch.svg" },
      { name: "Matplotlib", icon: "/icons/matplotlib.svg" },
      { name: "Hugging Face", icon: "/icons/huggingface.svg" }
    ]
  }
];

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-50 rounded-lg">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
          </div>
          
          {category.description && (
            <p className="text-gray-600 mb-6">{category.description}</p>
          )}
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;