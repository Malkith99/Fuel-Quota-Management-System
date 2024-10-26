import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // Only need BrowserRouter here

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* BrowserRouter must be inside React.StrictMode */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: Measure performance
// reportWebVitals(console.log);
