import React from "react";
import styled from "styled-components";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMail, IoDocumentTextSharp } from "react-icons/io5";
import colors from "../../colors.json";

const footerHeight = 4.5;
const FooterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: ${footerHeight + "em"};
  bottom: ${"-" + (footerHeight + 2) + "em"};
  padding: 0.3em 0;

  background: ${colors.dark};
  text-align: center;

  > div {
    max-width: 400px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    a {
      margin: 10px 20px 0;
    }
  }
`;
const iconColor = "white";
const iconSize = 45;

export default function Footer() {
  return (
    <FooterContainer>
      {/* <p>Email</p>
      <p>LinkedIn</p>
      <p>Github</p>
      <p>Resume</p> */}

      <div>
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

        <a
          href="https://drive.google.com/file/d/1F6mGYq4p8Sav0lKuy63OLPQsX7_gbisU/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoDocumentTextSharp color={iconColor} size={iconSize} />
        </a>
      </div>
    </FooterContainer>
  );
}
