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
    margin: 0.3em auto 1em;
    padding: 0;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row wrap;

    .tech-logo {
      width: ${logoSize + "px"};
      height: ${logoSize + "px"};
      /* max-height: ${logoSize + "px"}; */

      object-fit: contain;
      object-position: 50% 0;
    }

    &#technologies {
      .tech-logo {
        max-height: ${logoSize * 0.9 + "px"};
        max-width: ${logoSize * 0.9 + "px"};
        object-position: 50% 0;
        padding: ${logoSize * 0.05 + "px"};
      }
    }

    &#languages {
      .tech-logo {
        object-fit: cover;
      }
      .adjusted-logo {
        max-height: ${logoSize * 0.9 + "px"};
        max-width: ${logoSize * 0.9 + "px"};
        object-position: 50% 0;
        padding: ${logoSize * 0.05 + "px"};
      }
    }
  }
`;

export default function Skills() {
  return (
    <SkillsContainer>
      <h1>Skills</h1>

      <div>
        <div>
          {/* <h3>Technologies</h3> */}
          <ul className="tech-list" id="technologies">
            {technologies.map((itm, i) => (
              <>
                <img
                  src={images.skills[itm]}
                  alt={`${itm} Logo`}
                  className="tech-logo"
                />
              </>
            ))}
          </ul>
        </div>

        <div>
          {/* <h3>Languages</h3> */}
          <ul className="tech-list" id="languages">
            {languages.map((itm, i) => (
              <>
                {/* have to do specific styling for html/css due to 'off' proportions */}
                {itm === "HTML" || itm === "CSS" ? (
                  <img
                    key={i}
                    src={images.skills[itm]}
                    alt={`${itm} Logo`}
                    className="tech-logo"
                  />
                ) : (
                  <img
                    key={i}
                    src={images.skills[itm]}
                    alt={`${itm} Logo`}
                    className="tech-logo adjusted-logo"
                  />
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </SkillsContainer>
  );
}
