import React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
import { Bio, Skills, Projects, Contact } from "./";

const maxWidth = 650;
const ContentContainer = styled.div`
  margin: 1.5em;
  max-width: ${maxWidth + "px"};
  @media screen and (min-width: ${maxWidth + 35 + "px"}) {
    margin: 1.5em auto;
  }
  > div {
    /* background: aqua; */
    margin-bottom: 2em;
  }
`;

export default function MainPage() {
  return(
    <ContentContainer>
      <Bio />
      <Skills />
      <Projects />
      <Contact />
    </ContentContainer>
  )
}
