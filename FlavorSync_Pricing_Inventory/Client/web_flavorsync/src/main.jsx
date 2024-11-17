import { createRoot } from "react-dom/client"; // Import createRoot from react-dom
import App from "./App";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import * as React from "react";

const rootStyles = {
  backgroundColor: "#001d46",
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
      <div style={rootStyles}>
        <App />
      </div>
    </BrowserRouter>
);
