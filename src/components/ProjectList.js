import React from "react";
import styled from "styled-components";
import {
  BookBeasts,
  SolarSandbox,
  UmamiMeats,
  Tusk,
  Playerbase,
} from "./projects";

const ListHeader = styled.h1`
  font-size: 1.1rem;
  margin: 1rem 0 1rem 12px;
  font-family: "Lexend", Orienta, Arial, sans-serif;
  font-weight: 500;
`;

const ContentContainer = styled.div`
  max-width: 100vw;
  min-width: 375px;
  color: black;

  /* all hrs in projects */
  hr {
    min-width: 100%;
    border: 1px solid black;
    margin-bottom: 0.85rem;
  }

  @media screen and (min-width: 650px) {
    #project-list {
      padding: 0.8em 1em 1em;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
    }
  }
`;

export default function ProjectList() {
  return (
    <ContentContainer>
      <ListHeader>FEATURED PROJECTS</ListHeader>

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
