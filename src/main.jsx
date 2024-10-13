import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/React-Projects/*",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  
  <RouterProvider router={router} />
  
);
