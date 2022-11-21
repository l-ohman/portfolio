import React from "react";
import styled from "styled-components";
import { BiCopy } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const ContactContainer = styled.div`
  border: 1px solid blue;
  font-size: 105%;
  padding: 1em;
  text-align: center;
  * {
    margin-bottom: 0.3em;
  }
  h2 {
    font-size: 150%;
    /* text-align: center; */
  }
  #link-list {
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 0.35em auto 0.1em;
    a {
      color: black;
    }
    .copy-logo {
      cursor: pointer;
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

export default function Contact() {
  const copyItem = (item) => {
    navigator.clipboard.writeText(item);
    // should replace alert with toastify
    alert(`'${item}' copied to clipboard`);
  };

  return (
    <ContactContainer>
      <h2>let's get in touch</h2>
      <p>
        I am currently looking for full-time employment and select freelance
        opportunities — feel free to contact me via the links below!
      </p>

      <div id="link-list">
        <p>
          email me at{" "}
          <a href="mailto:jakelohman7@gmail.com">jakelohman7@gmail</a>
        </p>
        <BiCopy
          size={22}
          onClick={(e) => copyItem("jakelohman7@gmail.com")}
          className="copy-logo"
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
          <FaLinkedin size={22} className="copy-logo" />
        </a>
      </div>
    </ContactContainer>
  );
}
