import { IProjectItem, RepoType } from "@/types";
import { Github, ExternalLink, Play, AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";

const getStatusBadge = (project: IProjectItem) => {
  const statusMap = {
    "Gigantic-Mall": { text: "Dev", color: "text-orange-600 border-orange-200 bg-orange-50" },
    "Deap Appointment App": { text: "Alpha", color: "text-purple-600 border-purple-200 bg-purple-50" },
    "Sport-Complex": { text: "Beta", color: "text-blue-600 border-blue-200 bg-blue-50" },
    "ATA Feedback System": { text: "Dev", color: "text-indigo-600 border-indigo-200 bg-indigo-50" },
    "Portfolio Website": { text: "Live", color: "text-emerald-600 border-emerald-200 bg-emerald-50" }
  };

  const status = statusMap[project.title];
  if (status) {
    return (
      <div className={`inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium border 
        rounded-full whitespace-nowrap ${status.color} transition-all duration-200 
        hover:scale-105 hover:shadow-sm`}
      >
        <AlertCircle className="w-2.5 h-2.5 mr-0.5" />
        {status.text}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium border 
      rounded-full whitespace-nowrap transition-all duration-200 hover:scale-105 
      hover:shadow-sm ${
        project.repoType === RepoType.Private
          ? "text-red-600 border-red-200 bg-red-50"
          : "text-emerald-600 border-emerald-200 bg-emerald-50"
      }`}
    >
      <AlertCircle className="w-2.5 h-2.5 mr-0.5" />
      {project.repoType === RepoType.Private ? "Private" : "Public"}
    </div>
  );
};

const ProjectItem = ({ project }: { project: IProjectItem }) => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Card className="flex flex-col overflow-hidden h-[300px] hover:border-gray-400 transition-all duration-300 group">
          <CardContent className="flex flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {project.icons.map((icon, index) => (
                    <div 
                      key={index} 
                      className="h-8 w-8 rounded-full border border-gray-200 p-1.5 bg-white hover:scale-110 transition-transform duration-200"
                      style={{ 
                        marginLeft: index > 0 ? '-0.5rem' : '0',
                        zIndex: project.icons.length - index,
                        transform: `translateX(${index * 5}px)`,
                      }}
                    >
                      <img
                        src={icon}
                        alt={`${project.title} icon ${index + 1}`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-2">
                  <h3 className="font-semibold text-base leading-tight">{project.title}</h3>
                  <p className="text-xs text-gray-500">{project.projectType}</p>
                </div>
              </div>
              {getStatusBadge(project)}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {project.tags && (
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tags.map((tag, i) => (
                  <motion.div
                    key={`tag-${i}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-1.5 py-0.5 text-[10px] font-medium bg-gray-50 
                      text-gray-500 rounded-md border border-gray-100 
                      hover:bg-gray-100 hover:text-gray-700 
                      transition-all duration-200 cursor-default
                      hover:scale-105 hover:shadow-sm"
                    style={{
                      transform: `rotate(${Math.random() * 2 - 1}deg)` // Slight random rotation
                    }}
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>
            )}
          </CardContent>

          <CardFooter className="mt-auto flex items-center gap-2 px-5 pb-5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors bg-white hover:scale-110 duration-200"
                title="Source Code"
              >
                <Github className="h-4 w-4" />
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors bg-white hover:scale-110 duration-200"
                title="Live Demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {project.url && !project.demoUrl && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors bg-white hover:scale-110 duration-200"
                title="Release"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors bg-white hover:scale-110 duration-200"
                title="Play Store"
              >
                <Play className="h-4 w-4" />
              </a>
            )}
          </CardFooter>
        </Card>
      </HoverCardTrigger>
      
      {project.screenshots && project.screenshots.length > 0 && (
        <HoverCardContent 
          side="top" 
          className="w-[280px] p-2 bg-white/90 backdrop-blur-sm"
          sideOffset={10}
        >
          <div className="flex flex-col gap-2">
            <div className="relative w-full rounded-lg bg-gray-50">
              <img
                src={project.screenshots[0]}
                alt={project.title}
                className="w-full h-auto max-h-[160px] rounded-lg object-scale-down"
                loading="lazy"
              />
            </div>
            {project.screenshots.length > 1 && (
              <div className="grid grid-cols-2 gap-2">
                {project.screenshots.slice(1, 3).map((screenshot, index) => (
                  <div 
                    key={index} 
                    className="relative rounded-lg bg-gray-50"
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 2}`}
                      className="w-full h-auto max-h-[80px] rounded-lg object-scale-down"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

export default ProjectItem;