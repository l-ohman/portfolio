import React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
import { Bio, Skills, ProjectList, Contact } from "./";

const maxWidth = 650;
const ContentContainer = styled.div`
  margin: 1.5em;
  max-width: ${maxWidth + "px"};
  @media screen and (min-width: ${maxWidth + 35 + "px"}) {
    margin: 1.5em auto;
  }
  /* @media screen and (max-width: 310px) {
    min-width: 310px;
    overflow: scroll;
  } */
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
      <ProjectList />
      <Contact />
    </ContentContainer>
  )
}
