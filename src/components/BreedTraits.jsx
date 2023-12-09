import { Tabs, Tab, Container, Row, Stack } from "react-bootstrap";
import BreedTabsItem from "../components/BreedTabsItem";
import { useState } from "react";
import { charTabsData } from "../assets/data";
const BreedTraits = ({ petKind, breedChar }) => {
  //declare tabKey state to manage breed traits tabs
  const [tabKey, setTabKey] = useState(charTabsData[0].tabName);

  return (
    <section id="breed-traits" className="bg-dark py-5">
      <h1 className="text-secondary px-2 px-lg-5">
        Breed Traits & Characteristics
      </h1>
      <Tabs
        id="breed-traits-tab"
        activeKey={tabKey}
        onSelect={(k) => setTabKey(k)}
        className=" px-2 px-lg-5  mb-3"
      >
        {charTabsData.map((item) => {
          return (
            <Tab
              eventKey={item.tabName}
              title={item.tabName}
              key={item.tabName}
            >
              <Container fluid>
                <Row xs={1} md={2}>
                  {item.tabChars.map(
                    (tabchar, index) =>
                      tabchar.petKind === petKind &&
                      breedChar[tabchar.scoreFrom] !== undefined && (
                        <BreedTabsItem
                          title={tabchar.title}
                          description={tabchar.description}
                          score={breedChar[tabchar.scoreFrom]}
                          minTitle={tabchar.minTitle}
                          maxTitle={tabchar.maxTitle}
                          accordion={true}
                          key={index}
                        />
                      )
                  )}
                </Row>
              </Container>
            </Tab>
          );
        })}
        <Tab eventKey="all" title="ALL TRAITS" key="all">
          <Container fluid>
            <Stack direction="vertical" gap={3} className="px-2 px-lg-5">
              {charTabsData.map((item) =>
                item.tabChars.map(
                  (char, index) =>
                    char.petKind === petKind &&
                    breedChar[char.scoreFrom] !== undefined && (
                      <BreedTabsItem
                        title={char.title}
                        description={char.description}
                        score={breedChar[char.scoreFrom]}
                        minTitle={char.minTitle}
                        maxTitle={char.maxTitle}
                        accordion={false}
                        key={index}
                      />
                    )
                )
              )}
            </Stack>
          </Container>
        </Tab>
      </Tabs>
    </section>
  );
};

export default BreedTraits;
