import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import route from "./Router/Route.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
