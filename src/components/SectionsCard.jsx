import { Button, Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const SectionsCard = ({ title, description, linkTo }) => {
  return (
    <Card className="bg-dark h-100">
      <CardBody className="d-flex flex-column">
        <CardTitle className="text-warning">{title}</CardTitle>
        <CardText className="text-secondary"> {description} </CardText>
        <Button variant="warning" className="mt-auto px-4">
          <Link to={linkTo}></Link> Go To Page
        </Button>
      </CardBody>
    </Card>
  );
};

SectionsCard.proptype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
};

export default SectionsCard;
