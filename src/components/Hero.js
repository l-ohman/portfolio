import React from "react";
import styled from "styled-components";
import FadeIn from "./FadeIn";

const HeroContainer = styled.div`
  height: 100vh;
  * {
    color: white;
  }

  @media screen and (min-width: 650px) {
    padding-top: calc(3.5em + 50px);
    padding-bottom: min(100px, 25vh);
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
  p {
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
              {blah blah blah}.
              As soon as I started learning to code, I knew that software
              engineering was precisely the thing I was looking for.
            </BioAlt> */}

            <BioAlt>
              Check out some of my recent projects below, and feel free to reach
              out to me at{" "}
              <a href="mailto:jakelohman7@gmail.com">jakelohman7@gmail.com</a>{" "}
              if you are in need of a developer. (Or if you have any questions
              about my projects!)
            </BioAlt>
          </Bio>
        </BioWrapper>
      </HeroContainer>
    </FadeIn>
  );
}
