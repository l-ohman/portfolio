import React from "react";
import styled from "styled-components";
import { Header, Hero, Skills, ProjectList, Contact } from "./";

const ContentContainer = styled.div`
  width: 100%;
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

        <div ref={links.skills}>
          <Skills />
        </div>

        <div ref={links.contact}>
          <Contact />
        </div>
      </ContentContainer>
    </>
  );
}
