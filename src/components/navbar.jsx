import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavigationBar = ({ brand, imgUrl }) => {
  return (
    <>
      <Navbar expand="md" className="navbar-light bg-light user-select-none">
        <Container fluid="lg">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={imgUrl}
                alt={brand}
                width="48"
                //   height= "48"
                className="d-inline-block align-bottom img-fluid"
              />
              <div className="fw-bold d-inline-block">
                <span className="text-success">A</span>
                <span className="text-dark">nimal</span>
                <span className="text-success">Z</span>
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-menu" />
          <Navbar.Collapse id="navbar-menu">
            <Nav className="ms-auto align-items-center">
              <NavDropdown title="AnimalZ" id="navbar-menu-dropdown">
                <Link to="/" className="dropdown-item">
                  A-Z ltis
                </Link>
                <NavDropdown.Divider />
                <Link to="/" className="dropdown-item">
                  Dogs
                </Link>
                <Link to="/" className="dropdown-item">
                  cats
                </Link>
                <Link to="/" className="dropdown-item">
                  Birds
                </Link>
              </NavDropdown>
              <Link to="/" className="nav-link">
                Last Articles
              </Link>
              <Link to="/" className="nav-link">
                Abute Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
