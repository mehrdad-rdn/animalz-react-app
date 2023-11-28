import { Link, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Image } from "react-bootstrap";
import { dogBreeds, catBreeds } from "../assets/data";
import { BsChevronRight } from "react-icons/bs";

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

const BreedDetails = () => {
  const { petKind, breedName } = useParams();
  let breedData = "";
  switch (petKind) {
    case "dog":
      breedData = dogBreeds;
      break;
    case "cat":
      breedData = catBreeds;
      break;

    default:
      break;
  }
  const breedChar = breedData.find(
    (item) => item.name.replace(/\s/g, "-") === breedName
  );
  const { image_link, name } = breedChar;
  return (
    <MainLayout>
      <div className="d-flex flex-column align-items-center">
        <Image src={image_link} fluid />
        <h2>{name}</h2>
        <Link
          to={`/${petKind}`}
          className="btn btn-outline-success btn-lg ms-auto my-5 me-5"
        >
          Back <BsChevronRight />
        </Link>
      </div>
    </MainLayout>
  );
};

export default BreedDetails;
