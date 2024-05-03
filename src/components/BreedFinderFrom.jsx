import { Stack, Form, Button } from "react-bootstrap";
import { BsFunnelFill } from "react-icons/bs";
import { useRef } from "react";
import PropTypes from "prop-types";
import CheckboxAccordion from "./chekboxAccordion";
import { catSizeMap, dogSizeMap, lifeSpanMap } from "../assets/data";
import { useTranslation } from "react-i18next";

const BreedFinderForm = ({ characteristics, setFilter, petKind }) => {
  const { t } = useTranslation(["filterForm"]);
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

    let newItems = {};
    for (const key in selection.current) {
      const value = selection.current[key];
      if (value.length === 0) {
        delete selection.current[key];
      } else {
        switch (key) {
          case "size":
            newItems =
              petKind === "dog"
                ? { ...newItems, ...dogSizeMap[value] }
                : { ...newItems, ...catSizeMap[value] };
            delete selection.current[key];
            break;

          case "life-expectansy":
            newItems = { ...newItems, ...lifeSpanMap[value] };
            delete selection.current[key];
            break;

          default:
            break;
        }
      }
    }
    if (Object.keys(newItems).length !== 0) {
      selection.current = { ...selection.current, ...newItems };
    }
    Object.values(selection.current).some((element) => element !== "")
      ? setFilter(selection.current)
      : alert("select atleast one item");
  }

  //handle clear button onclick event
  function clearHandler(e) {
    e.preventDefault();
    checkBoxRef.current.forEach((element) => element.clearForm());
    selection.current = {};
    setFilter({ name: " " });
  }

  return (
    // <Form onSubmit={(e) => submitHnadler(e)}>
    <Form onSubmit={submitHnadler}>
      <Stack direction="horizontal">
        <span
          className="text-dark d-flex align-items-center"
          style={{ fontSize: 18 }}
        >
          <BsFunnelFill /> {t("filter_breeds")}
        </span>
        <Button
          type="reset"
          variant="link"
          onClick={clearHandler}
          className="link text-decoration-none fw-bold text-success p-0  ms-auto"
        >
          {t("clear")}
        </Button>
      </Stack>
      <hr className=" text-warning border border-warning border-2 rounded m-0 mb-1" />
      {characteristics.map((char, index) => (
        <CheckboxAccordion
          key={index}
          list={char.list}
          header={t(char.header)}
          ref={(element) => (checkBoxRef.current[index] = element)}
        />
      ))}
      <hr className=" text-warning border border-warning border-2 rounded m-0" />
      <Stack direction="horizontal" className="mt-1">
        <Button type="submit" size="sm" variant="dark">
          {t("submit")}
        </Button>
        <Button
          type="reset"
          variant="link"
          onClick={clearHandler}
          className="link text-decoration-none fw-bold text-success p-0  ms-auto"
        >
          {t("clear")}
        </Button>
      </Stack>
    </Form>
  );
};

BreedFinderForm.prototype = {
  characteristics: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  petKind: PropTypes.string.isRequired,
};

export default BreedFinderForm;
