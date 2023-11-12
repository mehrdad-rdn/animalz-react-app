import "./App.css";
import { Button } from "react-bootstrap";
import NavigationBar from "./navbar"
import Footer from "./Footer";
import logo from "../assets/logo.png"

function App() {
  const megaMenuItems = {
    animals: ["a-z list", "categories", "search", "random Facts"],
    dogs: ["a-z list", "Suitable Dog", "search", "random Facts"],
    cats: ["a-z list", "Suitable Cat", "search", "random Facts"],
    birds: ["a-z list", "Suitable Bird", "search", "random Facts"],
  };
  return (
    <>
      <NavigationBar imgUrl={logo} />
      <h1 className="text-uppercase">starter content</h1>
      <Button variant="primary">Primary</Button>
      <Footer imgUrl={logo} megaMenuItems={megaMenuItems}/>
    </>
  );
}

export default App;
