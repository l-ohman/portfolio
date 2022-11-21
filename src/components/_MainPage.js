import React from "react";
import styled from "styled-components";
import { Hero, Bio, Skills, ProjectList, Contact } from "./";

const maxWidth = 750;
const ContentContainer = styled.div`
  margin: 1.5em;
  max-width: ${maxWidth + "px"};
  @media screen and (min-width: ${maxWidth + 35 + "px"}) {
    margin: 1.5em auto;
  }
  > div {
    margin-bottom: 2em;
  }
`;

export default function MainPage() {
  return(
    <ContentContainer>
      <Hero />
      <Bio />
      <ProjectList />
      <Skills />
      <Contact />
    </ContentContainer>
  )
}
