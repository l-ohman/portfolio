import React from "react";
import styled from "styled-components";
import colors from "../colors.json";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMail, IoDocumentTextSharp } from "react-icons/io5";

const HeroContainer = styled.div`
  /* box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.125); */
  /* background: ${colors.lighter}; */
  /* padding: 18px; */

  border-radius: 12px;
  color: black;
  max-width: min(37.5rem, 675px);
  padding: 0 12px;
  margin: 7rem auto 4.5rem;
  h1 {
    font-size: 3rem;
    margin-bottom: 0.95rem;
  }
  p {
    font-size: 1.25rem;
    margin: 0.85rem 0 0;
  }
`;

const LogoLinks = styled.div`
  width: 85%;
  max-width: 250px;
  margin: 1rem 0 0;
  padding: 0.45em 0 0.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const iconSize = 38;

export default function Hero() {
  return (
    <HeroContainer>
      <h1>hi, i'm jake.</h1>
      <p>I am a fullstack engineer currently based in Austin, TX.</p>
      <p>Take a look below for my recent projects and contact information.</p>

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
