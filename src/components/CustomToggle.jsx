import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    // console.log("totally custom!")
  });
  return (
    <Button
      className="btn-link text-decoration-none text-success"
      onClick={decoratedOnClick}
      variant="link"
    >
      {children}
    </Button>
  );
};

CustomToggle.prototype = { children: PropTypes.string.isRequired,eventKey: PropTypes.number.isRequired };
CustomToggle.defaultProps = { children: "Toggle Button" };


export default CustomToggle;
