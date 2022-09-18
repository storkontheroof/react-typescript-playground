import { useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme/light-theme";
import "./styles.css";

import { Header } from "@components/header";
import { Home } from "@features/home";
import { ClickOutsideExample } from "@features/click-outside";
import { PromisesExample } from "@features/promises";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <nav className="App-navbar">
          <Link to="/" className="App-navbar-link">
            Home
          </Link>
          <Link to="/promises" className="App-navbar-link">
            Promises
          </Link>
          <Link to="/click-outside" className="App-navbar-link">
            Click outside
          </Link>
        </nav>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promises" element={<PromisesExample />} />
            <Route path="click-outside" element={<ClickOutsideExample />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}
