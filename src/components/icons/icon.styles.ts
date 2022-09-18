import styled from "styled-components";

// export const Icon = styled.svg`
//   path {
//     fill: ${({ theme }) => theme.text.onSurface.strong};
//   }
// `;

const Svg = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})``;

export const Icon = styled(Svg)`
  width: 24px;
  height: 24px;
`;
