import React from "react";
import styled from "styled-components";
import { Hero, Skills, ProjectList, Contact } from "./";

const maxWidth = 750;
const ContentContainer = styled.div`
  max-width: ${maxWidth + "px"};

  @media screen and (min-width: ${maxWidth + 35 + "px"}) {
    /* margin: 1.5em 0; */
  }
  > div {
    /* margin-bottom: 2em; */
  }
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
