import { useParams } from "react-router-dom";
import BreedDetailsComponent from "../components/BreedDetailsComponent";

const BreedDetails = () => {
  
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
