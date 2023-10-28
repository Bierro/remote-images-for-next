import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// eslint-disable-next-line no-restricted-imports
import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
