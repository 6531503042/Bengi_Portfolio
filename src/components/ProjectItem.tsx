import { IProjectItem, RepoType } from "@/types";
import { Github, ExternalLink, AlertCircle, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

const getStatusBadge = (project: IProjectItem) => {
  const statusMap: Record<string, { text: string; color: string }> = {
    "Gigantic-Mall": { text: "Dev", color: "text-orange-400 bg-orange-400/10 border-orange-400/20" },
    "Deap Appointment App": { text: "Alpha", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    "Sport-Complex": { text: "Beta", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
    "ATA Feedback System": { text: "Dev", color: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20" },
    "Portfolio Website": { text: "Live", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" }
  };

  const status = statusMap[project.title];
  if (status) {
    return (
      <div className={`inline-flex items-center px-2 py-1 text-xs font-medium border 
        rounded-full whitespace-nowrap ${status.color} backdrop-blur-sm transition-all duration-200 
        hover:scale-105 hover:shadow-sm`}
      >
        <AlertCircle className="w-3 h-3 mr-1" />
        {status.text}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center px-2 py-1 text-xs font-medium border 
      rounded-full whitespace-nowrap backdrop-blur-sm transition-all duration-200 hover:scale-105 
      hover:shadow-sm ${
        project.repoType === RepoType.Private
          ? "text-red-400 bg-red-400/10 border-red-400/20"
          : "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
      }`}
    >
      <AlertCircle className="w-3 h-3 mr-1" />
      {project.repoType === RepoType.Private ? "Private" : "Public"}
    </div>
  );
};

interface ProjectItemProps {
  project: IProjectItem;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = '/placeholder.svg';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all duration-500"
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-48 overflow-hidden">
        {!project.image && !project.screenshots?.[0] ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#151538] to-[#1F1155]">
            <ImageIcon className="w-16 h-16 text-white/20" />
          </div>
        ) : (
          <img
            src={project.image || project.screenshots?.[0] || '/placeholder.svg'}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            onError={handleImageError}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B1E]/90 via-[#0B0B1E]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          {getStatusBadge(project)}
        </div>
      </div>
      
      <div className="relative p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300/80 text-sm line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-white/5 text-white/70 rounded-full border border-white/10 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-2">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-blue-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </motion.a>
          )}
          {project.url && (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-purple-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;