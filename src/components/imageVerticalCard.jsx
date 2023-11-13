import Proptypes from "prop-types";
import {
  Card,
  CardBody,
  CardHeader,
  CardLink,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const ImageVerticalCard = ({ imgUrl, header, title, abstract, linkTo }) => {
  return (
    <Card className="bg-light ">
      <Row className="g-0">
        <Col md={4}>
          <img
            src={imgUrl}
            alt={header}
            className="img-fluid object-fit-cover h-100 rounded-start"
          />
        </Col>
        <Col md={8}>
          <CardHeader className="border-bottom border-dark">
            {header}
          </CardHeader>
          <CardBody className="d-flex flex-column ">
            <CardTitle className="text-dark"> {title} </CardTitle>
            <CardText>
              {abstract}
              <br />
              <CardLink className="text-decoration-none">
                <Link
                  to={linkTo}
                  className=" text-success text-decoration-none"
                >
                  Read More ...
                </Link>
              </CardLink>
            </CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

ImageVerticalCard.prototype = {
  imgUrl: Proptypes.any.isRequired,
  header: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  abstract: Proptypes.string.isRequired,
  linkTo: Proptypes.string,
};

export default ImageVerticalCard;
