import styled from "styled-components";

import { IOverlayProps } from "./overlay.types";

export const Overlay = styled.div<IOverlayProps>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 6px 24px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  z-index: 999;
  max-height: 400px;
  overflow-y: auto;
`;
