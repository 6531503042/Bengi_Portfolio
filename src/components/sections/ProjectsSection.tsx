"use client";

import { motion } from "framer-motion";
import { DataStore } from '../../data/store';
import { AlertCircle, ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import ProjectsGrid from '../ProjectsGrid';

interface ProjectsSectionProps {
  data: DataStore;
}

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    target.src = '/placeholder.svg';
    target.classList.add('error-image');
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <ProjectsGrid data={data} />
      </div>
    </section>
  );
};

export default ProjectsSection;