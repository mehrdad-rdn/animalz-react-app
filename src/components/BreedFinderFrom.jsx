import { Stack, Form, Button } from "react-bootstrap";
import { BsFunnelFill } from "react-icons/bs";
import { useRef } from "react";
import PropTypes from "prop-types";
import CheckboxAccordion from "./chekboxAccordion";

const BreedFinderForm = ({ characteristics }) => {
  //declare ref to access child component sates and manage them
  const checkBoxRef = useRef([]);

  //declare ref to store user selection list
  const selection = useRef({});

  //handle submit button onclick event
  function submitHnadler(e) {
    e.preventDefault();

    checkBoxRef.current.forEach((element) => {
      selection.current = element.addToSelection(selection.current);
    });

    console.log(
      Object.values(selection.current).some((element) => element.length)
        ? selection.current
        : "select atleast one item"
    );
  }

  //handle clear button onclick event
  function clearHandler(e) {
    e.preventDefault();
    checkBoxRef.current.forEach((element) => element.clearForm());
  }

  return (
    // <Form onSubmit={(e) => submitHnadler(e)}>
    <Form onSubmit={submitHnadler}>
      <Stack direction="horizontal">
        <span
          className="text-dark d-flex align-items-center"
          style={{ fontSize: 18 }}
        >
          <BsFunnelFill /> FILTER BREEDS
        </span>
        <Button
          type="reset"
          variant="link"
          onClick={clearHandler}
          className="link text-decoration-none fw-bold text-success p-0  ms-auto"
        >
          Clear
        </Button>
      </Stack>
      <hr className=" text-warning border border-warning border-2 rounded m-0 mb-1" />
      {characteristics.map((char, index) => (
        <CheckboxAccordion
          key={index}
          list={char.list}
          header={char.header}
          ref={(element) => (checkBoxRef.current[index] = element)}
        />
      ))}
      <hr className=" text-warning border border-warning border-2 rounded m-0" />
      <Stack direction="horizontal" className="mt-1">
        <Button type="submit" size="sm" variant="dark">
          Submit
        </Button>
        <Button
          type="reset"
          variant="link"
          onClick={clearHandler}
          className="link text-decoration-none fw-bold text-success p-0  ms-auto"
        >
          Clear
        </Button>
      </Stack>
    </Form>
  );
};

BreedFinderForm.prototype = {
  characteristics: PropTypes.object.isRequired,
};

export default BreedFinderForm;
