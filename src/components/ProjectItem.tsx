import { IProjectItem, RepoType } from "@/types";
import { Github, ExternalLink, AlertCircle, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ImagePreview from "./ImagePreview";
import ProjectDetailsModal from "./ProjectDetailsModal";

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
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [mainImageError, setMainImageError] = useState(false);
  const [imageLoadStatus, setImageLoadStatus] = useState<Record<string, boolean>>({});
  
  const handleImageError = (imageUrl: string) => {
    setImageLoadStatus(prev => ({ ...prev, [imageUrl]: false }));
    if (imageUrl === mainImage) {
      setMainImageError(true);
    }
  };

  const handleImageLoad = (imageUrl: string) => {
    setImageLoadStatus(prev => ({ ...prev, [imageUrl]: true }));
  };

  // Filter out any empty or invalid image URLs and already failed images
  const allImages = [
    ...(project.image ? [project.image] : []),
    ...(project.screenshots || [])
  ].filter(url => url && url.trim() !== '' && imageLoadStatus[url] !== false);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (allImages.length > 0 && !mainImageError) {
      setShowImagePreview(true);
    }
  };

  const handleCardClick = () => {
    setShowProjectDetails(true);
  };

  const mainImage = project.image || project.screenshots?.[0];
  const showImagePreviewIndicator = allImages.length > 0 && !mainImageError;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
        whileHover={{ y: -5 }}
        onClick={handleCardClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          {(!mainImage || mainImageError) ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#151538]/80 to-[#1F1155]/80 backdrop-blur-sm">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full" />
                <div className="relative bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <ImageIcon className="w-12 h-12 text-white/40" />
                </div>
              </div>
              <span className="mt-4 text-sm text-white/60 font-medium">Preview not available</span>
            </div>
          ) : (
            <>
              <img
                src={mainImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                onError={() => handleImageError(mainImage)}
                onLoad={() => handleImageLoad(mainImage)}
              />
              <div 
                className="absolute inset-0 cursor-pointer bg-gradient-to-t from-[#0B0B1E]/90 via-[#0B0B1E]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                onClick={handleImageClick}
              />
            </>
          )}
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-10">
            {getStatusBadge(project)}
          </div>

          {/* Preview Indicator */}
          {showImagePreviewIndicator && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90 flex items-center gap-2 z-10 cursor-pointer hover:bg-white/20 transition-colors border border-white/20"
              onClick={handleImageClick}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="font-medium">{allImages.length} {allImages.length === 1 ? 'image' : 'images'}</span>
            </motion.div>
          )}
        </div>
        
        {/* Content Section */}
        <div className="relative p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300/90 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
          
          {/* Framework Tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/5 text-white/80 rounded-full border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-3.5 h-3.5 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 pt-2">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
                <span className="font-medium">Source</span>
              </motion.a>
            )}
            {project.url && (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-purple-400 transition-colors"
                whileHover={{ y: -2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-medium">Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Image Preview Modal */}
      {showImagePreview && (
        <ImagePreview
          isOpen={showImagePreview}
          onClose={() => setShowImagePreview(false)}
          images={allImages}
          title={project.title}
          subtitle={project.description}
        />
      )}

      {/* Project Details Modal */}
      {showProjectDetails && (
        <ProjectDetailsModal
          project={project}
          isOpen={showProjectDetails}
          onClose={() => setShowProjectDetails(false)}
        />
      )}
    </>
  );
};

export default ProjectItem;