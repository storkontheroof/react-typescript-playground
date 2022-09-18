import logo from "@assets/react-logo.svg";

import * as Styled from "./header.styles";

export const Header = () => {
  return (
    <Styled.Container>
      React
      <img src={logo} className="App-logo" alt="logo" />
      Playground
    </Styled.Container>
  );
};
