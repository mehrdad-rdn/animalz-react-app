import { ScrollRestoration } from "react-router-dom";
import NavigationBar from "../components/navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import ScrollTopBtn from "../components/ScrollTopBtn";

const MainComponent = ({ children, megaMenuItems }) => {
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

export default MainComponent;
