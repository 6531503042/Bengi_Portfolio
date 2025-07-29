import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react";

interface ImagePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title?: string;
  subtitle?: string;
}

const ImagePreview = ({
  isOpen,
  onClose,
  images,
  title,
  subtitle,
}: ImagePreviewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  // Reset current index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const handleNext = () => {
    if (images.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrevious = () => {
    if (images.length > 1) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Don't render if no images
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-150 z-[101]"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Main content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-7xl mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation buttons - Always show if multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-150 z-20"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-150 z-20"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Image container */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="w-full h-full"
                >
                  {imageError[currentIndex] ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <ImageIcon className="w-12 h-12 text-gray-400" />
                      </div>
                      <span className="mt-4 text-sm text-gray-400 font-medium">
                        Image failed to load
                      </span>
                    </div>
                  ) : (
                    <img
                      src={images[currentIndex]}
                      alt={`${title || 'Preview'} ${currentIndex + 1}`}
                      className="w-full h-full object-contain"
                      onError={() => handleImageError(currentIndex)}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image info and navigation dots */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              {title && (
                <h3 className="text-xl font-semibold text-white mb-2">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-sm text-gray-300 mb-4">
                  {subtitle}
                </p>
              )}
              
              {/* Image counter and navigation dots */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 font-medium">
                  {currentIndex + 1} of {images.length}
                </span>
                
                {images.length > 1 && (
                  <div className="flex items-center gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToImage(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors duration-150 ${
                          idx === currentIndex
                            ? "bg-white"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImagePreview;
