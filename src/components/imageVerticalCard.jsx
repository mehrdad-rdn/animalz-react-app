import Proptypes from "prop-types";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomToggle from "./CustomToggle";

const ImageVerticalCard = ({
  imgUrl,
  header,
  title,
  abstract,
  linkTo,
  btnText,
  eventKey,
}) => {
  return (
    <Card className="bg-light ">
      <Row className="g-0">
        <Col md={4}>
          <img
            src={imgUrl}
            alt={header}
            className="img-fluid object-fit-cover h-100 "
          />
        </Col>
        <Col md={8}>
          {header && (
            <CardHeader className="border-bottom border-dark">
              {header}
            </CardHeader>
          )}
          <CardBody className="d-flex flex-column ">
            <CardTitle className="text-dark"> {title} </CardTitle>
            <CardText>
              {abstract}
              <br />
              {linkTo && (
                <Link
                  to={linkTo}
                  className=" text-success text-decoration-none card-link"
                >
                  Read More ...
                </Link>
              )}
              {btnText && (
                <CustomToggle eventKey={eventKey}>{btnText}</CustomToggle>
              )}
            </CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

ImageVerticalCard.prototype = {
  imgUrl: Proptypes.any.isRequired,
  header: Proptypes.string,
  title: Proptypes.string.isRequired,
  abstract: Proptypes.string.isRequired,
  linkTo: Proptypes.string,
  btntext: Proptypes.string,
  eventKey: Proptypes.string,
};

export default ImageVerticalCard;
