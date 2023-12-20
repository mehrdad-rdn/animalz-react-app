import { Stack } from "react-bootstrap";
import { DogImgPlaceholder } from "../assets/BreedDetailsSVG";
import { charTabsData, petData } from "../assets/data";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { BsXCircle } from "react-icons/bs";

const CompareColumn = ({
  petKind,
  removeCallback,
  colIndex,
  findItem,
  breeds,
  breedObj,
}) => {
  const [breedChar, setBreed] = useState(null);
  useEffect(() => {
    setBreed(breedObj);
  }, [breedObj]);

  const labelFinder = (char) => {
    let result;
    petData
      .find(({ kind }) => kind === petKind)
      .characteristics.find(({ list }) =>
        list.some(({ title, label, level }) => {
          if (title === char && level === breedChar[char]) {
            result = label;
            return true;
          }
          return false;
        })
      );
    return result;
  };

  return (
    <Stack direction="vertical" gap={2} className="align-items-center col-2 ">
      {breedChar ? (
        <div className="border border-dark border-1 m-1 rounded-top position-relative">
          <a
            href="/"
            className="rounded-circle bg-light position-absolute "
            style={{ top: "-10px", left: "-10px" }}
            onClick={(e) => removeCallback(colIndex, e)}
          >
            <BsXCircle className="text-dark h3 m-0" />
          </a>
          <img
            src={breedChar.image_link}
            alt={breedChar.name}
            className="img-fluid w-100 rounded-top "
          />
        </div>
      ) : petKind === "dog" ? (
        <DogImgPlaceholder className="p-4 border border-dark " />
      ) : (
        <div className="ratio ratio-4x3 border border-dark ">
          <div className="m-1 bg-dark bg-opacity-25 text-center fw-bold ">
            {`${petKind} image`}
          </div>
        </div>
      )}

      <SearchBar
        theme="light"
        btnVariant="dark"
        breeds={breeds}
        placeholder="Breed Name"
        findItem={(searchQuery) => findItem(searchQuery, breedChar, colIndex)}
      />
      {breedChar && (
        <Stack direction="vertical">
          <div
            className="d-flex bg-dark rounded-top"
            style={{ height: "4rem" }}
          >
            <div className=" text-secondary px-1 text-center m-auto">
              {breedChar.name}
            </div>
          </div>
          {charTabsData.map(({ tabName, tabChars }, index) => (
            <div key={index}>
              <h6 className="w-100 text-center text-dark bg-dark bg-opacity-25 mb-0 py-1">
                {tabName}
              </h6>
              <Stack
                direction="vertical"
                className="py-2 bg-dark bg-opacity-10"
              >
                {tabChars
                  .filter((obj) => obj.petKind === petKind)
                  .map(({ title, scoreFrom }, index) => (
                    <div key={index}>
                      <p
                        className="w-100 text-center text-dark mb-0 px-1"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {title}
                      </p>

                      {labelFinder(scoreFrom) ? (
                        <p
                          style={{
                            fontSize: "12px",
                            textAlign: "center",
                          }}
                        >
                          {labelFinder(scoreFrom)}
                        </p>
                      ) : (
                        <div className="hstack w-100 p-1">
                          {Array(5)
                            .fill(null)
                            .map((_, index) => (
                              <div
                                key={index}
                                className="bg-success bg-opacity-25 rounded"
                                style={{
                                  height: "0.5rem",
                                  width: "20%",
                                  margin: "0.1rem 0.1rem",
                                }}
                              >
                                {index < breedChar[scoreFrom] && (
                                  <div className=" h-100 bg-dark bg-opacity-75 rounded"></div>
                                )}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  ))}
              </Stack>
            </div>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default CompareColumn;
