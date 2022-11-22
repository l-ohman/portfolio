import React from "react";
import styled from "styled-components";
import { Hero, Bio, Skills, ProjectList, Contact } from "./";

const maxWidth = 750;
const ContentContainer = styled.div`
  position: relative;
  margin: 1.5em;
  max-width: ${maxWidth + "px"};
  padding-top: 8.4em; /* this makes room for 'Hero' component (might increase num) */

  @media screen and (min-width: ${maxWidth + 35 + "px"}) {
    margin: 1.5em auto;
  }
  > div {
    margin-bottom: 2em;
  }
`;

export default function MainPage() {
  return (
    <>
      {/* should import header here to target containers with scroll */}
      <Hero />
      <ContentContainer>
        <Bio />
        <ProjectList />
        <Skills />
        <Contact />
      </ContentContainer>
    </>
  );
}
