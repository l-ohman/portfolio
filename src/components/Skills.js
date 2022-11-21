import React from "react";
import styled from "styled-components";
import { technologies, languages } from "../data/skills.json";
import images from "../images";

const SkillsContainer = styled.div`
  border: solid 1px blue;
  > h1 {
    text-align: center;
  }
  hr {
    margin: 0.4em auto 0.65em;
    width: 25em;
  }
  .tech-list {
    margin: 0.3em auto 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
  }
`;

const logoSize = 100;
const containerSize = 132;
const SingleSkill = styled.div`
  border: 1px solid green;
  width: ${containerSize + "px"};
  height: ${containerSize + "px"};

  margin: 3px;
  padding: 8px 5px 7px;

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
  .language {
    max-height: ${logoSize * 0.93 + "px"};
    max-width: ${logoSize * 0.93 + "px"};
    object-position: 50% 0;
    padding: ${logoSize * 0.05 + "px"};
  }
  .language-adjusted {
    max-height: ${logoSize * 0.93 + "px"};
    width: ${logoSize * 0.93 + "px"};
    margin: 0 0 0 13px;
    
    /* max-width: 122px; */
    object-position: 50% 0;
    padding: ${logoSize * 0.015 + "px"} 0;
  }
  .tech-txt {
    text-align: center;
    margin: 0 auto;
  }
`;

export default function Skills() {
  return (
    <SkillsContainer>
      <h1>technical skills</h1>
      <hr />

      <div>
        <div>
          <div className="tech-list">
            {technologies.map((itm, i) => (
              <SingleSkill key={i}>
                <img
                  src={images.skills[itm]}
                  alt={`${itm} Logo`}
                  className="stack-logo technologies"
                />
                <p className="tech-txt">{itm}</p>
              </SingleSkill>
            ))}
          {/* </div>

          <div className="tech-list"> */}
            {languages.map((itm, i) => (
              <SingleSkill key={i}>
                {itm === "HTML" || itm === "CSS" ? (
                  <img
                    key={i}
                    src={images.skills[itm]}
                    alt={`${itm} Logo`}
                    className="stack-logo language-adjusted"
                  />
                ) : (
                  <img
                    key={i}
                    src={images.skills[itm]}
                    alt={`${itm} Logo`}
                    className="stack-logo language"
                  />
                )}
                <p className="tech-txt">{itm}</p>
              </SingleSkill>
            ))}
          </div>
        </div>
      </div>
    </SkillsContainer>
  );
}
