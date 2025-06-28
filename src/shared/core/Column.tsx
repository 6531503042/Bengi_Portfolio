interface ColumnProps {
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  id?: string;
  elementRef?: React.RefObject<HTMLDivElement>;
}

const Column = ({
  children,
  classNames = "",
  onClick,
  id,
  elementRef,
}: ColumnProps) => {
  return (
    <div
      className={`relative flex flex-col justify-start items-start transition duration-300 ease-in-out ${classNames}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Column;
