import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";
import "../styles/searchBarStyle.css";
import useFetch from "./useFetch";

const SearchBar = ({ placeholder, callback, btnVariant, theme, petKind }) => {
  //Defining searchtem state to manage search input
  const [searchTerm, setTerm] = useState("");

  //Defining results state to manage suggestions list
  const [results, setResults] = useState([]);

  // Handle changes in the suggestions list when the search term is changed.
  const { data, setSearchParams } = useFetch(petKind, {});

  useEffect(
    () => {
      setSearchParams({ name: searchTerm.length === 0 ? "" : searchTerm });
    }, // eslint-disable-next-line
    [searchTerm]
  );
  useEffect(() => {
    setResults(data?.length ? data.map((item) => item.name) : []);
  }, [data]);

  // Perform required actions after form submission
  const submitHandler = (e) => {
    e.preventDefault();
    callback(searchTerm, data || []);
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
              <option key={index} value={item}></option>
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
  callback: PropTypes.func,
  btnVariant: PropTypes.string,
  theme: PropTypes.string,
};

export default SearchBar;
