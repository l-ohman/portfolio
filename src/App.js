import React from "react";
import { Header, Footer } from "./components";
import Router from "./Routes";
import "./main.css";

export default function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}
