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
  max-width: 100vw;
  min-width: 375px;

  background: ${colors.backgroundSecondary};
  color: black;

  @media screen and (min-width: 650px) {
    #project-list {
      padding: 0.8em 1em 1em;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
    }
  }
`;

const ListHeader = styled.h1`
  font-size: 1rem;
  margin: 1rem auto;
`;

const ListHeaderDivider = styled.hr`
  margin-top: -1.2rem;
  border-width: 1px;
`;

export default function ProjectList() {
  return (
    <ContentContainer>
      <ListHeader>FEATURED PROJECTS</ListHeader>
      <ListHeaderDivider />

      <div id="project-list">
        <Playerbase />
        <UmamiMeats />
        <BookBeasts />
        <Tusk />
        <SolarSandbox />
      </div>
    </ContentContainer>
  );
}
