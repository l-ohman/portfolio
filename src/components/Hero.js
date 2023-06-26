import React from "react";
import styled from "styled-components";
import colors from "../colors.json";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMail, IoDocumentTextSharp } from "react-icons/io5";

const HeroContainer = styled.div`
  padding: 3.5em 1em 2.45em;
  color: black;
  @media screen and (min-width: 650px) {
    padding-bottom: 3.1em;
  }

  #hero-header {
    margin: 0 auto;
    padding: 0 0.5rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
    h1 {
      width: fit-content;
      text-align: center;
      font-size: 260%;
      margin: 0 auto 0.5rem;
    }

    @media screen and (min-width: 650px) {
      h1 {
        font-size: 300%;
        margin-bottom: 0;
      }
    }
  }

  #hero-main {
    width: 100%;
    #bio {
      width: 100%;
      margin: 0 auto;
      background: ${colors.lighter};
      color: black;

      text-align: justify;
      font-size: 120%;
      border-radius: 0.5em;
      padding: 1em 1.2em;
      box-shadow: 1px 1px 9px rgba(0, 0, 0, 0.12);
    }

    @media screen and (min-width: 650px) {
      margin: 0.5rem auto 0;
      #bio {
        margin: auto;
      }
    }
    @media screen and (min-width: 550px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      #bio {
        max-width: 600px;
        padding: 0.9em 0 0;
        p {
          padding: 0.3em 2em 1.2em;
        }
      }
    }
  }
`;

const shadowColor = "rgba(0, 0, 0, 0.05)";
const LogoLinks = styled.div`
  background: ${colors.light};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.03), -7px 4px 7px ${shadowColor},
    7px 4px 7px ${shadowColor};
  border-radius: 0 0 1em 1em;

  width: 85%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0.45em 0 0.1em;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const iconSize = 42;

export default function Hero() {
  return (
    <HeroContainer>
      <div id="hero-header">
        <h1>hi, i'm jake.</h1>
      </div>
      <div id="hero-main">
        <div id="bio">
          <p>
            I am a fullstack developer currently based in Texas, where I was
            born and raised. As a recent graduate of Fullstack Academy, I am
            very curious and excited to work on new projects — especially those
            related to music, mathematics, and education. My main goal at the
            moment is to learn as much as possible, so I am looking for any
            employment opportunities where I can work on a team and grow as a
            developer.
          </p>
        </div>
      </div>
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
