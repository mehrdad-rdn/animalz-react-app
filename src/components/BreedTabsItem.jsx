import { useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";
import PropTypes from "prop-types";
import { Stack } from "react-bootstrap";

const BreedTabsItem = ({
  title,
  score,
  description,
  minTitle,
  maxTitle,
  accordion,
}) => {
  const [collapse, setCollapse] = useState(true);

  return (
    <>
      <Stack
        direction={
          window.innerWidth < 768
            ? "vertical"
            : accordion
            ? "vertical"
            : "horizontal"
        }
        gap={3}
        className={accordion ? "col-md-5" : "w-100 justify-content-between "}
        style={{
          maxWidth: accordion
            ? window.innerWidth >= 768
              ? "50%"
              : "100%"
            : "100%",
        }}
      >
        <div
          className={`vstack h-100 ${
            accordion ? "w-100" : window.innerWidth >= 768 ? "w-50" : "w-100"
          }`}
          onClick={(e) => {
            if (!accordion) {
              return;
            }
            e.target.nextSibling.style.display = collapse ? "block" : "none";
            e.target.firstElementChild.children[1].firstElementChild.style.display =
              collapse ? "none" : "block";
            e.target.firstElementChild.children[1].lastElementChild.style.display =
              collapse ? "block" : "none";
            setCollapse((prev) => !prev);
          }}
        >
          <div
            className="hstack justify-content-between text-secondary"
            style={{ pointerEvents: "none" }}
          >
            <p className="fw-medium mb-0 mt-2 text-uppercase">{title}</p>
            <div
              style={{
                padding: "0.5rem",
                pointerEvents: "none",
              }}
            >
              {accordion && (
                <BsPlus
                  className="h3"
                  style={{
                    display: "block",
                  }}
                />
              )}
              <BsDash className="h3" style={{ display: "none" }} />
            </div>
          </div>
          {score !== undefined && (
            <div className="vstack" style={{ pointerEvents: "none" }}>
              <div className="hstack justify-content-between mx-1">
                <span className="small text-light">{minTitle}</span>
                <span className="small text-light">{maxTitle}</span>
              </div>
              <div className="hstack w-100">
                {Array(5)
                  .fill(null)
                  .map((item, index) => (
                    <div
                      className="bg-secondary bg-opacity-25 rounded"
                      style={{
                        height: "0.5rem",
                        width: "20%",
                        margin: "0.1rem 0.1rem",
                      }}
                      key={index}
                    >
                      {index < score && (
                        <div className=" h-100 bg-secondary bg-opacity-75 rounded"></div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
        <p
          className={`small mb-0 mt-2 text-light ${
            accordion ? "w-100" : window.innerWidth >= 768 ? "w-50" : "w-100"
          }`}
          style={{
            display: accordion ? "none" : "block",
            pointerEvents: "none",
          }}
        >
          {description}
        </p>
        {accordion && <hr className="text-secondary" />}
      </Stack>
      {!accordion && <hr className="text-secondary" />}
    </>
  );
};

BreedTabsItem.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  minTitle: PropTypes.string.isRequired,
  maxTitle: PropTypes.string.isRequired,
  accordion: PropTypes.bool,
};
BreedTabsItem.defaultProps = {
  title: "title",
  description: "add some descriptions about title",
  minTitle: "MIN",
  maxTitle: "MAX",
};

export default BreedTabsItem;
