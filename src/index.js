import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Home from "./pages/HomePage";
import Blog from "./pages/Blog";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";
// import "../src/styles/main.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap"
import Breeds from "./pages/Breeds";
import BreedDetails from "./pages/BreedDetails";
import NotFoundErr from "./pages/NotFoundErr";
import CompareBreeds from "./pages/CompareBreeds";
import "./assets/i18n";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Blog /> },
  { path: `/:petKind`, element: <Breeds /> },
  { path: "/:petKind/:breedName", element: <BreedDetails /> },
  { path: "/:petKind/compare", element: <CompareBreeds /> },
  { path: "*", element: <NotFoundErr /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
const lng = localStorage.getItem("i18nextLng");
document.documentElement.setAttribute("lang", lng);
if (lng === "fa") {
  document.documentElement.setAttribute("dir", "rtl");
} else {
  document.documentElement.setAttribute("dir", "ltr");
}
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

