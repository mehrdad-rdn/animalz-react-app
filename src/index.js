import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import Blog from "./pages/Blog";
import "../src/styles/main.min.css";
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

root.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);

function Loading() {
  <div className="bg-dark text-secondary">
    <div className="container-lg">
      <h1>Loading...</h1>
    </div>
  </div>;
}
