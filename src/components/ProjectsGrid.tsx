import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";

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
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [showNsfw, setShowNsfw] = useState(false);

  const technologies = [
    "JavaScript", "MySQL", "Next.js", "Node.js", "Prisma", "Redis",
    "Supabase", "TailwindCSS", "Sellix"
  ];

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

  const filteredProjects = projects.filter(project => {
    if (showFeaturedOnly && !project.featured) return false;
    if (selectedTechnologies.length === 0) return true;
    return project.technologies.some(tech => 
      selectedTechnologies.includes(tech.name)
    );
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project Type */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Project Type</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                  className="rounded border-gray-300"
                />
                Featured Only
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showNsfw}
                  onChange={(e) => setShowNsfw(e.target.checked)}
                  className="rounded border-gray-300"
                />
                Show NSFW
              </label>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Button
                  key={tech}
                  variant={selectedTechnologies.includes(tech) ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedTechnologies(prev =>
                      prev.includes(tech)
                        ? prev.filter(t => t !== tech)
                        : [...prev, tech]
                    );
                  }}
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Sort By</h3>
            <select className="w-full rounded-md border border-gray-300 p-2">
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        <Button
          variant="outline"
          onClick={() => {
            setSelectedTechnologies([]);
            setShowFeaturedOnly(false);
            setShowNsfw(false);
          }}
        >
          Reset Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/90 rounded-lg overflow-hidden border border-gray-800"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {project.featured && (
                <span className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs">
                  Featured
                </span>
              )}
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-full"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                {project.demoUrl && (
                  <Button asChild variant="secondary">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.sourceUrl && (
                  <Button asChild variant="outline">
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      Source
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;