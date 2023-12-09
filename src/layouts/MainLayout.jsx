import { ScrollRestoration } from "react-router-dom";
import NavigationBar from "../components/navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import ScrollTopBtn from "../components/ScrollTopBtn";

const MainLayout = ({ children }) => {
  const megaMenuItems = {
    animals: ["a-z list", "categories", "search", "random Facts"],
    dogs: ["a-z list", "Suitable Dog", "search", "random Facts"],
    cats: ["a-z list", "Suitable Cat", "search", "random Facts"],
    birds: ["a-z list", "Suitable Bird", "search", "random Facts"],
  };

  return (
    <>
      <NavigationBar imgUrl={logo} />
      {children}
      <Footer imgUrl={logo} megaMenuItems={megaMenuItems} />
      <ScrollTopBtn />
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
