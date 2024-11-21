import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setTrail(prev => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prev.slice(0, 5)
      ]);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-50"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="h-8 w-8 rounded-full bg-primary/30 blur-xl" />
      </motion.div>
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              left: point.x - 8,
              top: point.y - 8,
              zIndex: 49,
            }}
            className="pointer-events-none"
          >
            <div 
              className="h-4 w-4 rounded-full bg-primary/20 blur-lg"
              style={{
                opacity: 1 - (index * 0.2)
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default MouseEffect;