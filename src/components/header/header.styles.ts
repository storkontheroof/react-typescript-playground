import styled, { keyframes } from "styled-components";

export const LogoAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 80px;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${LogoAnimation} infinite 20s linear;
  }
`;
