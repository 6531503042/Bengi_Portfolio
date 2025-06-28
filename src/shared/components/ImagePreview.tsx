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
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[101]"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Main content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-7xl mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation buttons */}
            {currentIndex > 0 && (
              <button
                onClick={handlePrevious}
                className="absolute left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}
            {currentIndex < images.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Image container */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-[#0B0B1E]/50 backdrop-blur-sm border border-white/10">
              {imageError[currentIndex] ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full" />
                    <div className="relative bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <ImageIcon className="w-12 h-12 text-white/40" />
                    </div>
                  </div>
                  <span className="mt-4 text-sm text-white/60 font-medium">
                    Image failed to load
                  </span>
                </div>
              ) : (
                <img
                  src={images[currentIndex]}
                  alt={`Preview ${currentIndex + 1}`}
                  className="w-full h-full object-contain"
                  onError={() => handleImageError(currentIndex)}
                />
              )}
            </div>

            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              {title && (
                <h3 className="text-xl font-semibold text-white mb-2">
                  {title}
                </h3>
              )}
              {subtitle && <p className="text-sm text-white/70">{subtitle}</p>}
              <div className="flex items-center gap-2 mt-4">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex
                        ? "bg-white scale-125"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImagePreview;
