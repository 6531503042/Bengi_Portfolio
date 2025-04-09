import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

interface ImagePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  subtitle?: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  isOpen,
  onClose,
  images,
  title,
  subtitle
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  // If no valid images are available, show placeholder
  const hasValidImages = images.some((_, index) => !imageErrors[index]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-[95%] max-w-6xl max-h-[90vh] m-4"
            onClick={handleImageClick}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative aspect-video bg-[#151538] rounded-lg overflow-hidden">
              {imageErrors[currentIndex] ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40">
                  <ImageIcon className="w-16 h-16 mb-4" />
                  <p className="text-sm">Image failed to load</p>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${title} - Image ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onError={() => handleImageError(currentIndex)}
                  />
                </AnimatePresence>
              )}

              {/* Navigation arrows - only show if there are multiple valid images */}
              {hasValidImages && images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors text-white"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors text-white"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              {subtitle && (
                <p className="text-sm text-white/80">{subtitle}</p>
              )}
              {/* Only show navigation dots if there are multiple valid images */}
              {hasValidImages && images.length > 1 && (
                <div className="mt-2 flex items-center gap-2">
                  {images.map((_, index) => (
                    !imageErrors[index] && (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-white w-4"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    )
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImagePreview; 