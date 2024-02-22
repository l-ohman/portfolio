import React from "react";
import styled from "styled-components";
import {
  BookBeasts,
  SolarSandbox,
  UmamiMeats,
  Tusk,
  Playerbase,
} from "./projects";
import FadeIn from "./FadeIn";

const ListHeader = styled.h1`
  font-size: 1.25rem;
  margin: 1rem 0 1rem 12px;
  font-family: "Lexend", Orienta, Arial, sans-serif;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  max-width: min(1000px, 100vw);
  margin: 0 auto;
  min-width: 375px;
  color: black;

  hr {
    min-width: 100%;
    border: 1px solid black;
    margin-bottom: 0.85rem;
  }

  @media screen and (min-width: 650px) {
    margin: 15vh auto 0;
  }
`;

const ProjectListContainer = styled.div``;

export default function ProjectList() {
  return (
    // <FadeIn>
    <ContentContainer>
      <ListHeader>FEATURED PROJECTS</ListHeader>

      <ProjectListContainer>
        <Playerbase />
        <UmamiMeats />
        <BookBeasts />
        <Tusk />
        <SolarSandbox />
      </ProjectListContainer>
    </ContentContainer>
    // </FadeIn>
  );
}
