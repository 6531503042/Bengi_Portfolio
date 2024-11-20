import { motion } from "framer-motion";
import { Project } from "@/types";
import { Github, ExternalLink, Play } from "lucide-react";
import CardBox from "./core/CardBox";
import Row from "./core/Row";
import Column from "./core/Column";

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <CardBox
      classNames="min-w-[calc(100%-2rem)] sm:min-w-[25rem] md:min-w-[28rem] aspect-[3/5] max-h-[30rem] p-4 gap-8 items-center justify-between bg-[var(--textColor10)] group slide_in"
    >
      <Column classNames="w-full items-center justify-start">
        <Row classNames="w-[2.5rem] md:w-[3rem] aspect-square items-center justify-center">
          <img
            src={project.image}
            alt={`project-${project.title}`}
            className="w-full h-full object-cover aspect-square"
          />
        </Row>

        <p className="text-lg/6 font-semibold mt-4">{project.title}</p>

        <div className="flex flex-row items-center justify-center rounded-full py-[0.05] px-[0.5rem] mt-4 capitalize text-center border text-emerald-600 border-emerald-200">
          <p className="text-xs/6 font-semibold">
            {project.featured ? "Featured" : "Project"}
          </p>
        </div>

        <Row classNames="w-full items-center justify-center mt-4 gap-2">
          {project.sourceUrl && (
            <Link
              href={project.sourceUrl}
              target="_blank"
              className="p-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
          )}

          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              className="p-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </Link>
          )}
        </Row>
      </Column>

      <Column classNames="w-full items-center">
        <p className="text-center text-base/6">
          {project.description}
        </p>

        <Row classNames="w-full items-center justify-center flex-wrap mt-4">
          {project.technologies.map((tech, i) => (
            <div
              key={`tech-${i}`}
              className="flex items-center gap-1 rounded-full border border-gray-200 py-1 px-3 mr-2 mb-2"
            >
              <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </Row>
      </Column>
    </CardBox>
  );
};

export default ProjectItem; 