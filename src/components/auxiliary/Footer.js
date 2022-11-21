import React from "react";
import styled from "styled-components";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMail, IoDocumentTextSharp } from "react-icons/io5";

const footerHeight = 4.5;
const FooterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: ${footerHeight + "em"};
  bottom: ${"-" + (footerHeight + 2) + "em"};
  padding: 0.3em 0;

  background: black;
  color: black;
  text-align: center;

  > div {
    max-width: 400px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    a {
      margin: 10px 20px 0;
      /* border: 1px solid white; */
      /* height: 32px; */
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
        <a href="mailto:jakelohman7@gmail.com">
          <IoMail color={iconColor} size={iconSize} />
        </a>

        <a href="https://www.linkedin.com/in/jake-lohman/">
          <FaLinkedin color={iconColor} size={iconSize} />
        </a>

        <a href="https://github.com/l-ohman">
          <FaGithubSquare color={iconColor} size={iconSize} />
        </a>

        <a href="resume link">
          <IoDocumentTextSharp color={iconColor} size={iconSize} />
        </a>
      </div>
    </FooterContainer>
  );
}