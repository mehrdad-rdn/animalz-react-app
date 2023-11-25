import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";

const SearchForm = ({
  placeHolder,
  describedby,
  lableby,
  className,
  theme,
  btnVariant,
}) => {
  const [searchQuery, setQuery] = useState("");
  const inputFocusHandler = (e) => {
    e.target.style.color = theme === "dark" ? "#004225" : "#f5f5dc";
    e.target.style.backgroundColor = theme === "dark" ? "#b0d9b1" : "#004225";
    e.target.style.borderColor = "#198754";
    e.target.style.boxShadow = "none";
  };
  const onBlureHandler = (e) => {
    e.target.style.color = theme === "dark" ? "#f5f5dc" : "#000";
    e.target.style.backgroundColor = theme === "dark" ? "#004225" : "#f5f5dc";
    // e.target.style.borderColor = theme === "dark" ? "#198754" : "#000";
  };

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    setQuery("");
  };
  return (
    <Form onSubmit={submitHandler}>
      <InputGroup>
        <Form.Control
          placeholder={placeHolder}
          aria-label={lableby}
          aria-describedby={describedby}
          className={className}
          data-bs-theme={theme}
          style={{
            backgroundColor: `${theme === "dark" ? "#004225" : "#f5f5dc"}`,
          }}
          value={searchQuery}
          onChange={queryHandler}
          onFocus={inputFocusHandler}
          onBlur={onBlureHandler}
        />
        <Button type="submit" variant={btnVariant} size="sm" id="searchBtn">
          <BsSearch />
        </Button>
      </InputGroup>
    </Form>
  );
};
SearchForm.defaultProps = {
  placeHolder: "Search",
  describedby: "searchBoxDescription",
  lableby: "Search Box",
  className: "py-0",
  theme: "dark",
  btnVariant: "warning",
};

SearchForm.prototype = {
  placeHolder: PropTypes.string,
  describedby: PropTypes.string,
  lableby: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  btnVariant: PropTypes.string,
};

export default SearchForm;
