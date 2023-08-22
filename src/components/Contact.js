import React from "react";
import styled from "styled-components";
import { BiCopy } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import colors from "../colors.json";

const ContactContainer = styled.div`
  background: ${colors.backgroundSecondary};
  padding: 0.3em 1.5em 1.5em;
  font-size: 105%;
  margin: 0 auto;
  color: black;

  @media screen and (min-width: 650px) {
    padding: 0.6em 1.5em 2.7em;
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
  hr {
    margin: 0.6em auto;
    width: 19em;
  }
  &#right {
    background: ${colors.lighter};
    color: black;

    min-height: 5em;
    margin: 1em auto 0;
    padding: 1.15em 1.3em 0.5em;
    border-radius: 1.5em;
  }
`;

export default function Contact() {
  const copyItem = (item) => {
    navigator.clipboard.writeText(item);
    // should replace alert with toastify
    alert(
      `'${item}' copied to clipboard — click the email itself to open your mail app`
    );
  };

  return (
    <ContactContainer>
      <HalfContainers id="left">
        <h2>let's get in touch!</h2>
        <hr />
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
          <BiCopy
            size={22}
            onClick={(e) => copyItem("jakelohman7@gmail.com")}
            className="copy-logo email-copier"
          />
        </div>
        <div id="link-list">
          <p>
            or reach out via{" "}
            <a
              href="https://www.linkedin.com/in/jake-lohman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
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
