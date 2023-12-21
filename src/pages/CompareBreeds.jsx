import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Stack } from "react-bootstrap";
import { compareContext } from "../components/Contexes";
import CompareColumn from "../components/CompareColumn";

const CompaireBreeds = () => {
  // Assign the value of "petkind" using URL.
  const { petKind } = useParams();

  //Defining a state to store which breed the user would like to compare
  const [breedsArr, setBreedsArr] = useState(Array(2).fill(null));

  return (
    <compareContext.Provider value={[breedsArr, setBreedsArr]}>
      <header className="bg-dark">
        <Container fluid="lg" className="text-center py-5">
          <h1 className="text-warning">Compare Breeds</h1>
          <p className="lead text-secondary">
            Can’t decide which breed of dog is right for you? Compare dog breeds
            below to see how different breed characteristics and attributes
            stack up against each other.
          </p>
          <h5 className="text-secondary">
            Select up to 5 breeds to see a side-by-side comparison
          </h5>
        </Container>
      </header>
      <main className="bg-light">
        <Container fluid="lg">
          <Stack
            direction="horizontal"
            gap={1}
            className="justify-content-center my-2"
          >
            {breedsArr.map((_, index) => (
              <CompareColumn key={index} petKind={petKind} colIndex={index} />
            ))}
          </Stack>
        </Container>
      </main>
    </compareContext.Provider>
  );
};

export default CompaireBreeds;
