import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DevTools position="bottom-right" />
    <App />
  </React.StrictMode>
);
