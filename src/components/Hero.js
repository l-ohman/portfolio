import React from "react";
import styled from "styled-components";
import FadeIn from "./FadeIn";

const HeroContainer = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.originalBlue};
  color: white;

  @media screen and (min-width: 650px) {
    padding-top: calc(3.5em + 50px);
    margin-bottom: min(75px, 20vh);
    h2 {
      font-size: 2.1rem;
      margin-bottom: 2px;
    }
  }
`;

const HeroMainText = styled.h1`
  font-size: max(2.5rem, 10vw);
  letter-spacing: 2px;
  margin: 16vh auto 2vh;
  text-align: center;

  @media screen and (min-width: 750px) {
    font-size: min(max(5rem, 5vw), 80px);
    letter-spacing: 5px;
    margin: 7vh auto 1vh;
  }
`;

const BioWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Bio = styled.div`
  * {
    display: block;
    margin: 10vh auto;
    @media screen and (min-width: 650px) {
      margin: 8vh auto;
    }
  }
  p {
    padding: 0 2rem;
  }
`;

const BioMain = styled.p`
  font-size: 1.5rem;
  @media screen and (max-width: 450px) {
    font-size: 1.25rem;
  }
  @media screen and (min-width: 750px) {
    font-size: 1.75rem;
  }
`;

const BioAlt = styled.p`
  font-size: 1.05rem;
  @media screen and (min-width: 750px) {
    font-size: 1.25rem;
  }
`;

export default function Hero() {
  return (
    <FadeIn>
      <HeroContainer>
        <HeroMainText>Hi, I'm Jake.</HeroMainText>

        <BioWrapper>
          <Bio>
            <BioMain>
              I am a fullstack web developer with a focus on building intuitive,
              accessible user experiences and writing clean, maintainable code.
            </BioMain>

            {/* todo: some "story" element should go here */}
            {/* <BioAlt>
              I used to be automotive mechanic--and while the diagnostics and
              problem solving were fascinating to me, I couldn't help but feel
              there was another field that would fulfill me more in this regard.
              As soon as I started learning to code, I knew that software
              engineering was precisely the thing I was looking for.
            </BioAlt> */}

            <BioAlt>
              Below are my recent projects and my contact information; feel free
              to reach out if you are in need of a developer, or if you have any
              questions about my projects.
            </BioAlt>
          </Bio>
        </BioWrapper>
      </HeroContainer>
    </FadeIn>
  );
}
