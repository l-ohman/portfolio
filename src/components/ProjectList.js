import React from "react";
import styled from "styled-components";
import {
  BookBeasts,
  SolarSandbox,
  UmamiMeats,
  Tusk,
  Playerbase,
} from "./projects";
import colors from "../colors.json";

const ContentContainer = styled.div`
  padding: 1.1em 1em 0.6em;
  background: ${colors.backgroundSecondary};
  color: black;

  @media screen and (min-width: 650px) {
    padding: 0.6em 1em 0.1em;
    #project-list {
      padding: 0.8em 1em 1em;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
    }
  }
`;

const ProjectContainer = styled.div`
  background: ${colors.light};
  color: black;
  width: 100%;
  max-width: 1000px;

  margin: 0.2em auto 2em;
  padding: 0.2em 0.9em;
  border-radius: 0.5em;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.09);

  @media screen and (min-width: 650px) {
    margin: 0.3em auto 0.25em;
  }

  hr {
    width: 97%;
    margin: 0.3em auto;
  }

  @media screen and (min-width: 650px) {
    padding: 0.8em 1.6em 0.2em;
    > * {
      margin-left: 0.2em;
    }
  }
`;

const ListHeader = styled.h1`
  text-align: right;
  font-size: 2.5rem;
  margin: 1rem auto;
`;

const ListHeaderDivider = styled.hr`
  margin-top: -1.41rem;
`;

export default function ProjectList() {
  return (
    <ContentContainer>
      <ListHeader>FEATURED PROJECTS</ListHeader>
      <ListHeaderDivider />

      <div id="project-list">
        <ProjectContainer>
          <Playerbase />
        </ProjectContainer>

        <ProjectContainer>
          <UmamiMeats />
        </ProjectContainer>

        <ProjectContainer>
          <BookBeasts />
        </ProjectContainer>

        <ProjectContainer>
          <Tusk />
        </ProjectContainer>

        <ProjectContainer>
          <SolarSandbox />
        </ProjectContainer>
      </div>
    </ContentContainer>
  );
}
