import React from "react";
import styled from "styled-components";
import colors from "../colors.json";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMail, IoDocumentTextSharp } from "react-icons/io5";

const HeroContainer = styled.div`

  /* background: ${colors.lighter}; */
  /* padding: 18px; */

  border-radius: 12px;
  color: black;

  /* max-width: min(37.5rem, 675px); */
  max-width: 1200px;

  padding: 0 12px;
  margin: 7rem auto 4.5rem;
  h1 {
    font-size: 4.25rem;
    margin-bottom: 0.95rem;
    padding-left: 18px;
    /* text-align: center; */
    @media screen and (max-width: 600px) {
      font-size: 3.75rem;
      margin-bottom: 0.25rem;
    }
  }
`;

const TextContainer = styled.div`
  /* background: ${colors.lighter}; */
  /* box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); */


  padding: 18px;
  border-radius: 12px;
  p {
    font-size: 1.15rem;
    padding: 0.6rem 0;
    line-height: 1.6rem;
  }
  z-index: 1;
`;

const logoP = "12px";
const LogoLinks = styled.div`
  width: 85%;
  max-width: 325px;
  padding: 0.45em 0 0.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background: ${colors.light}; */
  /* box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.125); */


  padding: calc(12px + ${logoP}) calc(${logoP} * 1.5) ${logoP};
  margin: -12px 0;
  z-index: 0;
  border-radius: 0 0 12px 12px;
`;
const iconSize = 42;

export default function Hero() {
  return (
    <HeroContainer>
      <h1>hi, i'm jake.</h1>
      <TextContainer>
        <p>I'm a fullstack engineer based in Austin, TX.</p>

        <p>
          Currently I am looking for full-time roles and am open to select
          freelance opportunities.
        </p>

        <p>Take a look below for my recent projects and contact information.</p>
      </TextContainer>

      <LogoLinks>
        <a
          href="mailto:jakelohman7@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <IoMail size={iconSize} className="icon-link" />
        </a>

        <a
          href="https://www.linkedin.com/in/jake-lohman/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin size={iconSize} className="icon-link" />
        </a>

        <a
          href="https://github.com/l-ohman"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <FaGithubSquare size={iconSize} className="icon-link" />
        </a>
        <a
          href="https://drive.google.com/file/d/1F6mGYq4p8Sav0lKuy63OLPQsX7_gbisU/view"
          target="_blank"
          rel="noopener noreferrer"
          title="Resume"
        >
          <IoDocumentTextSharp size={iconSize} className="icon-link" />
        </a>
      </LogoLinks>
    </HeroContainer>
  );
}
