import React from "react";
import styled from "styled-components";
import { BiCopy } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const ContactContainer = styled.div`
  border: 1px solid blue;
  font-size: 105%;
  max-width: 600px;
  margin: 0 auto;

  > div > * {
    text-align: center;
    margin-bottom: 0.3em;
  }
  h2 {
    font-size: 150%;
    margin-bottom: 0;
  }
  #link-list {
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 0.1em auto 0.7em;
    a {
      color: black;
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
  border: 1px solid green;
  padding: 0.5em 0.5em 0;
  width: fit-content;
  hr {
    margin: 0.6em auto;
    width: 19em;
  }
  &#right {
    min-height: 5em;
    padding: 1em 1.3em 0.5em;
    border-radius: 2em;
  }
`;

export default function Contact() {
  const copyItem = (item) => {
    navigator.clipboard.writeText(item);
    // should replace alert with toastify
    alert(`'${item}' copied to clipboard`);
  };

  return (
    <ContactContainer>
      <HalfContainers id="left">
        <h2>let's get in touch</h2>
        <hr />
        <p>
          I am currently looking for full-time (or part-time) employment and select freelance
          opportunities — feel free to contact me here:
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
