import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Header } from "@components/header";
import { ClickOutsideExample } from "@features/click-outside";
import { Home } from "@features/home";
import { PromisesExample } from "@features/promises";
import { ContextsExample } from "@features/contexts";

import * as Styled from "./App.styles";
import { theme } from "./themes/light-theme";

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
          <Styled.NavBarLink to="/contexts">Contexts</Styled.NavBarLink>
        </Styled.NavBar>
        <Styled.Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promises" element={<PromisesExample />} />
            <Route path="/click-outside" element={<ClickOutsideExample />} />
            <Route path="/contexts" element={<ContextsExample />} />
          </Routes>
        </Styled.Content>
      </Styled.App>
    </ThemeProvider>
  );
}
