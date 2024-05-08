import { ScrollRestoration } from "react-router-dom";
import NavigationBar from "./navbar";
import Footer from "./Footer";
import logo from "../assets/logo.png";
import ScrollTopBtn from "./ScrollTopBtn";

const MainComponent = ({ children, megaMenuItems }) => {
  //define app theme state
  // const [finalTheme, setFinalTheme] = useState(localStorage.getItem("theme"));
  //innitialize and update selected language using localStorage value
  const selectedLang = localStorage.getItem("i18nextLng");
  //some modifications to html elements based on the selected language
  const changeLang = (lng) => {
    console.log("called");
    document.documentElement.setAttribute("lang", lng);
    document.documentElement.setAttribute("dir", lng === "fa" ? "rtl" : "ltr");
    document.getElementsByTagName("title")[0].innerHTML =
      lng === "fa" ? "انیمالز" : "AnimalZ";
  };
  changeLang(selectedLang);

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
