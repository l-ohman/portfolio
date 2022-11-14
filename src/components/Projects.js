import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const AllProjects = styled.div`
  border: 1px solid blue;
  padding: 0.2em 0.5em;
`;

const SingleProject = styled.div`
  border: 1px solid red;
  padding: 0.2em 0.2em;
  margin: 0.2em 0;
`;

export default function Projects() {
  const projects = useSelector((state) => state.projects);
  const projectList = Object.keys(projects);

  return (
    <AllProjects>
      {projectList.map((itm, i) => (
        <SingleProject key={i}>
          <h2>{projects[itm].title}</h2>
        </SingleProject>
      ))}
    </AllProjects>
  );
}
