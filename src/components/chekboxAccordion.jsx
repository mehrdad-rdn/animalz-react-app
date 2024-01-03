import { forwardRef, useImperativeHandle, useState } from "react";
import { Accordion, Form } from "react-bootstrap";
import PropTypes from "prop-types";

//declaring component with forwardRef to take a ref from parrent component
const CheckboxAccordion = forwardRef(function CheckboxAccordion(
  { header, list },
  ref
) {
  const [checkedItems, setChecked] = useState({ [list[0].title]: "" });
  const [isActive, setActive] = useState(false);

  //Expose custom functions to parent component with ref for state management.
  useImperativeHandle(ref, () => {
    return {
      clearForm() {
        setChecked({ [list[0].title]: [] });
        setActive(false);
      },
      addToSelection(selection) {
        return { ...selection, ...checkedItems };
      },
    };
  });

  // manage accordion collapse
  const acordionHandler = () => {
    setActive((prev) => !prev);
  };
  //handle onclick event for checkboxes
  const handleCheks = (title, level) => {
    setChecked({ [title]: checkedItems[title] === level ? "" : level });
  };

  return (
    <Accordion
      flush
      activeKey={isActive ? ["0"] : []}
      alwaysOpen
      id="filter-accordion"
    >
      <Accordion.Item eventKey="0" className="pb-1">
        <Accordion.Header onClick={acordionHandler}>{header}</Accordion.Header>
        <Accordion.Body className="d-flex flex-wrap p-1 bg-light justify-content-between">
          {list.map(({ label, title, level }) => (
            <Form.Check
              type="checkbox"
              id={`${title}-${level}`}
              label={`${level}. ${label}`}
              value={level}
              data-title={title}
              checked={checkedItems[title] === level || false}
              onChange={() => handleCheks(title, level)}
              key={level}
              style={{
                fontSize: "10px",
                margin: " 0 3px",
                display: "flex",
              }}
            />
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
});

CheckboxAccordion.propTypes = {
  header: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default CheckboxAccordion;
