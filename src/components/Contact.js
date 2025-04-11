import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import colors from "../data/colors.json";
import { SectionHeader } from "./SmallProject/SmallProjectGrid";

const ContactContainer = styled.div`
  background: ${colors.backgroundSecondary};
  padding: 16px 12px;
  margin: 0 auto;
  color: black;

  h1 {
    padding-bottom: 16px;
  }

  @media screen and (min-width: 650px) {
    padding: 32px 12px;
  }

  > div {
    max-width: 630px;
    text-align: center;
    * {
      margin-bottom: 0.3em;
    }
  }
  h2 {
    margin: 0.3em auto 0;
    font-size: 180%;
  }
  #link-list {
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 0.1em auto 0.7em;
    a {
      color: inherit;
    }
    .copy-logo {
      cursor: pointer;
      @media screen and (max-width: 378px) {
        &.email-copier {
          display: none;
        }
      }
      @media screen and (max-width: 317px) {
        &.linkedin-copier {
          display: none;
        }
      }
    }
    * {
      margin: 0 0.15em;
    }
  }
  #contact-info-icons {
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

const HalfContainers = styled.div`
  margin: 0.5em auto;
  padding: 0.5em 0.5em 0;
  width: fit-content;
  font-size: 1.1rem;

  &#left {
    line-height: 1.65rem;
  }

  &#right {
    background: ${colors.lighter};
    color: black;

    min-height: 5em;
    margin: 32px auto;
    padding: 18px 18px 8px;
    border-radius: 20px;

    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.09);
  }
`;

export default function Contact() {
  return (
    <ContactContainer>
      <SectionHeader>contact</SectionHeader>

      <HalfContainers id="left">
        <p>
          I am currently looking for full-time employment and am open to select
          freelance opportunities - feel free to contact me here:
        </p>
      </HalfContainers>

      <HalfContainers id="right">
        <div id="link-list">
          <p>
            email me at{" "}
            <a href="mailto:jakelohman7@gmail.com">jakelohman7@gmail</a>
          </p>
        </div>
        <div id="link-list">
          <p>
            or reach out via{" "}
            <a
              href="https://www.linkedin.com/in/jake-lohman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <a
            href="https://www.linkedin.com/in/jake-lohman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} className="copy-logo linkedin-copier" />
          </a>
        </div>
      </HalfContainers>
    </ContactContainer>
  );
}
