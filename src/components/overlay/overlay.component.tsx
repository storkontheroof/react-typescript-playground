import { forwardRef, ReactElement } from "react";

import { IOverlayProps } from "./overlay.types";
import * as Styled from "./overlay.styles";

export const Overlay = forwardRef<HTMLDivElement, IOverlayProps>(
  (props, ref): ReactElement => {
    const { isVisible, children } = props;

    return (
      <Styled.Overlay ref={ref} isVisible={isVisible}>
        {children}
      </Styled.Overlay>
    );
  }
);
