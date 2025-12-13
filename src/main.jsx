import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./routes/Dashboard.jsx";
import Inventory from "./routes/Inventory.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />, 
  },
  {
    path: "/inventory",
    element: <Inventory/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
