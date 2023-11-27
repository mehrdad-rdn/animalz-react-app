import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import SidebarLayout from "../layouts/SidebarLayout";
import ImageVerticalCard from "../components/imageVerticalCard";

import img1 from "../assets/irish-setter.webp";
import MyPagination from "../components/MyPagination";

const articlesData = [
  {
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
  {
    imgUrl: `${img1}`,
    header: "Do You now",
    title: "The Nose Knows",
    abstract:
      "A dog’s sense of smell is legendary, but did you know that their nose has as many as 300 million receptors? In comparison, a human nose has about 5 million.",
    linkTo: "/",
  },
  {
    imgUrl: `${require("../assets/black-palm-cockatoo.webp")}`,
    header: "Read About",
    title: "Wild Palm Cockatoos Woo Mates With Improvised Drums",
    abstract:
      "Wild male palm cockatoos attract mates through an elaborate musical display, including dancing, vocal serenades, and spontaneous seed pod percussion.",
    linkTo: "/",
  },
];

const aticleCategories = [
  "Pet care and grooming tips",
  "Animal behavior and training techniques",
  "Pet health and wellness",
  "Pet adoption and rescue stories",
  "Animal rights and advocacy",
  "Pet-friendly travel and adventures",
  "Cute and funny animal videos and photos",
  "Pet product reviews and recommendations",
  "Wildlife conservation and environmental issues",
  "Pet stories and personal experiences",
];
const Blog = () => {
  return (
    <MainLayout>
      <main className="bg-dark">
        <Container fluid="lg">
          <Row xs={1} md={3} className="pt-3">
            <Col md={3}>
              <SidebarLayout colMd={3}>
                <h5 className=" text-warning">Recent Articles</h5>
                {articlesData.map(({ title, linkTo }, index) => (
                  <Link
                    className="d-inline-block w-75 text-truncate text-secondary"
                    to={linkTo}
                    key={index}
                  >
                    {title}
                  </Link>
                ))}
                <hr className="w-100 align-self-center bg-warning m-3 pt-1 d-none d-md-block" />
                <h5 className=" text-warning w-100 flex-grow-1 mt-3">
                  Articles Categories
                </h5>
                {aticleCategories.map((category, index) => (
                  <div className="text-secondary" key={index}>
                    <span>{`${index + 1}.  `}</span>
                    <Link
                      className="text-secondary text-decoration-none py-2 small"
                      to="/blog"
                    >
                      {category}
                    </Link>
                  </div>
                ))}
                <hr className="w-100 align-self-center bg-warning m-3 pt-1 d-none d-md-block" />
              </SidebarLayout>
            </Col>
            <Col md={9} as="section" className="order-first order-md-2">
              <Stack
                direction="vertical"
                gap={3}
                className="align-items-center"
                id="articles"
              >
                {articlesData.map((data, index) => (
                  <ImageVerticalCard
                    imgUrl={data.imgUrl}
                    title={data.title}
                    abstract={data.abstract}
                    linkTo={data.linkTo}
                    key={index}
                  />
                ))}
              </Stack>
              <div className="w-100 order-2 order-md-3">
                <MyPagination pageCount={15} />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </MainLayout>
  );
};

export default Blog;
