import "./App.css";
import { Button } from "react-bootstrap";
import NavigationBar from "./navbar"
import logo from "../assets/logo.png"

function App() {
  return (
    <>
      <NavigationBar brand="animalz" imgUrl={logo} />
      <h1 className="text-uppercase">starter content</h1>
      {/* <Button variant="primary">primary</Button> */}
      <Button variant="primary">Primary</Button>
    </>
  );
}

export default App;
