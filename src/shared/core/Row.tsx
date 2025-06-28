"use client";

interface RowProps {
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  id?: string;
  elementRef?: React.RefObject<HTMLDivElement>;
}

const Row = ({
  children,
  classNames = "",
  onClick,
  id,
  elementRef,
}: RowProps) => {
  return (
    <div
      className={`relative flex flex-row justify-start items-start transition duration-300 ease-in-out ${classNames}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Row;
