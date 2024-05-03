import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const NavigationBar = ({ brand, imgUrl }) => {
  const langs = ["en", "fa"];
  const { t, i18n } = useTranslation(["translation"]);

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
            <Nav className="ms-auto">
              <NavDropdown
                title={t("navbarItems.item1")}
                id="navbar-menu-dropdown"
              >
                <Link to="/" className="dropdown-item">
                  {t("navbarItems.dropDown.row1")}
                </Link>
                <NavDropdown.Divider />
                <Link to="/dog" className="dropdown-item">
                  {t("navbarItems.dropDown.row2")}
                </Link>
                <Link to="/cat" className="dropdown-item">
                  {t("navbarItems.dropDown.row3")}
                </Link>
                <Link to="/bird" className="dropdown-item">
                  {t("navbarItems.dropDown.row4")}
                </Link>
              </NavDropdown>
              <Link to="/blog" className="nav-link">
                {t("navbarItems.item2")}
              </Link>
              <a href="#about" className="nav-link">
                {t("navbarItems.item3")}
              </a>
              <NavDropdown title={t("langBtn.title")} id="navbar-menu-dropdown">
                {langs.map((lng) => (
                  <button
                    key={lng}
                    className={`border-0 d-flex flex-column px-auto ${
                      i18n.resolvedLanguage === lng ? "fw-bold" : "text-muted"
                    }`}
                    type="submit"
                    onClick={() => {
                      i18n.changeLanguage(lng);
                      document.documentElement.setAttribute("lang", lng);
                      if (lng === "fa") {
                        document.documentElement.setAttribute("dir", "rtl");
                      } else {
                        document.documentElement.setAttribute("dir", "ltr");
                      }
                    }}
                  >
                    {t(`langBtn.langName.${lng}`)}
                  </button>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

NavigationBar.propTypes = { brand: PropTypes.string, imgUrl: PropTypes.any.isRequired };
NavigationBar.defaultProps = { brand: "AnimalZ" };

export default NavigationBar;
