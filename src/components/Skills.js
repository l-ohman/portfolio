import React from "react";
import styled from "styled-components";
import { technical, /*learning*/ } from "../data/skills.json";
// technical contains: fullstack, technologies, test

const SkillsContainer = styled.div`
  border: solid 1px blue;
  > h1 {
    text-align: center;
    margin-bottom: 0.5em;
  }

  #skills-container {
    .single-skill {
      border: solid 1px red;
    }

    @media screen and (min-width: 650px) {
      display: flex;
      justify-content: space-between;

      .single-skill {
        width: 32%;
        ul {
          list-style: square;
          padding-left: 1.5em;
        }

        h3 {
          text-align: center;
          height: 2.6em;
          border: 1px solid red;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;

export default function Skills() {
  return (
    <SkillsContainer>
      <h1>Skills</h1>

      <div id="skills-container">
        <div className="single-skill">
          <h3>Technologies</h3>
          <ul>
            {technical.technologies.map((itm, i) => (
              <li key={i}>{itm}</li>
            ))}
          </ul>
        </div>

        <div className="single-skill">
          <h3>Fullstack Development</h3>
          <ul>
            {technical.fullstack.map((itm, i) => (
              <li key={i}>{itm}</li>
            ))}
          </ul>
        </div>

        <div className="single-skill">
          <h3>Maintainability</h3>
          <ul>
            {technical.test.map((itm, i) => (
              <li key={i}>{itm}</li>
            ))}
          </ul>
        </div>
      </div>
    </SkillsContainer>
  );
}
