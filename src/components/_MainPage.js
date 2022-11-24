import React from "react";
import styled from "styled-components";
import { Hero, Skills, ProjectList, Contact } from "./";

// 260/300
const ContentContainer = styled.div`
  width: 100%;
  /* max-width: ${750 + "px"};
  @media screen and (min-width: ${750 + 35 + "px"}) {
    margin: 1.5em 0;
  }
  > div {
    margin-bottom: 2em;
  } */
`;

export default function MainPage() {
  return (
    <>
      {/* should import header here to target containers with scroll */}
      <ContentContainer>
        <Hero />
        <ProjectList />
        <Skills />
        <Contact />
      </ContentContainer>
    </>
  );
}
