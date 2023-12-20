import { Stack, Form, Button, Accordion } from "react-bootstrap";
import { BsFunnelFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const BreedFinderForm = ({ characteristics, kind }) => {
  const selectionInitialize = () => {
    const selectionInit = {};
    Object.values(characteristics).forEach((arr) => {
      selectionInit[arr.list[0].title] = [];
    });
    return selectionInit;
  };
  const [activeTabs, setActiveTabs] = useState([]);
  const [selectedItems, setSelection] = useState(selectionInitialize());
  useEffect(
    () => {
      setActiveTabs([]);
      setSelection(selectionInitialize());
    }, // eslint-disable-next-line
    [kind]
  );

  const acordionHandler = (e) => {
    setActiveTabs(
      activeTabs.includes(`${e.target.innerHTML}`)
        ? activeTabs.filter((eventkey) => eventkey !== `${e.target.innerHTML}`)
        : [...activeTabs, `${e.target.innerHTML}`]
    );
  };

  function handleCheks(title, level) {
    console.log(selectedItems[title].some((item) => item === level));

    setSelection({
      ...selectedItems,
      [title]: selectedItems[title].some((item) => item === level)
        ? selectedItems[title].filter((item) => item !== level)
        : [...selectedItems[title], level],
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();

    Object.values(selectedItems).some((arr) => arr.length)
      ? console.log(selectedItems)
      : alert("Please select at least one item before Submit");

    // clearHandler(e);
  };

  function clearHandler(e) {
    e.preventDefault();
    setSelection(selectionInitialize());
    setActiveTabs([]);
  }

  return (
    <Form onSubmit={submitHandler}>
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
      <hr className=" text-warning border border-warning border-2 rounded m-0" />
      <Accordion flush alwaysOpen activeKey={activeTabs} id="filter-accordion">
        {characteristics.map((char, index) => (
          <Accordion.Item eventKey={`${char.header}`} key={index}>
            <Accordion.Header onClick={acordionHandler}>
              {char.header}
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-wrap p-1 bg-light justify-content-between">
              {char.list.map(({ label, title, level }) => (
                <Form.Check
                  type="checkbox"
                  id={`${title}-${level}`}
                  label={`${level}. ${label}`}
                  value={level}
                  data-title={title}
                  checked={
                    selectedItems[title]?.some((item) => item === level) ||
                    false
                  }
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
        ))}
      </Accordion>
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
