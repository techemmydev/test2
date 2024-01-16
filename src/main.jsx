import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextCard from "./context/ContextCard.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextCard>
      <App />
    </ContextCard>
  </React.StrictMode>
);
