import React from "react";
import styled from "styled-components";
import colors from "../colors.json";
import images from "../images";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const HeroContainer = styled.div`
  padding: 3em 1em 1.4em;
  color: black;
  #page-header {
    padding: 0 0.5em 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      width: fit-content;
      text-align: center;
      font-size: 260%;
      margin: 0.08em 0 0 0.1em;
      @media screen and (min-width: 650px) {
        font-size: 250%;
        margin-bottom: 0;
      }
    }
    img {
      margin: 0 0.3em 0 0;
      border-radius: 30% 10%;
      max-height: 4.5em;
    }
  }
  #hero-main {
    #bio {
      background: ${colors.lighter};
      color: black;

      width: 100%;
      text-align: justify;
      font-size: 110%;
      border-radius: 0.5em;
      padding: 1em 1.2em;
      box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
    }

    @media screen and (min-width: 650px) {
      margin: 1.2em 3em 0;
    }
    @media screen and (min-width: 550px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      #bio {
        width: 60%;
        padding: 0.9em 0 0;
        p {
          padding: 0.3em 2em 1.2em;
        }
      }
    }
  }
`;

const iconColor = "black";
const iconSize = 42;
const QuickInfoPicture = styled.div`
  background: ${colors.light};
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 1em 1em;
  /* border-top: 1px solid rgba(0, 0, 0, 0.02); */
  
  width: 85%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0.45em 0 0.1em;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <div id="page-header">
        <h1>hi, i'm jake.</h1>
        <img
          src={images.headshot}
          alt="My smile when my code runs with no bugs"
        />
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
      <QuickInfoPicture>
        <a
          href="mailto:jakelohman7@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMail color={iconColor} size={iconSize} />
        </a>

        <a
          href="https://www.linkedin.com/in/jake-lohman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color={iconColor} size={iconSize} />
        </a>

        <a
          href="https://github.com/l-ohman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare color={iconColor} size={iconSize} />
        </a>
      </QuickInfoPicture>
    </HeroContainer>
  );
}
