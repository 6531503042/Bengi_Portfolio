import { IProjectItem, RepoType } from "@/types";
import { Github, ExternalLink, Play } from "lucide-react";
import CardBox from "./core/CardBox";
import Row from "./core/Row";
import Column from "./core/Column";
import ResponsiveBox from "./core/ResponsiveBox";
import ConstraintedBox from "./core/ConstraintedBox";
import ScreenshotGallery from "./ScreenshotGallery";

const ProjectItem = ({ project }: { project: IProjectItem }) => {
  return (
    <CardBox
      classNames="min-w-[calc(100%-2rem)] sm:min-w-[25rem] md:min-w-[28rem] aspect-[3/5] max-h-[30rem] p-4 gap-8 items-center justify-between bg-[var(--textColor10)] group slide_in"
    >
      <Column classNames="w-full items-center justify-start">
        <Row classNames="items-center gap-2">
          <Row classNames="w-[3rem] md:w-[3.5rem] p-2 aspect-square items-center justify-center border border-gray-200 rounded-full overflow-hidden">
            <img
              src={project.icon}
              alt={`project-${project.title}`}
              className="w-full h-full object-cover aspect-square"
            />
          </Row>
          <Column>
            <p className="text-lg/6 font-semibold">{project.title}</p>
            <p className="text-base/6 text-gray-500">
              {project.projectType}
            </p>
          </Column>
        </Row>

        <div className={`flex flex-row items-center justify-center rounded-full py-[0.05] px-[0.5rem] mt-4 capitalize text-center border ${
          project.repoType === RepoType.Private
            ? "text-red-600 border-red-200"
            : "text-emerald-600 border-emerald-200"
        }`}>
          <p className="text-xs/6 font-semibold">
            {project.repoType}
          </p>
        </div>

        <Row classNames="w-full items-center justify-center mt-4 gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}

          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
            >
              <Play className="w-5 h-5" />
            </a>
          )}
        </Row>
      </Column>

      <Column classNames="w-full items-center">
        <p className="text-center text-base/6">
          {project.description}
        </p>

        {project.tags && (
          <Row classNames="w-full items-center justify-center flex-wrap mt-4">
            {project.tags.map((tag, i) => (
              <div
                key={`tag-${i}`}
                className="flex items-center gap-1 rounded-full border border-gray-200 py-1 px-3 mr-2 mb-2"
              >
                <span className="text-sm">{tag}</span>
              </div>
            ))}
          </Row>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <ScreenshotGallery imageList={project.screenshots} />
        )}
      </Column>
    </CardBox>
  );
};

export default ProjectItem;