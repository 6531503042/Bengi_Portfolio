"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

const MouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  
  // Adjusted spring settings for better following
  const springConfig = { 
    stiffness: 400,    // Increased for more responsive following
    damping: 35,       // Increased for less oscillation
    mass: 0.8,         // Reduced mass for lighter feel
    restDelta: 0.001   // Adjusted for smoother stop
  };

  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      // Direct position calculation with offset
      const targetX = e.clientX + 30;  // Offset to the right
      const targetY = e.clientY + 20;  // Offset down

      // Update springs
      springX.set(targetX);
      springY.set(targetY);

      // Update state
      setMousePosition({ x: targetX, y: targetY });
      setIsMoving(true);
      lastMousePos.current = { x: targetX, y: targetY };

      // Reset moving state after delay
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(moveTimeout);
    };
  }, [springX, springY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        x: springX,
        y: springY,
        transform: 'translate(-50%, -50%)'  // Center the element on the cursor
      }}
    >
      <motion.div
        animate={{
          scale: isMoving ? 1.05 : 1,
        }}
        transition={{
          scale: { 
            duration: 0.3,
            ease: "easeOut"
          },
        }}
        className="relative w-16 h-16"
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            y: [0, -3, 0],
            rotate: isMoving ? [-2, 2] : 0
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 0.3,
              ease: "easeOut"
            }
          }}
        >
          {/* Main GIF with glass effect */}
          <div className="w-full h-full relative">
            <img
              src="./among-us-eject.gif"
              alt="Among Us"
              className="w-full h-full object-contain relative z-10"
              style={{
                filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
                willChange: "transform",
                imageRendering: "crisp-edges",
                transform: `scale(${isMoving ? 1.02 : 1})`,
                transition: "transform 0.2s ease-out"
              }}
            />
          </div>

          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full filter blur-md"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.2, 0.15]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)",
              transformOrigin: "center",
              zIndex: 0
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MouseEffect;
