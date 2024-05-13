import { Navbar, Container, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  BsBrightnessHighFill,
  BsCircleHalf,
  BsGlobe2,
  BsMoonFill,
} from "react-icons/bs";
import { useState } from "react";
import useSystemThemeDetector from "../custom-hooks/useSystemThemeDetector";
const NavigationBar = ({ brand, imgUrl }) => {
  //define langueges array
  const langs = ["en", "fa"];
  //t function and i18n init
  const { t, i18n } = useTranslation(["translation"]);
  //define themes array
  const themes = ["auto", "Dark", "Light"];
  //select theme icon
  const themeIconSelector = (theme) => {
    if (theme === "Light") {
      return <BsBrightnessHighFill />;
    } else if (theme === "Dark") {
      return <BsMoonFill />;
    } else {
      return <BsCircleHalf />;
    }
  };
  //define selectedTheme state and innitialize with theme value from localStorage
  const [selectedTheme, setTheme] = useState(
    localStorage.getItem("theme") || "auto"
  );
  //define system prefered scheme color using custom hook
  const systemTheme = useSystemThemeDetector();
  //define finalTheme based on user select theme and system prefered color scheme
  const finalTheme = selectedTheme === "auto" ? systemTheme : selectedTheme;
  //some modifications need for change color theme
  const chaneTheme = (theme) => {
    // document.body.setAttribute("data-bs-theme", theme);
    document.documentElement.classList.toggle(
      "dark-mode",
      theme === "Dark" ? true : false
    );
  };

  chaneTheme(finalTheme);

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
              <Dropdown>
                <Dropdown.Toggle
                  id="navbar-menu-dropdown"
                  className="btn btn-light px-1"
                >
                  <BsGlobe2 className="mx-1" />
                  <span className="text-capitalize">
                    {t(`langBtn.langName.${i18n.resolvedLanguage}`)}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {langs.map((lng) => (
                    <Dropdown.Item
                      key={lng}
                      className={`border-0 d-flex flex-column px-auto ${
                        i18n.resolvedLanguage === lng ? "fw-bold" : "text-muted"
                      }`}
                      type="submit"
                      onClick={() => i18n.changeLanguage(lng)}
                    >
                      {t(`langBtn.langName.${lng}`)}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  id="theme-selector"
                  className="btn btn-light mx-2"
                >
                  {themeIconSelector(selectedTheme)}
                  <span className="mx-2 text-capitalize">{selectedTheme}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {themes.map((theme) => (
                    <Dropdown.Item
                      key={theme}
                      onClick={() => {
                        localStorage.setItem("theme", theme);
                        setTheme(theme);
                      }}
                    >
                      {themeIconSelector(theme)}
                      <span className="mx-2 text-capitalize">{theme}</span>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

NavigationBar.propTypes = {
  brand: PropTypes.string,
  imgUrl: PropTypes.any.isRequired,
};
NavigationBar.defaultProps = { brand: "AnimalZ" };

export default NavigationBar;
