import React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
import { Bio, Skills, Projects, Contact } from "./";

const ContentContainer = styled.div`
  margin: 1.5em;
  max-width: 650px;
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
