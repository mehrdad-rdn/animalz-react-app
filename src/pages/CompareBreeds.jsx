import { Container, Stack } from "react-bootstrap";
import { dogBreeds, catBreeds } from "../assets/data";
import { useParams } from "react-router-dom";
import CompareColumn from "../components/CompareColumn";
import { useState } from "react";

const CompaireBreeds = () => {
  const { petKind } = useParams();

  const [breedsArr, setBreedsArr] = useState(Array(2).fill(null));

  const breeds = petKind === "dog" ? dogBreeds : catBreeds;

  const findItem = (searchQuery, breedChar, colIndex) => {
    const result = breeds.find((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (result) {
      const nullIndex = breedsArr.findIndex((item) => item === null);
      const newArr = breedsArr.map((item, index) =>
        index === nullIndex ? result : item
      );
      if (breedChar === null) {
        setBreedsArr(
          nullIndex === 0
            ? newArr
            : newArr.length === 5
            ? newArr
            : [...newArr, null]
        );
      } else {
        setBreedsArr(
          breedsArr.map((item, index) => (index === colIndex ? result : item))
        );
        // console.log(breedChar.name, breedsArr.for);
      }
      return true;
    } else {
      console.log("no items match");
    }
  };

  const removeItem = (colIndex, e) => {
    e.preventDefault();
    setBreedsArr(
      breedsArr[breedsArr.length - 1] === null
        ? breedsArr.length === 2
          ? [null, null]
          : breedsArr.filter((_, index) => index !== colIndex)
        : [...breedsArr.filter((_, index) => index !== colIndex), null]
    );
  };

  return (
    <>
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
            {breedsArr.map((item, index) => (
              <CompareColumn
                key={index}
                petKind={petKind}
                colIndex={index}
                breeds={breeds}
                breedObj={item}
                findItem={findItem}
                removeCallback={removeItem}
              />
            ))}
          </Stack>
        </Container>
      </main>
    </>
  );
};

export default CompaireBreeds;
