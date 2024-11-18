import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";

const Index = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js",
    "Python", "Java", "Git", "HTML/CSS",
    "SQL", "MongoDB", "REST APIs", "Tailwind CSS"
  ];

  const projects = [
    {
      title: "Student Management System",
      description: "A web application for managing student records and courses using React and Node.js.",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application that displays forecast data using a weather API.",
      tags: ["JavaScript", "API Integration", "CSS"]
    },
    {
      title: "Task Management App",
      description: "A simple todo application with user authentication and data persistence.",
      tags: ["React", "Firebase", "Tailwind"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Nimit Tanboontor
          </h1>
          <p className="text-2xl text-secondary mb-8">
            Software Engineering Student
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="text-accent hover:underline">
              Get in touch →
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading">About</h2>
          <p className="subheading">
            I'm a third-year Software Engineering student passionate about creating elegant solutions 
            through code. Currently exploring various technologies and working on projects that challenge 
            and expand my skills.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-sm text-accent">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading">Contact</h2>
          <p className="subheading">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;