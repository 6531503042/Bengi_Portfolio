import { createRef, useState, MouseEvent } from "react";
import { IProjectItem } from "@/types";
import ProjectItem from "./ProjectItem";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProjectList = ({ projects }: { projects: IProjectItem[] }) => {
  const carouselRef = createRef<HTMLDivElement>();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedProject, setSelectedProject] = useState<IProjectItem | null>(null);

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePrev = () => {
    if (!carouselRef.current) return;
    const offset = window.innerWidth < 768 ? 320 : 400;
    carouselRef.current.scrollTo({
      left: carouselRef.current.scrollLeft - offset,
      behavior: 'smooth'
    });
  };

  const handleNext = () => {
    if (!carouselRef.current) return;
    const offset = window.innerWidth < 768 ? 320 : 400;
    carouselRef.current.scrollTo({
      left: carouselRef.current.scrollLeft + offset,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative px-12">
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="relative flex-shrink-0 w-[300px] md:w-[320px] group">
            <ProjectItem project={project} />
            {project.screenshots && project.screenshots.length > 0 && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => setSelectedProject(project)}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between w-full pointer-events-none px-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full shadow-lg hover:shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm pointer-events-auto transform transition-all hover:scale-110"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full shadow-lg hover:shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm pointer-events-auto transform transition-all hover:scale-110"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          {selectedProject && selectedProject.screenshots && (
            <div className="hidden">Open Preview</div>
          )}
        </DialogTrigger>
        <DialogContent className="max-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {selectedProject.screenshots?.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    className="w-full rounded-lg shadow-lg"
                  />
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectList;