import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootComponent from "./components/RootComponent";
import Dashboard from "./routes/Dashboard.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      {
        index: true,
        element: <Dashboard/>
      }
    ]
  }

])


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>
);
