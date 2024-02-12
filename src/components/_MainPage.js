import React from "react";
import styled from "styled-components";
import { Header, Hero, Skills, ProjectList, Contact } from "./";

const ContentContainer = styled.div`
  .icon-link {
    transition: color 0.1s linear 0s;
    color: black;
    &:hover,
    &:active {
      color: #373737;
    }
  }
`;

// bad practice, but CRAs don't deserve good practice 👍
const Spacer = styled.div`
  height: 100px;
  /* border: 2px solid yellow; */
`;

export default function MainPage() {
  const links = {
    hero: React.useRef(null),
    projects: React.useRef(null),
    skills: React.useRef(null),
    contact: React.useRef(null),
  };

  return (
    <>
      <Header {...links} />
      <ContentContainer>
        <div ref={links.hero}>
          <Hero />
        </div>

        <div ref={links.projects}>
          <ProjectList />
        </div>

        {/* <Spacer />

        <div ref={links.skills}>
          <Skills />
        </div>

        <Spacer />

        <div ref={links.contact}>
          <Contact />
        </div> */}
      </ContentContainer>
    </>
  );
}
