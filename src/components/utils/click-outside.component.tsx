import { ReactElement, forwardRef } from "react";

import { useClickOutside } from "./click-outside.hook";

interface IClickContainerProps {
  onClickOutside: () => void;
  children: any;
}

export const ClickOutsideContainer = forwardRef<
  HTMLDivElement,
  IClickContainerProps
>(({ onClickOutside, children }, ref): ReactElement => {
  useClickOutside(ref, onClickOutside);

  return <div ref={ref}>{children}</div>;
});
