import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="h-8 w-8 rounded-full bg-primary/30 blur-xl" />
    </motion.div>
  );
};

export default MouseEffect;