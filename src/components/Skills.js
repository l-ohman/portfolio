import React from "react";
import styled from "styled-components";
import images from "../images";
import colors from "../colors.json";
import { SectionHeader } from "./SmallProject/SmallProjectGrid";

const SkillsContainer = styled.div`
  padding: 1.2em 1.2em 1.9em;
  .tech-list {
    margin: 0.3em auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    max-width: 715px;
    padding: 0 10px;
  }
  #tech-language-divider {
    width: 690px;
    max-width: 90%;
    margin: 20px auto 16px;
  }

  /* for nicer better formatting in icon flexbox*/
  @media screen and (max-width: 922px) {
    .tech-list {
      max-width: 715px;
    }
    #tech-language-divider {
      width: 680px;
    }
  }

  h1 {
    margin: 0;
    padding: 0.1em 0.2rem 0.3em;
  }
  @media screen and (min-width: 650px) {
    padding: 1.65em 1.2em 2.5em;
    > h1 {
      margin: 0;
      padding: 0.2em 0.25rem 0.45em;
    }
  }

  #languages {
    @media screen and (max-width: 634px) {
      max-width: 450px;
    }
  }
`;

const logoSize = 100;
const containerSize = 132;
const SingleSkill = styled.div`
  width: ${containerSize + "px"};
  height: ${containerSize + "px"};
  border-radius: 1em;
  background: ${colors.lighter};
  margin: 6px;
  padding: 8px 5px 7px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.09);

  .stack-logo {
    width: ${logoSize + "px"};
    height: ${logoSize + "px"};
    margin: 0 ${logoSize * 0.15 + "px"} ${logoSize * 0.09 + "px"};

    object-fit: contain;
    object-position: 50% 0;
    margin-bottom: 0;
  }
  .technologies {
    max-height: ${logoSize * 0.9 + "px"};
    max-width: ${logoSize * 0.9 + "px"};
    object-position: 50% 0;
    padding: ${logoSize * 0.05 + "px"};
  }
  #react-logo {
    margin-left: ${logoSize * 0.168 + "px"};
    padding-top: 0.6rem;
    object-fit: scale-down;
    object-position: 50% 0;
  }
  .language {
    max-height: ${logoSize * 0.93 + "px"};
    max-width: ${logoSize * 0.93 + "px"};
    object-position: 50% 0;
    padding: ${logoSize * 0.05 + "px"};
  }
  .tech-txt {
    text-align: center;
    margin: 0 auto;
  }
`;

export default function Skills() {
  const technologies = [
    "Git",
    "Next.js",
    "PostgreSQL",
    "Node.js",
    "React",
    "Express",
    "Redux",
    "Three.js",
  ];
  const languages = ["Typescript", "Javascript", "Python"];

  return (
    <SkillsContainer>
      <SectionHeader>technical skills</SectionHeader>

      <div className="tech-list">
        {technologies.map((itm) => (
          <SingleSkill key={itm}>
            <img
              src={images.skills[itm]}
              alt={`${itm} Logo`}
              id={itm === "React" ? "react-logo" : ""}
              className="stack-logo technologies"
              title={`${itm} Logo`}
            />
            <p className="tech-txt">{itm}</p>
          </SingleSkill>
        ))}
      </div>

      <hr id="tech-language-divider" />

      <div className="tech-list" id="languages">
        {languages.map((itm) => (
          <SingleSkill key={itm}>
            <img
              src={images.skills[itm]}
              alt={`${itm} Logo`}
              className="stack-logo language"
            />
            <p className="tech-txt">{itm}</p>
          </SingleSkill>
        ))}
      </div>
    </SkillsContainer>
  );
}
