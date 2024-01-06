import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
