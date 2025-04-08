'use client';

import { IProjectItem } from '@/data/store';
import { motion } from 'framer-motion';
import ProjectItem from './ProjectItem';

interface ProjectsGridProps {
  data: {
    projects: IProjectItem[];
  };
}

export default function ProjectsGrid({ data }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.projects.map((project: IProjectItem) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ProjectItem project={project} />
        </motion.div>
      ))}
    </div>
  );
}