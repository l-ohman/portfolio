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

  #solar-sandbox-image-container {
    margin: 0.5em 0 0.7em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    img {
      height: 300px;
      margin: 0;
      padding: 0;
      object-fit: cover;
    }

    #node-graph-img {
      min-width: 58%;
      border-radius: ${imageRadius + "px"} 0 0 ${imageRadius + "px"};
      border-right: none;
    }
    #solar-system-img {
      width: 42%;
      border-radius: 0 ${imageRadius + "px"} ${imageRadius + "px"} 0;
      object-position: 50%;
      border-left: none;
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
      #node-graph-img {
        min-width: 100%;
        max-width: 100%;
        border-radius: ${imageRadius + "px"} ${imageRadius + "px"} 0 0;
      }
      #solar-system-img {
        max-width: 100%;
        min-width: 100%;
        border-radius: 0 0 ${imageRadius + "px"} ${imageRadius + "px"};
      }
    }
  }
`;

export default function SolarSandbox() {
  const technologies = [
    "React",
    "React Flow",
    "Three.js",
    "React Three Fiber",
    "Zustand",
  ];

  return (
    <>
      <div className="single-project-header">
        <h2 className="project-title">Solar Sandbox</h2>
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
        <p className="description">{`Solar Sandbox is an interactive application where users can design their own solar system from scratch. Users can build their own system of planets and moons with a 3D view that updates in realtime.`}</p>
        <p className="description">{`This project was built in about 4 days for our 'Async Week' project at Fullstack Academy. When I occasionally have time, I enjoy returning to this project to make small tweaks, such as minor bug fixes and UI/UX improvements.`}</p>

        <div id="solar-sandbox-image-container">
          <img
            src={images.solarSandbox.main}
            alt={`Solar Sandbox Screenshot 1`}
            id="node-graph-img"
          />
          <img
            src={images.solarSandbox.secondary}
            alt={`Solar Sandbox Screenshot 2`}
            id="solar-system-img"
          />
        </div>
      </DescriptionImagesContainer>

      <hr />

      <ProjectLinksAndInfo>
        <div className="links">
          <a
            href="https://solar-sandbox.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="single-link"
          >
            <p className="full-txt">View Site</p>
            <p className="min-txt">Deployed</p>
            <FaExternalLinkAlt color={iconColor} size={20} />
          </a>
          <a
            href="https://github.com/l-ohman/solar-sandbox"
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
