import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ResumePreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumePreview = ({ isOpen, onClose }: ResumePreviewProps) => {
  const [scale, setScale] = useState(1);
  
  // Hide navigation when preview is open
  useEffect(() => {
    const nav = document.querySelector('nav');
    if (nav) {
      nav.style.opacity = isOpen ? '0' : '1';
      nav.style.pointerEvents = isOpen ? 'none' : 'auto';
    }
    
    // Cleanup
    return () => {
      if (nav) {
        nav.style.opacity = '1';
        nav.style.pointerEvents = 'auto';
      }
    };
  }, [isOpen]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleDownload = () => {
    // Create a direct link to download instead of just opening in new tab
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Resume.pdf'; // This will force download instead of opening in new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-[95%] max-w-6xl h-[90vh] m-4 bg-[#0B0B1E]/90 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Controls Bar */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-b from-[#151538]/90 to-transparent backdrop-blur-sm border-b border-white/10"
            >
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleZoomOut}
                  className="hover:bg-white/10 text-white/80 hover:text-white"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleZoomIn}
                  className="hover:bg-white/10 text-white/80 hover:text-white"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
                <span className="text-sm text-white/80 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                  {Math.round(scale * 100)}%
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  onClick={handleDownload}
                  className="hover:bg-white/10 text-white/80 hover:text-white gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="hover:bg-white/10 text-white/80 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Resume Preview */}
            <motion.div 
              className="w-full h-full overflow-auto p-16 pt-24 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ transformOrigin: 'top center' }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-lg blur-xl" />
                <img
                  src="/Resume.png"
                  alt="Resume Preview"
                  className="relative w-full h-auto object-contain rounded-lg shadow-2xl ring-1 ring-white/20"
                />
              </motion.div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B0B1E]/90 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumePreview; 