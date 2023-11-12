// import React, { ReactPropTypes } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Stack, Image, Nav } from "react-bootstrap";

const Footer = ({ imgUrl, megaMenuItems }) => {
  // const MenuItems = ({ items }) => {
  //   return items.map((item) => (
  //     <Nav.Link
  //       key={item}
  //       href="#"
  //       className="text-dark p-0 mb-1"
  //       style={{ fontSize: 10 }}
  //     >
  //       {item}
  //     </Nav.Link>
  //   ));
  // };

  // const CreateMegaMenu = ({ megamenu }) => {
  //   const newArray = Object.keys(megaMenuItems);
  //   return newArray.map((key) => (
  //     <Col key={key}>
  //       <h5 className="small"> {key} </h5>
  //       <Nav className="flex-column">
  //         <MenuItems items={megamenu[key]} />
  //       </Nav>
  //     </Col>
  //   ));
  // };

  return (
    <div className="bg-warning bg-opacity-75 text-dark pb-2">
      <Container fluid="lg">
        <Row className="mb-3">
          <Col xs sm={4}>
            <Stack
              direction="horizontal"
              className="flex-nowrap align-items-center"
            >
              <Image src={imgUrl} fluid style={{ width: 48 }} />
              <div className="fw-bold d-inline-block">
                <span className="text-success">A</span>
                <span className="text-dark">nimal</span>
                <span className="text-success">Z</span>
              </div>
            </Stack>
            <strong style={{ fontSize: 10, fontWeight: "normal" }}>
              This website was designed by the Animalz team with the purpose of
              increasing people's knowledge about animals, especially pets. Wise
              people are happy with animals.
            </strong>
          </Col>
          <Col className="mt-auto">
            <Row xs={2} md={4} className="mt-3">
              {Object.keys(megaMenuItems).map((key) => (
                <Col key={key}>
                  <h5 className="small"> {key} </h5>
                  <Nav className="flex-column">
                    {megaMenuItems[key].map((item) => (
                      <Nav.Link
                        key={item}
                        href="#"
                        className="text-dark p-0 mb-1"
                        style={{ fontSize: 10 }}
                      >
                        {item}
                      </Nav.Link>
                    ))}
                  </Nav>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        {/* // to Insert Special Entities in React must use Hex code of utf-16 in fromCodePoint method of js String // */}
        <p className="text-center small ">
          copyright
          <span className="fw-bold text-danger">
            {" "}
            {String.fromCharCode(0x00a9)}{" "}
          </span>{" "}
          <small>AnimalZ Design and Development team.</small>
        </p>
      </Container>
    </div>
  );
};

Footer.propTypes = {
  imgUrl: PropTypes.any.isRequired,
  megaMenuItems: PropTypes.object.isRequired,
};

export default Footer;
