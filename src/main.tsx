// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx"; // ІМПОРТ ПРОВАЙДЕРА
// import './index.css' // Або ваш глобальний CSS файл

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
