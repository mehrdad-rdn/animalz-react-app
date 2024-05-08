import { Tabs, Tab, Container, Row, Stack } from "react-bootstrap";
import BreedTabsItem from "../components/BreedTabsItem";
import { useState } from "react";
import { charTabsData } from "../assets/data";
import propTypes from "prop-types";
import { useTranslation } from "react-i18next";

const BreedTraits = ({ petKind, breedChar }) => {
  //extract t function from useTranslation hook
  const { t } = useTranslation(["breedTraits"]);
  //declare tabKey state to manage breed traits tabs
  const [tabKey, setTabKey] = useState(charTabsData[0].tabName);

  return (
    <section id="breed-traits" className="bg-dark py-5">
      <h1 className="text-secondary px-2 px-lg-5">{t("header_text")}</h1>
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
              title={t(`${item.tabName}`)}
              key={item.tabName}
            >
              <Container fluid>
                <Row xs={1} md={2}>
                  {item.tabChars.map(
                    (tabchar, index) =>
                      tabchar.petKind === petKind &&
                      breedChar[tabchar.scoreFrom] !== undefined && (
                        <BreedTabsItem
                          title={t(`${tabchar.title}`)}
                          description={t(
                            `${tabchar.petKind}_${tabchar.scoreFrom}`
                          )}
                          score={breedChar[tabchar.scoreFrom]}
                          minTitle={t(
                            `${tabchar.petKind}_${tabchar.scoreFrom}_minTitle`
                          )}
                          maxTitle={t(
                            `${tabchar.petKind}_${tabchar.scoreFrom}_maxTitle`
                          )}
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
        <Tab eventKey="all" title={t("all")} key="all">
          <Container fluid>
            <Stack direction="vertical" gap={3} className="px-2 px-lg-5">
              {charTabsData.map((item) =>
                item.tabChars.map(
                  (char, index) =>
                    char.petKind === petKind &&
                    breedChar[char.scoreFrom] !== undefined && (
                      <BreedTabsItem
                        title={t(`${char.title}`)}
                        description={t(`${char.petKind}_${char.scoreFrom}`)}
                        score={breedChar[char.scoreFrom]}
                        // minTitle={char.minTitle}
                        // maxTitle={char.maxTitle}
                        minTitle={t(
                          `${char.petKind}_${char.scoreFrom}_minTitle`
                        )}
                        maxTitle={t(
                          `${char.petKind}_${char.scoreFrom}_maxTitle`
                        )}
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

BreedTraits.propType = {
  petKind: propTypes.string.isRequired,
  breedChar: propTypes.object.isRequired,
};

export default BreedTraits;
