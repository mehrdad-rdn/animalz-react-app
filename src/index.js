import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import Blog from "./pages/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const router = createBrowserRouter([{ path: "/", element: <Home /> },{ path:"/blog", element: <Blog /> }]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

