import { useParams } from "react-router-dom";
import BreedDetailsComponent from "../components/BreedDetailsComponent";

const BreedDetails = () => {
  console.log("breed details rendered");
  //extracting data from url-params
  const { petKind, breedName } = useParams();

  return (
    <BreedDetailsComponent
      key={breedName}
      breedName={breedName}
      petKind={petKind}
    />
  );
};

export default BreedDetails;
