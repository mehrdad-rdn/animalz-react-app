import { Container, Row, Stack, Col, Accordion, Card } from "react-bootstrap";
import { BsCardText, BsFunnel } from "react-icons/bs";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SidebarLayout from "../layouts/SidebarLayout";
import BreedFinderForm from "../components/BreedFinderFrom";
import SearchForm from "../components/SearchForm";
import ImageVerticalCard from "../components/imageVerticalCard";
import CustomToggle from "../components/CustomToggle";
import BreedCharsCard from "../components/BreedCharsCard";
import { dogBreeds } from "../assets/data";

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
      { label: "Short Lifespan", title: "life length", level: 1 },
      { label: "Average Lifespan", title: "life length", level: 2 },
      { label: "Long Lifespan", title: "life length", level: 3 },
      { label: "Extended Lifespan", title: "life length", level: 4 },
      { label: "Exceptional Lifespan", title: "life length", level: 5 },
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
            src={`${require("../assets/golden retrevir.jpg")}`}
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
            <Col xs={12} sm={4}>
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
            <Col xs={12} sm={8}>
              <Accordion flush>
                <Card>
                  <Card.Header className="p-0">
                    <ImageVerticalCard
                      imgUrl={`${require("../assets/Scottish-Terrier-On-White-02.webp")}`}
                      title="What's a dog breed?"
                      abstract="People have been breeding dogs since prehistoric times. The earliest dog breeders used wolves to create domestic dogs. From the beginning, humans purposefully bred dogs to perform various tasks. Hunting, guarding, and herding are thought to be among the earliest job…"
                      btnText="SEE MORE ..."
                      eventKey="0"
                    />
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p className="my-0 ">
                        For thousands of years, humans bred dogs toward the
                        physical and mental traits best suited for the work
                        expected of them. The sleek Greyhound types bred to
                        chase fleet-footed prey, and the huge mastiff types used
                        as guard dogs and warriors, are two ancient examples of
                        dogs bred for specific jobs. As humans became more
                        sophisticated, so did their dogs. Eventually, there
                        emerged specific breeds of dogs, custom-bred to suit the
                        breeders’ local needs and circumstances. The Greyhound,
                        for instance, was the foundation type for the immense
                        Irish Wolfhound and the dainty Italian Greyhound. All
                        three have a distinct family resemblance, but you’d
                        never mistake one for another. So, then, when is a breed
                        a breed and not just a kind or type of dog? The simplest
                        way to define a breed is to say it always “breeds true.”
                        That is, breeding a purebred Irish Setter to another
                        purebred Irish Setter will always produce dogs instantly
                        recognizable as Irish Setters. Each breed’s ideal
                        physical traits, movement, and temperament are set down
                        in a written document called a “breed standard.” For
                        example, the breed standard sets forth the traits that
                        make a Cocker Spaniel a Cocker Spaniel and not a
                        Springer Spaniel. The AKC standard for each breed
                        originates with a “parent club,” the AKC-recognized
                        national club devoted to a particular breed. Once
                        approved by the AKC, a standard becomes both the
                        breeder’s “blueprint” and the instrument used by dog
                        show judges to evaluate a breeder’s work. There are over
                        340 dog breeds known throughout the world. The American
                        Kennel Club recognizes 200 breeds.
                      </p>
                      <CustomToggle eventKey="0">LESS</CustomToggle>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Row xs={1} md={2} xl={3} className="my-2 g-3">
                {dogBreeds.map((breedChar) => (
                  <BreedCharsCard breedChar={breedChar} />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </MainLayout>
  );
};

export default DogBreeds;
