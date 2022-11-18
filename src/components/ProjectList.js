import React from "react";
import styled from "styled-components";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SingleProject from "./SingleProject";
// a json array of project-objects
import projects from "../data/projects.json";

const ContentContainer = styled.div`
  border: 1px solid blue;
  > h1 {
    text-align: center;
  }
  /* padding: 0.2em 0.5em; */

  #project-list {
    padding: 0;

    @media screen and (min-width: 650px) {
      padding: 1em;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }
  }
`;

export default function Projects() {
  return (
    <ContentContainer>
      <h1>Projects</h1>
      <div id="project-list">
        {projects.map((project, i) => (
          <SingleProject project={project} isFeatured={i===0} key={i} />
        ))}
      </div>
    </ContentContainer>
  );
}
