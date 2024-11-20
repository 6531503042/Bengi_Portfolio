import { createRef } from "react";
import { Project } from "@/types";
import Row from "./core/Row";
import ProjectItem from "./ProjectItem";
import Column from "./core/Column";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectList = ({ projects }: { projects: Project[] }) => {
  const carouselRef = createRef<HTMLDivElement>();

  const handlePrev = () => {
    if (!carouselRef.current) return;
    const offset = window.innerWidth < 480 ? 280 : 400;
    carouselRef.current.scrollLeft -= offset;
  };

  const handleNext = () => {
    if (!carouselRef.current) return;
    const offset = window.innerWidth < 480 ? 280 : 400;
    carouselRef.current.scrollLeft += offset;
  };

  return (
    <Column classNames="w-full mt-16">
      <Row
        classNames="w-full gap-4 overflow-x-auto no-scrollbar scroll-smooth"
        elementRef={carouselRef}
      >
        {projects.map((project, index) => (
          <ProjectItem key={`project-${index}`} project={project} />
        ))}
      </Row>

      <Row classNames="w-full items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </Row>
    </Column>
  );
};

export default ProjectList; 