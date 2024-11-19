import { motion } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  featured?: boolean;
  demoUrl?: string;
  sourceUrl?: string;
}

const ProjectsGrid = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Delvfox",
      description: "Delvfox is a dynamic platform dedicated to uncovering vulnerabilities in various services and developing tools that exploit these weaknesses.",
      image: "/projects/delvfox.png",
      technologies: [
        { name: "Next.js", icon: "/icons/nextjs.svg" },
        { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
        { name: "JavaScript", icon: "/icons/javascript.svg" },
        { name: "MySQL", icon: "/icons/mysql.svg" }
      ],
      featured: true,
      demoUrl: "https://delvfox.com",
      sourceUrl: "https://github.com/username/delvfox"
    },
    // ... Add more projects here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
        >
          <div className="aspect-video relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {project.featured && (
              <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                Featured
              </span>
            )}
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full"
                >
                  <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                  <span className="text-sm text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Live Demo
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Source
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
