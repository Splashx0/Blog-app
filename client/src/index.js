import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { BlogContextProvider } from "./context/blogContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <BlogContextProvider>
        <App />
      </BlogContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
