import type { CoreComponentsProps } from "@/types";

const ConstraintedBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, className, classNames, onClick, id, elementRef } = props;

  return (
    <div
      className={`relative flex flex-col justify-start items-start w-full max-w-5xl p-0 mx-auto my-0 overflow-hidden transition duration-300 ease-in-out drop_in ${className || classNames || ''}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ConstraintedBox;