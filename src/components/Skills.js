import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SkillsContainer = styled.div`
  border: solid 1px purple;
`;

const SingleSkill = styled.div`
  border: solid 1px red;
`;

export default function Skills() {
  const technicalSkills = useSelector((state) => state.skills.technical);
  const learningSkills = useSelector((state) => state.skills.learning);
  console.log(technicalSkills);
  console.log(learningSkills);

  return (
    <SkillsContainer>
      <h1>Skills</h1>

      <div>
        <SingleSkill>
          <h2>Fullstack Development</h2>
          <ul>
            {technicalSkills.fullstack.map((itm, i) => (
              <li key={i}>{itm}</li>
            ))}
          </ul>
        </SingleSkill>

        <SingleSkill>
          <h2>Technologies</h2>
          <ul>
            {technicalSkills.technologies.map((itm, i) => (
              <li key={i}>{itm}</li>
            ))}
          </ul>
        </SingleSkill>

        <SingleSkill>
          <h2>Maintainability</h2>
          <ul>
            {technicalSkills.test.map((itm, i) => (
              <li key={i}>{itm}</li>
            ))}
          </ul>
        </SingleSkill>
      </div>
    </SkillsContainer>
  );
}
