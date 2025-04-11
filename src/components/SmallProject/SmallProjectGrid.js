import React from "react";
import styled from "styled-components";
import SmallProject from "./SmallProject";
import colors from "../../data/colors.json";
import projects from "../../data/projects.json";

const ContentContainer = styled.div`
  background: ${colors.backgroundSecondary};
  padding: 64px 12px;
  width: 100%;
`;

const ProjectsContainer = styled.div`
  /* border: 1px solid yellow; */
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionHeader = styled.h1`
  text-align: center;
  font-size: 2.9rem;
  margin: 0;
  padding: 0.1em 0.2rem 0.55em;

  @media screen and (min-width: 650px) {
    font-size: 3.5rem;
    margin: 0;
    padding: 0 0 3rem;
  }
`;

// todo: support for icons in title
// todo?: note which project were for UT austin?
export default function SmallProjectsGrid() {
  return (
    <ContentContainer>
      <SectionHeader>recent work</SectionHeader>
      <ProjectsContainer>
        {projects.map((project) => (
          <SmallProject {...project} />
        ))}
      </ProjectsContainer>
    </ContentContainer>
  );
}
