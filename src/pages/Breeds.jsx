import { Container, Row, Stack, Col, Accordion, Card } from "react-bootstrap";
import { BsCardText, BsFunnel } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

import { petData } from "../assets/data";
import MainLayout from "../layouts/MainLayout";
import SidebarLayout from "../layouts/SidebarLayout";
import NotFoundErr from "../pages/NotFoundErr";
import BreedFinderForm from "../components/BreedFinderFrom";
import ImageVerticalCard from "../components/imageVerticalCard";
import CustomToggle from "../components/CustomToggle";
import BreedCharsCard from "../components/BreedCharsCard";
import SearchBar from "../components/SearchBar";
import useFetch from "../components/useFetch";
import { useState } from "react";

const Breeds = () => {
  console.log("render breeds");
  //extract petKind value from page URL
  const { petKind } = useParams();
  // assign breedData value from api
  const {
    data: breedData,
    isLoading,
    error,
    setSearchParams,
  } = useFetch(petKind, { name: " ", offset: "20" });

  const [searchRsults, setSearchResults] = useState([]);
  console.log(searchRsults);

  //get relevant data for petKind from the petData object
  const data = petData.find((obj) => obj.kind === petKind) || null;
  // Check if the user entered the wrong URL
  if (!data) {
    return <NotFoundErr />;
  }

  return (
    <MainLayout>
      <header className="position-relative">
        <figure className="m-0">
          <img src={data.headerImg} alt="golden-retrevir" className="w-100" />
          <figcaption className="carousel-caption text-secondary bg-dark bg-opacity-50 rounded-sm">
            <h5 className="text-capitalize display-6">{data.kind} breeds </h5>
            <p className="lead">
              Learn more about {data.kind} breeds and their Characteristics.
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
            <Col xs={12} sm={6} md={4}>
              <SidebarLayout bg={`var(--bs-light)`}>
                <Stack direction="vertical" gap={3} className="m-2">
                  <section id="search-box">
                    <p
                      id="searchBoxDescription"
                      className="text-dark flex-fill m-0 me-auto"
                    >
                      FIND BY BREED NAME
                    </p>
                    <SearchBar
                      placeHolder={`${
                        data.kind.charAt(0).toUpperCase() + data.kind.slice(1)
                      } Breed`}
                      theme="dark"
                      callback={(_, results) => setSearchResults(results)}
                      petKind={petKind}
                    />
                  </section>
                  <section id="filter-form">
                    <BreedFinderForm
                      characteristics={data.characteristics}
                      setFilter={(params) => setSearchParams(params)}
                      petKind={petKind}
                    />
                  </section>
                </Stack>
              </SidebarLayout>
            </Col>
            <Col xs={12} sm={6} md={8}>
              <Accordion flush>
                <Card>
                  <Card.Header className="p-0">
                    <ImageVerticalCard
                      imgUrl={data.breedImg}
                      title={`What's a ${data.kind} breed?`}
                      abstract={data.breedAbstract}
                      btnText="SEE MORE ..."
                      eventKey="0"
                    />
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p className="my-0 ">{data.breedArticle}</p>
                      <CustomToggle eventKey="0">LESS</CustomToggle>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Row xs={1} md={2} xl={3} className="my-2 g-3">
                {searchRsults.length ? (
                  searchRsults.map((breedChar, index) => (
                    <BreedCharsCard
                      breedChar={breedChar}
                      kind={data.kind}
                      key={index}
                    />
                  ))
                ) : isLoading ? (
                  <p className="text-secondary lead text-center m-5">
                    Loading...
                  </p>
                ) : error ? (
                  <p className="text-secondary lead text-center m-5">
                    {error.message}
                  </p>
                ) : breedData.length === 0 ? (
                  <p className="text-secondary lead text-center m-5">
                    "Unfortunately, there are no items matching your request."
                  </p>
                ) : (
                  breedData.map((breedChar, index) => (
                    <BreedCharsCard
                      breedChar={breedChar}
                      kind={data.kind}
                      key={index}
                    />
                  ))
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </MainLayout>
  );
};

export default Breeds;
