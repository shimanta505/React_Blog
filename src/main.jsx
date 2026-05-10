import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import AppRouter from "./AppRouter.jsx";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import AppRouter from "./AppRouter.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
