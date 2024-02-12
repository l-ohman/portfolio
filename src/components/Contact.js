import React from "react";
import styled from "styled-components";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMail, IoDocumentTextSharp } from "react-icons/io5";
import FadeIn from "./FadeIn";

const sidePadding = 16;
const ContactContainer = styled.div`
  max-width: 100vw;
  min-width: ${375 - sidePadding * 2}px;
  padding: 10vh ${sidePadding}px 0;
  background: rgb(36, 32, 129);
  * {
    color: white;
    border-color: white;
  }

  > div {
    max-width: 850px;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    @media screen and (min-width: 650px) {
      height: 92vh;
      margin: 0 auto;
    }
  }
`;

const HeaderText = styled.h1`
  font-size: 2rem;
  @media screen and (min-width: 600px) {
    font-size: min(3.5vw, 55px);
    text-align: center;
    margin-top: 8vh;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.15rem;
  padding-bottom: 7vh;
  @media screen and (min-width: 600px) {
    font-size: min(1.5vw, 24px);
    text-align: center;
  }
`;

const BottomLinks = styled.div`
  max-width: ${375 - sidePadding * 2}px;
  margin: 0 auto 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 10px 20px 0;
    text-align: center;
    font-size: 0.9rem;
    svg {
      display: block;
      margin: 0 auto 5px;
    }
  }

  @media screen and (min-width: 500px) {
    width: 100%;
    max-width: 450px;
    justify-content: space-between;
  }
  @media screen and (min-width: 600px) {
    a {
      font-size: 1rem;
    }
  }
`;

const iconSize = 45;
export default function Contact() {
  return (
    <ContactContainer>
      <div>
        <FadeIn>
          <HeaderText>Let's get in touch</HeaderText>
        </FadeIn>

        <FadeIn>
          <DescriptionText>
            I am currently looking for full-time or part-time employment, and I
            am open to select freelance opportunities.{" "}
            <i>(Also, I am open to relocation!)</i> Feel free to email me at{" "}
            <b>
              <a href="mailto:jakelohman7@gmail.com">jakelohman7@gmail.com</a>
            </b>{" "}
            if you think I'd be a good fit for your team or project.
          </DescriptionText>
        </FadeIn>

        <BottomLinks>
          <a
            href="mailto:jakelohman7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <IoMail size={iconSize} className="icon-link-inverted" />
            <p>Email</p>
          </a>

          <a
            href="https://www.linkedin.com/in/jake-lohman/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={iconSize} className="icon-link-inverted" />
            <p>LinkedIn</p>
          </a>

          <a
            href="https://github.com/l-ohman"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <FaGithubSquare size={iconSize} className="icon-link-inverted" />
            <p>Github</p>
          </a>

          <a
            href="https://drive.google.com/file/d/1F6mGYq4p8Sav0lKuy63OLPQsX7_gbisU/view"
            target="_blank"
            rel="noopener noreferrer"
            title="Resume"
          >
            <IoDocumentTextSharp
              size={iconSize}
              className="icon-link-inverted"
            />
            <p>Resume</p>
          </a>
        </BottomLinks>
      </div>
    </ContactContainer>
  );
}
