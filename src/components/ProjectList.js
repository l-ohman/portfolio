import React from "react";
import styled from "styled-components";
import SingleProject from "./SingleProject";
import projects from "../data/projects.json";
import colors from "../colors.json";

const ContentContainer = styled.div`
  background: ${colors.secondary};
  border-radius: 1.5em;
  
  @media screen and (min-width: 650px) {
    > h1 {
      margin: 0;
      padding: 0.5em 0.7em 0;
    }
    #project-list {
      padding: 0.8em 1em 1em;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }
  }
`;

export default function ProjectList() {
  return (
    <ContentContainer>
      <h1>recent work</h1>
      <div id="project-list">
        {projects.map((project, i) => (
          <SingleProject project={project} id={i + 1} key={i} />
        ))}
      </div>
    </ContentContainer>
  );
}
