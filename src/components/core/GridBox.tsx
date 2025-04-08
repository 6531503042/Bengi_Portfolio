"use client";

interface GridBoxProps {
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  id?: string;
  elementRef?: React.RefObject<HTMLDivElement>;
}

const GridBox = ({ children, classNames = "", onClick, id, elementRef }: GridBoxProps) => {
  return (
    <div
      className={`relative w-full grid gap-6 transition duration-300 ease-in-out ${classNames}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GridBox; 