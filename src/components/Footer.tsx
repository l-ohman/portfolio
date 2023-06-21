import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMail, IoDocumentTextSharp } from "react-icons/io5";

const iconSize = 45;

export default function Footer() {
  return (
    <div>
      <div>
        <a
          href="mailto:jakelohman7@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMail size={iconSize} className="icon-link-inverted" />
        </a>

        <a
          href="https://www.linkedin.com/in/jake-lohman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={iconSize} className="icon-link-inverted" />
        </a>

        <a
          href="https://github.com/l-ohman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare size={iconSize} className="icon-link-inverted" />
        </a>

        <a
          href="https://drive.google.com/file/d/1F6mGYq4p8Sav0lKuy63OLPQsX7_gbisU/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoDocumentTextSharp size={iconSize} className="icon-link-inverted" />
        </a>
      </div>
    </div>
  );
}
