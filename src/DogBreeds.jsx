import { Container, Row, Stack, Col } from "react-bootstrap";
import MainLayout from "./layouts/MainLayout";
import { BsCardText, BsFunnel } from "react-icons/bs";
import { Link } from "react-router-dom";
import SidebarLayout from "./layouts/SidebarLayout";
import BreedFinderForm from "./components/BreedFinderFrom";
import SearchForm from "./components/SearchForm";

const characteristics = [
  {
    header: "Protectiveness",
    list: [
      { label: "Mildly Protective", title: "protectiveness", level: 1 },
      { label: "Moderately Protective", title: "protectiveness", level: 2 },
      { label: "Guarding Instincts", title: "protectiveness", level: 3 },
      { label: "Highly Protective", title: "protectiveness", level: 4 },
      { label: "Extremely Protective", title: "protectiveness", level: 5 },
    ],
  },
  {
    header: "Shedding Level",
    list: [
      { label: "Infrequent", title: "shedding", level: 1 },
      { label: "Seasonal", title: "shedding", level: 2 },
      { label: "Frequent", title: "shedding", level: 3 },
      { label: "Occasional", title: "shedding", level: 4 },
      { label: "Regularly", title: "shedding", level: 5 },
    ],
  },
  {
    header: "Trainability",
    list: [
      { label: "May Be Stubborn", title: "trainability", level: 1 },
      { label: "Agreeable", title: "trainability", level: 2 },
      { label: "Eager To Please", title: "trainability", level: 3 },
      { label: "Independent", title: "trainability", level: 4 },
      { label: "Easy Training", title: "trainability", level: 5 },
    ],
  },
  {
    header: "Activity Level",
    list: [
      { label: "Calm", title: "energy", level: 1 },
      { label: "Moderate", title: "energy", level: 2 },
      { label: "Energetic", title: "energy", level: 3 },
      { label: "Regular Exercise", title: "energy", level: 4 },
      { label: "Needs Lots Of Activity", title: "energy", level: 5 },
    ],
  },
  {
    header: "Barking Level",
    list: [
      { label: "When Necessary", title: "barking", level: 1 },
      { label: "Infrequent", title: "barking", level: 2 },
      { label: "Medium", title: "barking", level: 3 },
      { label: "Frequent", title: "barking", level: 4 },
      { label: "Likes To Be Vocal", title: "barking", level: 5 },
    ],
  },
  {
    header: "Life Expectancy",
    list: [
      { label: "Short Lifespan", title: "life-expectancy", level: 1 },
      { label: "Average Lifespan", title: "life-expectancy", level: 2 },
      { label: "Long Lifespan", title: "life-expectancy", level: 3 },
      { label: "Extended Lifespan", title: "life-expectancy", level: 4 },
      { label: "Exceptional Lifespan", title: "life-expectancy", level: 5 },
    ],
  },
  {
    header: "size",
    list: [
      { label: "Tiny Terrier", title: "size", level: 1 },
      { label: "Small Stature", title: "size", level: 2 },
      { label: "Medium Build", title: "size", level: 3 },
      { label: "Large Breed", title: "size", level: 4 },
      { label: "Giant Guardian", title: "size", level: 5 },
    ],
  },
];

const DogBreeds = () => {
  return (
    <MainLayout>
      <header className="position-relative">
        <figure className="m-0">
          <img
            src={`${require("./assets/golden retrevir.jpg")}`}
            alt="golden-retrevir"
            className="w-100"
          />
          <figcaption className="carousel-caption text-secondary bg-dark bg-opacity-50 rounded-sm">
            <h5 className="text-capitalize display-6">Dog Breeds</h5>
            <p className="lead">
              Learn more about dog breeds and their Characteristics.
            </p>
            <Stack
              direction="horizontal"
              gap={2}
              className="flex-wrap justify-content-center"
            >
              <a
                href="#filter-form"
                className="btn btn-sm btn-warning text-nowrap"
              >
                <BsFunnel className="me-1" />
                Filter Breeds
              </a>
              <Link to="/blog" className="btn btn-sm btn-warning text-nowrap">
                <BsCardText className="me-1" />
                Read Articles
              </Link>
            </Stack>
          </figcaption>
        </figure>
      </header>
      <main className="bg-dark">
        <Container fluid="lg">
          <Row xs={1} sm={2} className="py-3">
            <Col sm={3} style={{ minWidth: "13rem" }}>
              <SidebarLayout bg={`var(--bs-light)`}>
                <Stack direction="vertical" gap={3} className="m-2">
                  <section id="search-box">
                    <p
                      id="searchBoxDescription"
                      className="text-dark flex-fill m-0 me-auto"
                    >
                      FIND BY BREED NAME
                    </p>
                    <SearchForm
                      placeHolder="Dog Breed"
                      lableby="dog breed Search"
                      theme="dark"
                    />
                  </section>
                  <section id="filter-form">
                    <BreedFinderForm characteristics={characteristics} />
                  </section>
                </Stack>
              </SidebarLayout>
            </Col>
            <Col sm={9}></Col>
          </Row>
        </Container>
      </main>
    </MainLayout>
  );
};

export default DogBreeds;
