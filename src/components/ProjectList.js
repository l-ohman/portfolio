import React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";

// a json array of project-objects
import projects from "../data/projects.json";
import SingleProject from "./SingleProject";

const ContentContainer = styled.div`
  border: 1px solid blue;
  > h1 {
    /* text-align: center; */
    /* margin-bottom: 0.25em; */
  }

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
