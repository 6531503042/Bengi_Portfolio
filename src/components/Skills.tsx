import { motion } from "framer-motion";
import { Code2, Server, Layout, Smartphone, Wrench, Network, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Front-End",
    description: "As a Junior Developer, I use the most popular frameworks and libraries. They have wide documentation which is making them easy to learn.",
    icon: <Layout className="w-6 h-6" />,
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
    description: "I use well-known tools and frameworks to create the behind-the-scenes parts of applications. These help make sure everything runs smoothly, handling data and keeping the system reliable, fast and safe.",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Express", icon: "/icons/express.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" }
    ]
  },
  {
    title: "Version Control",
    description: "These tools help track changes in code, making it easier to collaborate, manage different project versions, and ensure nothing important is lost.",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "GitLab", icon: "/icons/gitlab.svg" },
      { name: "Bitbucket", icon: "/icons/bitbucket.svg" }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Jenkins", icon: "/icons/jenkins.svg" },
      { name: "Kafka", icon: "/icons/kafka.svg" },
      { name: "Prometheus", icon: "/icons/prometheus.svg" },
      { name: "Grafana", icon: "/icons/grafana.svg" }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
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
          className="bg-black/90 rounded-xl p-6 border border-gray-800"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-800 rounded-lg">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
          </div>
          
          {category.description && (
            <p className="text-gray-400 mb-6">{category.description}</p>
          )}
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 p-2 bg-gray-800/50 rounded-lg text-gray-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                <span className="text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;