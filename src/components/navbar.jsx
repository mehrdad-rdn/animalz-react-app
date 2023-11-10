import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavigationBar = ({brand, imgUrl}) => {
  return (
    <>
      <Navbar expand="md" className="navbar-light bg-light user-select-none">
        <Container fluid="lg" >
          <Navbar.Brand href="#">
            <img
              src= {imgUrl}
              alt= {brand}
              width= "48"
            //   height= "48"
              className="d-inline-block align-bottom img-fluid"
            />
            <div className="fw-bold d-inline-block">
              <span className="text-success">A</span>
              <span className="text-dark">nimal</span>
              <span className="text-success">Z</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-menu" />
          <Navbar.Collapse id="navbar-menu">
            <Nav className="ms-auto">
              <NavDropdown title="AnimalZ" id="navbar-menu-dropdown">
                <NavDropdown.Item href="#">A-Z ltis</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Dogs</NavDropdown.Item>
                <NavDropdown.Item href="#">cats</NavDropdown.Item>
                <NavDropdown.Item href="#">Birds</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#articles">Last Articles</Nav.Link>
              <Nav.Link href="#about">Abute Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
