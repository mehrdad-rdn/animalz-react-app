import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import scImage from "../assets/showcasseImage.svg";
import img1 from "../assets/irish-setter.webp";
import SectionsCard from "../components/SectionsCard";
import ImageVerticalCard from "../components/imageVerticalCard";
import Searchbar from "../components/SearchBar";

function Home() {
  const cardsData = [
    {
      title: "A-Z Animals",
      description:
        "See lists of animals that start with every letter of the alphabet, from A to Z. We track all types of animals like lions and tigers, dogs and cats, even dinosaurs and spiders.Choose your favorite letter below to see all animals that start with it today.",
      linkTo: "/",
    },
    {
      title: "A-Z Dog Breeds",
      description:
        "Our comprehensive database of dog breeds includes detailed information on over 300 different breeds. Each entry provides a thorough description of the breed's characteristics, including size, temperament, exercise needs, grooming requirements ,...",
      linkTo: "/",
    },
    {
      title: "A-Z Cat Breeds",
      description:
        "Our extensive database of cat breeds features detailed information on over 70 different breeds. Each entry provides a comprehensive description of the breed's characteristics, including size, temperament, grooming needs, activity levels, and potential health issues.",
      linkTo: "/",
    },
  ];

  // hard-coding data just use for preparing ui and after connecting to api will be useless

  const articlesData = [
    {
      // imgUrl: "https://picsum.photos/id/237/200/300",
      imgUrl: `${img1}`,
      header: "Do You now",
      title: "The Nose Knows",
      abstract:
        "A dog’s sense of smell is legendary, but did you know that their nose has as many as 300 million receptors? In comparison, a human nose has about 5 million.",
      linkTo: "/",
    },
    {
      imgUrl: `${require("../assets/black-palm-cockatoo.webp")}`,
      // imgUrl: `${img2}`,
      header: "Read About",
      title: "Wild Palm Cockatoos Woo Mates With Improvised Drums",
      abstract:
        "Wild male palm cockatoos attract mates through an elaborate musical display, including dancing, vocal serenades, and spontaneous seed pod percussion.",
      linkTo: "/",
    },
  ];
  return (
    <MainLayout>
      <section id="showCase" className="bg-light">
        <Container fluid="md" className="py-3">
          <Row xs={1} md={2} className="align-items-center">
            <div className="text-center text-md-start">
              <h1 className="text-dark">
                Find Your Favorite<span className="text-success">Animal</span>
              </h1>
              <p className="lead my-3">
                Discover the strongest, smartest, and fastest animals in the
                world by searching below, or scroll to see all animals listed
                from A-Z. We are the largest website of our kind for wild animal
                and pet lovers worldwide!
              </p>
              <Button variant="success" size="lg" className="my-3 px-4">
                See Them All
              </Button>
            </div>
            <Image src={scImage} fluid className="user-select-none"></Image>
          </Row>
        </Container>
      </section>
      <section id="searchBox" className="bg-dark user-select-none">
        <Container fluid="md" className="pt-1">
          <Row md={1} lg={2} className="py-3">
            <Col md={8} lg={6}>
              <p className="h5 text-warning">
                Search for any animal you would like to learn more about
              </p>
            </Col>
            <Col md={4} lg={6}>
              <Searchbar
                theme="light"
                placeHolder="Animal Name"
                btnVariant="warning"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="homeCards" className="bg-light py-3 ">
        <Container fluid="lg">
          <Row xs={1} sm={2} md={3} className="justify-content-center g-2">
            {cardsData.map((data, index) => (
              <Col key={index}>
                <SectionsCard
                  title={data.title}
                  description={data.description}
                  linkTo={data.linkTo}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section id="lastArticles" className="bg-dark pb-4">
        <Container fluid="lg">
          <Stack direction="horiaontal" gap={3} className="pt-3">
            {articlesData.map((data, index) => (
              <ImageVerticalCard
                imgUrl={data.imgUrl}
                header={data.header}
                title={data.title}
                abstract={data.abstract}
                linkTo={data.linkTo}
                key={index}
              />
            ))}
          </Stack>
          <Stack
            direction="vertical"
            className="align-items-center flex-md-row"
          >
            <p className="lead text-secondary mt-3 me-3">
              Explore our blog and see More Animal News, Facts, Rankings ,...
            </p>
            <Link
              to="/blog"
              className="btn btn-warning ms-auto py-0 text-nowrap "
            >
              Explore Blog <BsChevronDoubleRight className="h5 mt-2 p-0" />
            </Link>
          </Stack>
        </Container>
      </section>
    </MainLayout>
  );
}

export default Home;
