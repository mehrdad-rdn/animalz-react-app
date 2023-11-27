import { Card, Stack, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const BreedCharsCard = ({ breedChar }) => {
  
  return (
    <Col>
      <Card className="bg-light h-100" style={{ minWidth: "11rem" }}>
        <Card.Img variant="top" src={breedChar.image_link} />
        <Card.Body className="p-1 d-flex flex-column ">
          <Card.Title className="text-capitalize small">
            {breedChar.name}
          </Card.Title>
          <div className=" mt-auto pb-2 ">
            {[
              "shedding",
              "protectiveness",
              "trainability",
              "energy",
              "barking",
            ].map((title, index) => (
              <Stack variant="vertical" key={index}>
                <div className="d-flex flex-row flex-nowrap justify-content-between align-items-center">
                  <span
                    className=" text-capitalize"
                    style={{ fontSize: "15px" }}
                  >
                    {title}
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
            to={`/dogBreeds/${breedChar.name.replace(/\s/g, "-")}`}
            className="btn btn-dark w-100"
          >
            See Full Article
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BreedCharsCard;
