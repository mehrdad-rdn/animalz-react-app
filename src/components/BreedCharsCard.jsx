import { Card, Stack, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//  sampleResponse = [
//   {
//     image_link: "https://api-ninjas.com/images/dogs/golden_retriever.jpg",
//     good_with_children: 5,
//     good_with_other_dogs: 5,
//     shedding: 4,
//     grooming: 2,
//     drooling: 2,
//     coat_length: 1,
//     good_with_strangers: 5,
//     playfulness: 4,
//     protectiveness: 3,
//     trainability: 5,
//     energy: 3,
//     barking: 1,
//     min_life_expectancy: 10,
//     max_life_expectancy: 12,
//     max_height_male: 24,
//     max_height_female: 24,
//     max_weight_male: 75,
//     max_weight_female: 65,
//     min_height_male: 23,
//     min_height_female: 23,
//     min_weight_male: 65,
//     min_weight_female: 55,
//     name: "Golden Retriever",
//   },
// ];

const BreedCharsCard = ({ breedChar }) => {
  
  return (
    <Col>
      <Card className="bg-light h-100" style={{ minWidth: "11rem" }}>
        <Card.Img variant="top" src={breedChar.image_link} />
        <Card.Body className="p-1 d-flex flex-column ">
          <Card.Title className="text-capitalize small">{breedChar.name}</Card.Title>
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
                <span className=" text-capitalize" style={{ fontSize: "15px" }}>
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
            to="/dogBreeds"
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
