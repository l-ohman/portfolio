import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import images from "../../images";
import ProjectLinksAndInfo from "./styled/ProjectLinksAndInfo";
import TechnologiesContainer from "./styled/TechnologiesContainer";

const iconColor = "white";
const imageRadius = 5;

const DescriptionImagesContainer = styled.div`
  .description {
    font-size: 1.04em;
    margin: 0.6em 0.3em 0.9em;
    text-align: justify;
  }
  @media screen and (min-width: 650px) {
    .description {
      font-size: 1.1em;
    }
  }

  img {
    max-width: 48%;
    height: fit-content;
    object-fit: contain;
    border-radius: ${imageRadius + "px"};
    box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.07);
  }

  #tusk-image-container {
    margin: 0.5em 0 0.7em;
    img {
      display: block;
      height: 400px;
      min-width: 100%;
      margin: 0;
      padding: 0;
      object-fit: cover;
      box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.07);
    }

    img:first-child {
      border-radius: ${imageRadius + "px"};
      object-position: 50% -80px;
      max-height: 400px;
    }
    img:last-child {
      margin: 8px 0 15px;
      border-radius: ${imageRadius + "px"};
      object-position: 50% 0%;
      max-height: 450px;
    }

    @media screen and (max-width: 600px) {
      img:first-child {
        max-height: 395px;
      }
      img:last-child {
        object-position: 0% 0%;
        max-height: 200px;
      }
    }

    @media screen and (max-width: 900px) {
      img:first-child {
        object-position: 50% 0px;
      }
    }
  }

  a {
    color: black;
  }
`;

export default function Tusk() {
  const technologies = [
    "Node.js",
    "React",
    "Redux",
    "Express",
    "PostgreSQL",
    "GraphQL",
  ];

  return (
    <>
      <div className="single-project-header">
        <h2 className="project-title">Tusk</h2>
      </div>

      <TechnologiesContainer>
        <div id="tech-list">
          {technologies.map((tech, i) => (
            <p className="tag" key={i}>
              {tech}
            </p>
          ))}
        </div>
      </TechnologiesContainer>
      <hr id="header-divider" />

      <DescriptionImagesContainer>
        <p className="description">
          Tusk is a tool to analyze complex hero matchups in Dota 2. Users can
          pick and ban heroes for either team and view detailed information
          about the matchups between them. All data used in this project comes
          from the free{" "}
          <a
            href="https://stratz.com/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stratz GraphQL API.
          </a>
        </p>

        <div id="tusk-image-container">
          <img src={images.tusk.main} alt={`Tusk Screenshot 1`} />
          <img src={images.tusk.secondary} alt={`Tusk Screenshot 2`} />
        </div>
      </DescriptionImagesContainer>

      <hr />

      <ProjectLinksAndInfo>
        <div className="links">
          <a
            href="https://l-ohman.github.io/tusk-d2/"
            target="_blank"
            rel="noopener noreferrer"
            className="single-link"
          >
            <p className="full-txt">View Site</p>
            <p className="min-txt">Deployed</p>
            <FaExternalLinkAlt color={iconColor} size={20} />
          </a>
          <a
            href="https://github.com/l-ohman/tusk-d2"
            target="_blank"
            rel="noopener noreferrer"
            className="single-link"
          >
            <p className="full-txt">View on Github</p>
            <p className="min-txt">Github</p>
            <FaGithub color={iconColor} size={24} />
          </a>
        </div>
      </ProjectLinksAndInfo>
    </>
  );
}
