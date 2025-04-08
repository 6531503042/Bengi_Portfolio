'use client';

import { IProjectItem } from '@/data/store';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectItemProps {
  project: IProjectItem;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col gap-4 rounded-lg border bg-card p-6 shadow-md transition-colors hover:bg-accent/40"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 48px) 100vw, 48px"
            />
          </div>
          <div>
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {project.sourceUrl && (
            <Link
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border bg-background p-2 transition-colors hover:bg-accent"
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border bg-background p-2 transition-colors hover:bg-accent"
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <div
            key={tag}
            className="rounded-lg border bg-background px-2 py-1 text-xs font-medium"
          >
            {tag}
          </div>
        ))}
      </div>
      {project.technologies && (
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-1 rounded-lg border bg-background px-2 py-1"
            >
              <img src={tech.icon} alt={tech.name} className="h-4 w-4" />
              <span className="text-xs font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}