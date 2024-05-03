// import React, { ReactPropTypes } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Stack, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = ({ imgUrl, megaMenuItems }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-warning bg-opacity-75 text-dark pb-2">
      <Container fluid="lg">
        <Row className="mb-3">
          <Col sm={4}>
            <Stack
              direction="horizontal"
              className="flex-nowrap align-items-center mt-3"
            >
              <Image src={imgUrl} fluid style={{ width: 48 }} />
              <div className="fw-bold d-inline-block mt-auto">
                <span className="text-success h5">A</span>
                <span className="text-dark h5">nimal</span>
                <span className="text-success h5">Z</span>
              </div>
            </Stack>
            <strong id="about" style={{ fontSize: 16, fontWeight: "normal" }}>
              {t("about_us")}
            </strong>
          </Col>
          <Col className="mt-auto">
            <Row xs={2} md={4} className="mt-3">
              {Object.keys(megaMenuItems).map((key) => (
                <Col key={key}>
                  <h5 className="small"> {key} </h5>
                  <Nav className="flex-column">
                    {megaMenuItems[key].map((item, index) => (
                      <Link
                        key={index}
                        to="/"
                        className="text-dark text-decoration-none "
                        style={{ fontSize: 10 }}
                      >
                        {item}
                      </Link>
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
          </span>
          <small>{t("copyWright")}</small>
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
