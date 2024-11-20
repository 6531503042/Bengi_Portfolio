import { IProjectItem, RepoType } from "@/types";
import { Github, ExternalLink, Play } from "lucide-react";
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

const ProjectItem = ({ project }: { project: IProjectItem }) => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Card className="flex flex-col overflow-hidden h-[300px] hover:border-gray-400 transition-all duration-300 group">
          <CardContent className="flex flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border border-gray-200 p-1.5 bg-white">
                  <img
                    src={project.icon}
                    alt={`${project.title} icon`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-base leading-tight">{project.title}</h3>
                  <p className="text-xs text-gray-500">{project.projectType}</p>
                </div>
              </div>
              <div className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                project.repoType === RepoType.Private
                  ? "text-red-600 border-red-200 bg-red-50"
                  : "text-emerald-600 border-emerald-200 bg-emerald-50"
              }`}>
                {project.repoType}
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {project.tags && (
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => (
                  <div
                    key={`tag-${i}`}
                    className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
                  >
                    {tag}
                  </div>
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
                className="p-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors bg-white"
              >
                <Github className="h-4 w-4" />
              </a>
            )}

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors bg-white"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors bg-white"
              >
                <Play className="h-4 w-4" />
              </a>
            )}
          </CardFooter>
        </Card>
      </HoverCardTrigger>
      
      {project.screenshots && project.screenshots.length > 0 && (
        <HoverCardContent side="top" className="w-[320px] p-0 bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col gap-2 p-2">
            <img
              src={project.screenshots[0]}
              alt={project.title}
              className="aspect-video w-full rounded-lg object-cover"
            />
            {project.screenshots.length > 1 && (
              <div className="grid grid-cols-2 gap-2">
                {project.screenshots.slice(1, 3).map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 2}`}
                    className="aspect-video w-full rounded-lg object-cover"
                  />
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