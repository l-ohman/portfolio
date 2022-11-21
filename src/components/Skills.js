import React from "react";
import styled from "styled-components";
import { technologies, languages } from "../data/skills.json";
import images from "../images";

const logoSize = 100;
const SkillsContainer = styled.div`
  border: solid 1px blue;
  > h1 {
    text-align: center;
    margin-bottom: 0.5em;
  }
  .tech-list {
    margin: 0.3em auto 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;

    .stack-logo {
      width: ${logoSize + "px"};
      height: ${logoSize + "px"};
      margin: 0 ${logoSize * 0.15 + "px"} ${logoSize * 0.09 + "px"};

      object-fit: contain;
      object-position: 50% 0;
    }
    .technologies {
      max-height: ${logoSize * 0.9 + "px"};
      max-width: ${logoSize * 0.9 + "px"};
      object-position: 50% 0;
      padding: ${logoSize * 0.05 + "px"};
    }
    .language-adjusted {
      max-height: ${logoSize * 0.93 + "px"};
      max-width: ${logoSize * 0.93 + "px"};
      object-position: 50% 0;
      padding: ${logoSize * 0.05 + "px"};
    }
  }
`;

export default function Skills() {
  return (
    <SkillsContainer>
      <h1>Skills</h1>

      <div>
        <div>
          <div className="tech-list">
            {technologies.map((itm, i) => (
              <img
                key={i}
                src={images.skills[itm]}
                alt={`${itm} Logo`}
                className="stack-logo technologies"
              />
            ))}
          </div>

          <div className="tech-list">
            {languages.map((itm, i) =>
              itm === "HTML" || itm === "CSS" ? (
                <img
                  key={i}
                  src={images.skills[itm]}
                  alt={`${itm} Logo`}
                  className="stack-logo"
                />
              ) : (
                <img
                  key={i}
                  src={images.skills[itm]}
                  alt={`${itm} Logo`}
                  className="stack-logo language-adjusted"
                />
              )
            )}
          </div>
        </div>
      </div>
    </SkillsContainer>
  );
}
