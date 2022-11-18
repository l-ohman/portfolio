import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// a json array of project-objects
import projects from "../../data/projects.json";
import SingleProject from "./SingleProject";
import SingleProjectExpanded from "./SingleProjectExpanded";

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
  const selectedProjectId = useSelector((state) => state.selectedProject);

  return (
    <ContentContainer>
      <h1>Projects</h1>
      {selectedProjectId === 0 ? (
        <div id="project-list">
          {projects.map((project, i) => (
            <SingleProject project={project} id={i + 1} key={i} />
          ))}
        </div>
      ) : (
        <SingleProjectExpanded
          project={projects[selectedProjectId - 1]}
          id={selectedProjectId}
        />
      )}
    </ContentContainer>
  );
}
