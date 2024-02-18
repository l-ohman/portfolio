import React from "react";
import { ThemeProvider } from "styled-components";
import { MainPage } from "./components";
import theme from "./Theme";
import "./main.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}
