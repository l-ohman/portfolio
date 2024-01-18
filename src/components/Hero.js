import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  padding: 3.5em 1em 2.45em;
  color: black;

  @media screen and (min-width: 650px) {
    padding-top: calc(3.5em + 50px);
    padding-bottom: calc(3.1em + 55px);
    h2 {
      font-size: 2.1rem;
      margin-bottom: 2px;
    }
  }
`;

const HeroMainText = styled.h1`
  font-size: max(2.5rem, 10vw);
  letter-spacing: 2px;
  width: min-content;
  margin: 0 auto 50px;
  text-align: center;

  @media screen and (min-width: 750px) {
    font-size: min(max(5rem, 5vw), 90px);
    letter-spacing: 5px;
  }
`;

const BioWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Bio = styled.div`
  width: 72%;
  margin-left: auto;
  p {
    margin: 30px auto;
  }
`;

const BioMain = styled.p`
  font-size: 1.5rem;
  @media screen and (max-width: 450px) {
    font-size: 1.25rem;
  }
`;

const BioAlt = styled.p`
  font-size: 1rem;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <HeroMainText>FULLSTACK DEVELOPER</HeroMainText>

      <BioWrapper>
        <Bio>
          <BioMain>
            Hi, I’m Jake - a fullstack web developer with a strong focus on
            building intuitive, accessible user experiences and writing clean,
            maintainable code.
          </BioMain>

          <BioAlt>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </BioAlt>

          <BioAlt>
            Below are my recent projects and my contact information; excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </BioAlt>
        </Bio>
      </BioWrapper>
    </HeroContainer>
  );
}
