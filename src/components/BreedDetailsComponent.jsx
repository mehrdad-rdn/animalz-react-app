import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Carousel, Col, Container, Row, Stack } from "react-bootstrap";
import { petData } from "../assets/data";
import { BsChevronLeft } from "react-icons/bs";
import {
  BreedHeight,
  BreedWeight,
  CompaireBreeds,
  LifeLength,
} from "../assets/BreedDetailsSVG";
import NotFoundErr from "../pages/NotFoundErr";
import ImageVerticalCard from "../components/imageVerticalCard";
import BreedTraits from "../components/BreedTraits";
import useFetch from "../components/useFetch";
import { useTranslation } from "react-i18next";

const BreedDetailsComponent = ({ breedName, petKind }) => {
  //use i18 next with useTranslation hook
  const { t } = useTranslation(["breedPage"]);
  // Fetch Breed data using it's name
  const { data, isLoading } = useFetch(petKind, {
    name: breedName,
  });
  const { data: localData } = useFetch(petKind, {
    name: " ",
    offset: `${Math.floor(Math.random() * (petKind === "dog" ? 180 : 40))}`,
  });

  //check the breedName validation
  if (isLoading) {
    return <h1 className=" text-center text-dark m-5">Loading...</h1>;
  } else if (data.length === 0) {
    return <NotFoundErr />;
  }

  const breedChar = data[0];

  // Extract important characteristics from the breed object
  const { image_link, name } = breedChar;
  // Define important characteristics based on the type of pet.
  const majorChars =
    petKind === "dog"
      ? ["protectiveness", "trainability", "energy"]
      : ["playfulness", "other_pets_friendly", "children_friendly"];
  //Find similar breeds based on important characteristics defined earlier.
  let similarBreeds = [];
  let prevItem = [name];

  if (localData?.length) {
    for (let i = 0; i < 3; i++) {
      const newItem = localData[Math.floor(Math.random() * localData.length)];
      if (newItem !== undefined && !prevItem.includes(newItem.name)) {
        prevItem = [...prevItem, newItem.name];
        similarBreeds = [...similarBreeds, newItem];
      }
    }
  }

  // Create an array of the breed main characteristics to use in the header showcase.
  const headerMainChars = (breed) => {
    const charectristics = petData.find(
      (obj) => obj.kind === "dog"
    ).characteristics;

    const breedGroups = majorChars.map((item) =>
      charectristics
        .find(({ list }) => list.some(({ title }) => title === item))
        ?.list.find(({ title, level }) => level === breed[title])
    );

    const mainChars =
      petKind === "cat"
        ? `Origin:
        ${breed.origin}`
        : breedGroups.map((item) => item?.label).join(" / ");

    return mainChars;
  };

  return (
    <MainLayout>
      <header className="bg-light">
        <section className="broudcrumb">
          {" "}
          <Container fluid="lg">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-capitalize link-success">
                    {t("home")}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link
                    to={`/${petKind}`}
                    className="text-capitalize link-success"
                  >
                    {t(`${petKind}_breeds`)}
                  </Link>
                </li>
                <li className="breadcrumb-item text-capitalize text-dark">
                  {name}
                </li>
              </ol>
            </nav>
          </Container>
        </section>
        <section id="showcase">
          {" "}
          <Container fluid="lg" className="position-relative">
            <div
              className="position-absolute top-0 bg-dark"
              style={{
                height: window.innerWidth < 880 ? "90dvw" : "40dvw",
                left: 0,
                right: 0,
              }}
            ></div>
            <div
              id="wrapper"
              style={{ zIndex: "3" }}
              className="d-flex flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-around pt-4"
            >
              <div className="class px-2" style={{ zIndex: "3" }}>
                <h3 className="text-secondary">{name}</h3>
                <p className="text-light text-capitalize">
                  {headerMainChars(breedChar)}
                </p>
              </div>
              <div
                className="flex-shrink-1 align-self-end d-flex"
                style={{
                  maxWidth: 640,
                }}
              >
                <Carousel>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "100%",

                        aspectRatio: "1/1",
                        objectFit: "contain",
                      }}
                      src={image_link}
                      alt={name}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </Container>
        </section>
      </header>
      <main className="bg-light py-5">
        <section id="avg-size-age" className="bg-dark bg-opacity-10 mb-5">
          <Container fluid="lg">
            <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center pt-4">
              <h5 className="text-success  p-2 col-lg-4">
                {t("avg_size_age")}
              </h5>
              <div className="d-flex flex-fill flex-column flex-md-row justify-content-md-evenly">
                {petKind === "dog" && (
                  <div className=" hstack gap-2 mx-auto mb-4">
                    <BreedHeight />
                    <div className="vstack">
                      <p className="text-success lead">{t("height")}</p>
                      <p className="text-dark text-nowrap mb-0">
                        {Math.min(
                          breedChar.min_height_male,
                          breedChar.min_height_female
                        )}{" "}
                        -{" "}
                        {Math.max(
                          breedChar.max_height_male,
                          breedChar.max_height_female
                        )}{" "}
                        {t("in")}
                      </p>
                    </div>
                  </div>
                )}
                <div className="hstack gap-2 mx-auto mb-4 ">
                  <BreedWeight />
                  <div className="vstack">
                    <p className="text-success lead">{t("weight")}</p>
                    <p className="text-dark text-nowrap mb-0">
                      {breedChar.min_weight_male
                        ? Math.min(
                            breedChar.min_weight_male,
                            breedChar.min_weight_female
                          )
                        : breedChar.min_weight}{" "}
                      -{" "}
                      {breedChar.max_weight_male
                        ? Math.max(
                            breedChar.max_weight_male,
                            breedChar.max_weight_female
                          )
                        : breedChar.max_weight}{" "}
                      {t("lbs")}
                    </p>
                  </div>
                </div>
                <div className="hstack gap-2 mx-auto mb-4">
                  <LifeLength />
                  <div className="vstack">
                    <p
                      className="text-success lead"
                      style={{ width: "5rem", lineHeight: "1rem" }}
                    >
                      {t("age")}
                    </p>
                    <p className="text-dark text-nowrap mb-0">
                      {breedChar.min_life_expectancy} -{" "}
                      {breedChar.max_life_expectancy} {t("year")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <BreedTraits petKind={petKind} breedChar={breedChar} />

        <section id="explore">
          <Container fluid="md">
            <Row xs={1} lg={2}>
              <Col lg={6} className="order-last order-lg-first mt-5 ">
                <Stack direction="vertical">
                  <h1 className="text-dark">{t("compare_breeds")}</h1>
                  <p className="text-success">
                    {t("compare_breeds_desc", { name: `${name}` })}
                  </p>
                  <div className="hstack flex-nowrap justify-content-between position-relative mb-2">
                    <div
                      className="w-100  bg-success bg-opacity-25  position-absolute start-0"
                      style={{ bottom: "1.2rem", height: "60%" }}
                    ></div>
                    <img
                      src={image_link}
                      alt={name}
                      className="fluid w-50 ps-2 pt-2"
                      style={{ zIndex: 10 }}
                    />
                    <div
                      className="w-100 text-dark opacity-75"
                      style={{ zIndex: 10 }}
                    >
                      <CompaireBreeds />
                    </div>
                  </div>
                  <Link to={`/${petKind}/compare`} className="btn btn-dark">
                    {t("compare_breeds_btn")}
                  </Link>
                </Stack>
                <Link
                  to={-1}
                  className="btn btn-outline-success btn-lg bg-dark bg-opacity-10  mt-5"
                >
                  <BsChevronLeft /> {t("back")}
                </Link>
              </Col>
              <Col lg={6} className="order-first order-lg-last mt-5">
                <h1 className="text-dark ">{t("explore_breeds")}</h1>
                <div className="vstack gap-2">
                  {similarBreeds.map((breed, index) => (
                    <ImageVerticalCard
                      imgUrl={breed.image_link}
                      title={breed.name}
                      abstract={headerMainChars(breed)}
                      linkTo={`/${petKind}/${breed.name}`}
                      key={index}
                    />
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </MainLayout>
  );
};

export default BreedDetailsComponent;
