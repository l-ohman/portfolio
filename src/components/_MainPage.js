import React from "react";
import styled from "styled-components";
import { Header, Hero, ProjectList, Contact } from "./";

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

        <div ref={links.contact}>
          <Contact />
        </div>
      </ContentContainer>
    </>
  );
}
