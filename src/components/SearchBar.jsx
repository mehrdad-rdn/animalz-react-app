import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";
import "../styles/searchBarStyle.css";

const SearchBar = ({ placeholder, breeds, callback, btnVariant, theme }) => {
  //Defining searchtem state to manage search input
  const [searchTerm, setTerm] = useState("");

  //Defining results state to manage suggestions list
  const [results, setResults] = useState([]);

  // Handle changes in the suggestions list when the search term is changed.
  useEffect(
    () => {
      switch (searchTerm.length) {
        case 1:
          setResults(
            breeds.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          );
          break;
        case 0:
          setResults([]);
          break;

        default:
          break;
      }
    }, // eslint-disable-next-line
    [searchTerm]
  );

  // Perform required actions after form submission
  const submitHandler = (e) => {
    e.preventDefault();
    callback(searchTerm);
    setTerm("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-group">
        <input
          className={`form-control ${theme}`}
          aria-describedby="search-bar"
          type="text"
          list="results-data"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setTerm(e.target.value)}
          onBlur={() => {
            setResults([]);
            setTerm("");
          }}
        />
        {results.length !== 0 && (
          <datalist id="results-data">
            {results.map((item, index) => (
              <option key={index} value={item.name}></option>
            ))}
          </datalist>
        )}
        <button
          type="submit"
          id="search-bar"
          className={`btn btn-sm btn-${btnVariant}`}
        >
          <BsSearch />
        </button>
      </div>
    </form>
  );
};

SearchBar.defaultProps = {
  btnVariant: "dark",
};

SearchBar.prototype = {
  placeholder: PropTypes.string,
  breeds: PropTypes.array,
  callback: PropTypes.func,
  btnVariant: PropTypes.string,
  theme: PropTypes.string,
};

export default SearchBar;
