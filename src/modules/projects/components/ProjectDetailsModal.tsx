import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Tag, Wrench, ImageIcon } from 'lucide-react';
import { IProjectItem } from '@/modules/projects/data/projects';
import ImagePreview from '@/shared/components/ImagePreview';

interface ProjectDetailsModalProps {
  project: IProjectItem;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [showImagePreview, setShowImagePreview] = React.useState(false);
  const [mainImageError, setMainImageError] = React.useState(false);
  
  // Deduplicate images: only show the banner once
  const allImages = React.useMemo(() => {
    const images = [
      ...(project.image ? [project.image] : []),
      ...(project.screenshots || [])
    ].filter(url => url && url.trim() !== '');
    // Remove duplicates (keep first occurrence)
    return images.filter((url, idx) => images.indexOf(url) === idx);
  }, [project.image, project.screenshots]);

  // Preload all images when modal opens
  React.useEffect(() => {
    if (isOpen && allImages.length > 0) {
      allImages.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    }
  }, [isOpen, allImages]);

  const handleImageError = () => {
    setMainImageError(true);
  };

  const mainImage = allImages[0];
  const showImagePreviewIndicator = allImages.length > 0 && !mainImageError;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-[95%] max-w-6xl max-h-[90vh] m-4 bg-[#0B0B1E]/90 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="h-full overflow-y-auto">
              {/* Project Image/Screenshots */}
              <div 
                className="relative h-64 md:h-96 cursor-pointer bg-gradient-to-br from-[#151538] to-[#1F1155]"
                onClick={() => showImagePreviewIndicator && setShowImagePreview(true)}
              >
                {(!mainImage || mainImageError) ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full" />
                      <ImageIcon className="w-24 h-24 text-white/20 relative z-10" />
                    </div>
                    <div className="mt-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                      <span className="text-sm text-white/40">Project Screenshots Coming Soon</span>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0">
                    <img
                      src={mainImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0B1E]/90" />
                  </div>
                )}

                {/* Image Preview Indicator */}
                {showImagePreviewIndicator && (
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 flex items-center gap-2 hover:bg-white/20 transition-colors">
                    <ImageIcon className="w-4 h-4" />
                    <span>{allImages.length} {allImages.length === 1 ? 'image' : 'images'}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative -mt-20 p-8 space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <motion.h2 
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Project Type & Status */}
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.projectType}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">
                    <Tag className="w-4 h-4" />
                    <span>{project.repoType}</span>
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Wrench className="w-5 h-5" />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies?.map((tech, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                        <span className="text-white">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 text-sm bg-white/5 text-white/70 rounded-full border border-white/10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Links */}
                <motion.div 
                  className="flex flex-wrap gap-4 pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>View Source</span>
                    </motion.a>
                  )}
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Image Preview Modal */}
          <ImagePreview
            isOpen={showImagePreview}
            onClose={() => setShowImagePreview(false)}
            images={allImages}
            title={project.title}
            subtitle={project.description}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal; 