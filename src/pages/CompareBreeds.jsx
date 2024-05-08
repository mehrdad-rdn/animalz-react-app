import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Stack } from "react-bootstrap";
import { compareContext } from "../components/Contexes";
import CompareColumn from "../components/CompareColumn";
import MainLayout from "../layouts/MainLayout";
import { useTranslation } from "react-i18next";

const CompaireBreeds = () => {
  //define t function using useTranslation hook
  const { t } = useTranslation(["comparePage"]);
  // Assign the value of "petkind" using URL.
  const { petKind } = useParams();

  //Defining a state to store which breed the user would like to compare
  const [breedsArr, setBreedsArr] = useState(Array(2).fill(null));

  return (
    <compareContext.Provider value={[breedsArr, setBreedsArr]}>
      <MainLayout>
        <header className="bg-dark">
          <Container fluid="lg" className="text-center py-5">
            <h1 className="text-warning">{t("Page_title")}</h1>
            <p className="lead text-secondary">{t("title_desc")}</p>
            <h5 className="text-secondary">{t("Header_instruction")}</h5>
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
      </MainLayout>
    </compareContext.Provider>
  );
};

export default CompaireBreeds;
