import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ResumePreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumePreview = ({ isOpen, onClose }: ResumePreviewProps) => {
  const [scale, setScale] = useState(1);

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full h-[90vh] m-4 bg-white rounded-2xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Controls Bar */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleZoomOut}
                  className="bg-white hover:bg-gray-100"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleZoomIn}
                  className="bg-white hover:bg-gray-100"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
                <span className="bg-white px-3 py-2 rounded-md text-sm">
                  {Math.round(scale * 100)}%
                </span>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={handleDownload}
                  className="bg-white hover:bg-gray-100"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onClose}
                  className="bg-white hover:bg-gray-100"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Resume Preview */}
            <div className="w-full h-full overflow-auto p-16 pt-20">
              <motion.div
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ transformOrigin: 'top center' }}
              >
                <img
                  src="/Resume.png"
                  alt="Resume Preview"
                  className="w-full h-auto object-contain shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumePreview; 