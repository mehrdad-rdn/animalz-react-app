import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import scImage from "../assets/showcasseImage.svg";
import img1 from "../assets/irish-setter.webp";
import SectionsCard from "../components/SectionsCard";
import ImageVerticalCard from "../components/imageVerticalCard";
import Searchbar from "../components/SearchBar";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation(["home"]);
  const cardsData = [
    {
      name: "animal",
      title: "A-Z Animals",
      linkTo: "/",
    },
    {
      name: "dog",
      title: "A-Z Dog Breeds",
      linkTo: "/",
    },
    {
      name: "cat",
      title: "A-Z Cat Breeds",
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
                {t("find_favorite")}
                <span className="text-success">{t("animal")}</span>
              </h1>
              <p className="lead my-3">{t("find_favoriot_desc")}</p>
              <Button variant="success" size="lg" className="my-3 px-4">
                {t("see_all")}
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
              <p className="h5 text-warning">{t("animal_search_desc")}</p>
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
                  description={t(`${data.name}_desc`)}
                  // description={data.description}
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
