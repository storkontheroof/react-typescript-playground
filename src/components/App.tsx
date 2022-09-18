import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "../theme/light-theme";
import * as Styled from "./App.styles";

import { Header } from "@components/header";
import { Home } from "@features/home";
import { ClickOutsideExample } from "@features/click-outside";
import { PromisesExample } from "@features/promises";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styled.App>
        <Styled.Header>
          <Header />
        </Styled.Header>
        <Styled.NavBar>
          <Styled.NavBarLink to="/">Home</Styled.NavBarLink>
          <Styled.NavBarLink to="/promises">Promises</Styled.NavBarLink>
          <Styled.NavBarLink to="/click-outside">
            Click outside
          </Styled.NavBarLink>
        </Styled.NavBar>
        <Styled.Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promises" element={<PromisesExample />} />
            <Route path="click-outside" element={<ClickOutsideExample />} />
          </Routes>
        </Styled.Content>
      </Styled.App>
    </ThemeProvider>
  );
}
