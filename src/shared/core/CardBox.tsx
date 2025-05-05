"use client";

import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { MouseEvent } from "react";

interface CardBoxProps {
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  id?: string;
  elementRef?: React.RefObject<HTMLDivElement>;
  noHoverEffect?: boolean;
  noBorder?: boolean;
  bgColor?: string;
  padding?: string;
  radius?: string;
}

const CardBox = ({ 
  children, 
  classNames = "", 
  onClick, 
  id, 
  elementRef,
  noHoverEffect = false,
  noBorder = false,
  bgColor = "hover:bg-zinc-800/10",
  padding = "",
  radius = "rounded-xl"
}: CardBoxProps) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!e.currentTarget || noHoverEffect) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  const borderClass = noBorder ? "" : "border border-zinc-600 hover:border-zinc-400/50";

  return (
    <div
      id={id}
      onMouseMove={onMouseMove}
      onClick={onClick}
      ref={elementRef}
      className={`relative w-full flex flex-col justify-start items-start duration-500 ${radius} ${bgColor} ${borderClass} overflow-hidden group ${padding} ${classNames}`}
    >
      {!noHoverEffect && (
        <div className="pointer-events-none absolute">
          <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
            style={style}
          />
          <motion.div
            className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
            style={style}
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default CardBox;