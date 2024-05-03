import { Card, Stack, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next";

const BreedCharsCard = ({ breedChar, kind }) => {
  const { t } = useTranslation(["breedCards"]);
  let charList = [];
  switch (kind) {
    case "cat":
      charList = [
        "shedding",
        "playfulness",
        "meowing",
        "intelligence",
        "grooming",
      ];
      break;
    case "dog":
      charList = [
        "shedding",
        "protectiveness",
        "trainability",
        "barking",
        "drooling",
      ];
      break;

    default:
      break;
  }
  return (
    <Col>
      <Card className="bg-light h-100" style={{ minWidth: "11rem" }}>
        <div className="ratio ratio-4x3 d-flex">
          <Card.Img
            variant="top"
            src={breedChar.image_link}
            className="object-fit-cover"
          />
        </div>
        <Card.Body className="p-1 d-flex flex-column ">
          <Card.Title className="text-capitalize small">
            {breedChar.name}
          </Card.Title>
          <div className=" mt-auto pb-2 ">
            {charList.map((title, index) => (
              <Stack variant="vertical" key={index}>
                <div className="d-flex flex-row flex-nowrap justify-content-between align-items-center">
                  <span
                    className=" text-capitalize"
                    style={{ fontSize: "15px" }}
                  >
                    {t(`${title}`)}
                  </span>
                  <div
                    className="rounded-pill bg-secondary border border-dark w-50 "
                    style={{ height: "15px" }}
                  >
                    <div
                      className="rounded-pill h-100 m-0 bg-dark"
                      style={{
                        width: `${breedChar[title] * 20}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </Stack>
            ))}
          </div>
          <Link
            // to={`/${kind}/${breedChar.name.replace(/\s/g, "-")}`}
            to={breedChar.name}
            className="btn btn-dark w-100"
          >
            {t("to_page")}
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

BreedCharsCard.propTypes = {
  breedChar: PropTypes.object.isRequired,
  kind: PropTypes.string.isRequired,
};
export default BreedCharsCard;
