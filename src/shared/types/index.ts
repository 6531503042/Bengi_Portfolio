import { RefObject } from "react";

export interface CoreComponentsProps {
  children?: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  id?: string;
  elementRef?: RefObject<HTMLDivElement>;
}
