import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import Blog from "./pages/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Breeds from "./pages/Breeds";
import BreedDetails from "./pages/BreedDetails";
import NotFoundErr from "./pages/NotFoundErr";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Blog /> },
  { path: `/:petKind`, element: <Breeds /> },
  { path: "/:petKind/:breedName", element: <BreedDetails /> },
  { path: "*", element: <NotFoundErr /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

