import React from "react";
import styled from "styled-components";
import SingleProject from "./SingleProject";
import projects from "../data/projects.json";
import colors from "../colors.json";

const ContentContainer = styled.div`
  padding: 1.1em 1em 0.6em;
  background: ${colors.backgroundSecondary};
  color: black;

  h1 {
    font-size: 260%;
    text-align: center;
    margin-bottom: 0.3em;
  }
  @media screen and (min-width: 650px) {
    padding: 0.6em 1em 0.1em;
    > h1 {
      font-size: 285%;
      margin: 0;
      padding: 0.4em 0.7em 0.2em;
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
          <SingleProject project={project} key={i} />
        ))}
      </div>
    </ContentContainer>
  );
}
