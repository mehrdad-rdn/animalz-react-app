// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.rtl.min.css";

import MainComponent from "./MainComponent";
import { useEffect } from "react";

const MainLtr = ({ children }) => {
  const megaMenuItems = {
    animals: ["a-z list", "categories", "search", "random Facts"],
    dogs: ["a-z list", "Suitable Dog", "search", "random Facts"],
    cats: ["a-z list", "Suitable Cat", "search", "random Facts"],
    birds: ["a-z list", "Suitable Bird", "search", "random Facts"],
  };
  console.log("main LTR loaded");
  useEffect(() => {
    const ltrCssLink = document.createElement("link");
    ltrCssLink.rel = "stylesheet";
    ltrCssLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";

    document.head.appendChild(ltrCssLink);

    return () => {
      document.head.removeChild(ltrCssLink);
    };
  }, []);
  return (
    <MainComponent megaMenuItems={megaMenuItems} direction="ltr">
      {children}
    </MainComponent>
  );
};

export default MainLtr;
