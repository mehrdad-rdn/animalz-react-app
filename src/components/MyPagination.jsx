import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

const MyPagination = ({ pageCount, active, disabled }) => {
  const [activePage, setActive] = useState(active);
  const lastPage = pageCount + 1;
  let firstPage = 1;
  if (activePage > 3) {
    if (lastPage - activePage < 1) {
      firstPage = lastPage - 4;
    } else {
      firstPage = activePage - 3;
    }
  }
  const pageLimit = pageCount > 5 ? firstPage + 4 : lastPage;
  const narrowScreen = (breakPoint) =>
    window.matchMedia(`(min-width:${breakPoint}px)`).matches;
  const items = [];
  for (let number = firstPage; number <= pageLimit; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        disabled={number === disabled}
        onClick={() => setActive(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination className="justify-content-center my-3 user-select-none">
      {firstPage !== 1 && narrowScreen(490) && (
        <Pagination.First onClick={() => setActive(1)} />
      )}
      {activePage !== 1 && (
        <Pagination.Prev
          onClick={() =>
            setActive((prevActive) => (prevActive > 1 ? prevActive - 1 : 1))
          }
        />
      )}
      {firstPage !== 1 && narrowScreen(405) && <Pagination.Ellipsis disabled />}
      {items}
      {lastPage !== pageLimit && narrowScreen(405) && (
        <Pagination.Ellipsis disabled />
      )}
      {activePage !== lastPage && (
        <Pagination.Next
          onClick={() => setActive((prevActive) => prevActive + 1)}
        />
      )}
      {lastPage !== pageLimit && narrowScreen(490) && (
        <Pagination.Last onClick={() => setActive(lastPage)} />
      )}
    </Pagination>
  );
};

MyPagination.defaultProps = {
  firstPage: 1,
  lastPage: 10,
  active: 1,
  disabled: null,
};

MyPagination.prototypes = {
  pageCount: PropTypes.number,
  active: PropTypes.number,
  disabled: PropTypes.number,
};

export default MyPagination;
