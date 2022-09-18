import { ReactElement, ComponentPropsWithRef } from "react";

export interface IOverlayProps extends ComponentPropsWithRef<"div"> {
  isVisible: boolean;
  children: ReactElement | ReactElement[];
}
