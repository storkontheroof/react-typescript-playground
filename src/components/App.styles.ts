import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const App = styled.div`
  text-align: center;
  padding-top: 80px;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 12px 24px;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const NavBar = styled.nav`
  padding: 12px;
  background-color: #cecece;
  font-size: 0.75rem;
`;
export const NavBarLink = styled(RouterLink)`
  color: #333;
  margin: 0 5px;
  display: inline-block;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(RouterLink)`
  color: #61dafb;
`;
