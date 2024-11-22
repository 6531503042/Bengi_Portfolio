import { createRef, useState, MouseEvent } from "react";
import { IProjectItem } from "@/types";
import ProjectItem from "./ProjectItem";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectList = ({ projects }: { projects: IProjectItem[] }) => {
  const carouselRef = createRef<HTMLDivElement>();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    const targetScroll = carouselRef.current.scrollLeft - offset;
    carouselRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  const handleNext = () => {
    if (!carouselRef.current) return;
    const offset = window.innerWidth < 768 ? 320 : 400;
    const targetScroll = carouselRef.current.scrollLeft + offset;
    carouselRef.current.scrollTo({
      left: targetScroll,
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
          <div key={`project-${index}`} className="flex-shrink-0 w-[300px] md:w-[320px]">
            <ProjectItem project={project} />
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between w-full pointer-events-none px-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm pointer-events-auto transform transition-all hover:scale-110 hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm pointer-events-auto transform transition-all hover:scale-110 hover:bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectList; 