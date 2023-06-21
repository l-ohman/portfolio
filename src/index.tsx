import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function renderRoot() {
  const element = document.getElementById("root");
  if (element) {
    const root = ReactDOM.createRoot(element);
    root.render(<App />);
  } else {
    throw new Error("Error mounting to div with id 'root'");
  }
}

renderRoot();
