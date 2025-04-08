import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Avatar3DProps {
  className?: string;
}

const Avatar3D = ({ className = "" }: Avatar3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / (width / 2);
      const y = (e.clientY - top - height / 2) / (height / 2);

      setMousePosition({ x, y });
      
      // Calculate rotation based on mouse position
      setRotation({
        x: y * 20, // Limit rotation to 20 degrees
        y: -x * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate eye position based on mouse movement
  const leftEyePosition = {
    x: mousePosition.x * 4,
    y: mousePosition.y * 4
  };

  const rightEyePosition = {
    x: mousePosition.x * 4,
    y: mousePosition.y * 4
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative w-64 h-64 ${className}`}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1000px" }}
    >
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-xl">
        {/* Eyes */}
        <motion.div
          className="absolute left-1/4 top-1/3 w-8 h-8 bg-white rounded-full"
          animate={{
            x: leftEyePosition.x,
            y: leftEyePosition.y
          }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 w-4 h-4 bg-black rounded-full"
            animate={{
              x: leftEyePosition.x * 0.5,
              y: leftEyePosition.y * 0.5
            }}
          />
        </motion.div>
        
        <motion.div
          className="absolute right-1/4 top-1/3 w-8 h-8 bg-white rounded-full"
          animate={{
            x: rightEyePosition.x,
            y: rightEyePosition.y
          }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 w-4 h-4 bg-black rounded-full"
            animate={{
              x: rightEyePosition.x * 0.5,
              y: rightEyePosition.y * 0.5
            }}
          />
        </motion.div>

        {/* Mouth */}
        <motion.div
          className="absolute left-1/2 bottom-1/4 w-16 h-8 -translate-x-1/2"
          animate={{
            height: isHovered ? 12 : 8,
            borderRadius: isHovered ? "100%" : "40%"
          }}
        >
          <div className="w-full h-full bg-black rounded-full" />
        </motion.div>

        {/* Blush */}
        <div className="absolute left-1/6 top-1/2 w-8 h-4 bg-pink-400/30 rounded-full blur-sm" />
        <div className="absolute right-1/6 top-1/2 w-8 h-4 bg-pink-400/30 rounded-full blur-sm" />
      </div>
    </motion.div>
  );
};

export default Avatar3D; 