"use client";

import { RefObject } from "react";

type DisplayType = "flex" | "grid" | "block" | "inline" | "inline-block";
type Direction = "row" | "column" | "row-reverse" | "column-reverse";
type Width = "full" | "auto" | "screen" | "constrained";
type Align = "start" | "center" | "end" | "stretch" | "baseline";
type Justify = "start" | "center" | "end" | "between" | "around" | "evenly";

interface BoxProps {
  children?: React.ReactNode;
  id?: string;
  display?: DisplayType;
  direction?: Direction;
  width?: Width;
  height?: string;
  padding?: string;
  margin?: string;
  gap?: string;
  align?: Align;
  justify?: Justify;
  overflow?: string;
  className?: string;
  onClick?: () => void;
  ref?: RefObject<HTMLDivElement>;
}

const Box = ({
  children,
  id,
  display = "flex",
  direction = "column",
  width = "full",
  height = "auto",
  padding = "",
  margin = "",
  gap = "",
  align = "start",
  justify = "start",
  overflow = "visible",
  className = "",
  onClick,
  ref,
}: BoxProps) => {
  // Process display
  const displayClass =
    display === "flex" ? "flex" : display === "grid" ? "grid" : display;

  // Process direction (only applies to flex)
  const directionClass = display === "flex" ? `flex-${direction}` : "";

  // Process width
  const widthClass =
    width === "full"
      ? "w-full"
      : width === "screen"
        ? "w-screen"
        : width === "constrained"
          ? "w-full max-w-5xl mx-auto"
          : width === "auto"
            ? "w-auto"
            : "";

  // Process alignment (for flex)
  const alignClass = display === "flex" ? `items-${align}` : "";

  // Process justification (for flex)
  const justifyClass = display === "flex" ? `justify-${justify}` : "";

  // Height
  const heightClass = height === "auto" ? "h-auto" : height;

  // Overflow
  const overflowClass = overflow === "visible" ? "" : `overflow-${overflow}`;

  // Transition
  const transitionClass = "transition duration-300 ease-in-out";

  return (
    <div
      id={id}
      ref={ref}
      onClick={onClick}
      className={`${displayClass} ${directionClass} ${widthClass} ${heightClass} ${alignClass} ${justifyClass} ${gap} ${padding} ${margin} ${overflowClass} ${transitionClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
