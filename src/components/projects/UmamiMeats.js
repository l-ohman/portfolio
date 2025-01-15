import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
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

  img {
    object-fit: cover;
    object-position: 0 0;
  }
  #umami-description-container {
    width: 100%;
  }
  @media screen and (max-width: 649px) {
    #umami-image-container {
      display: block;
      width: 320px;
      max-width: 320px;
      margin: 0.9em auto;
      padding-right: 0.4em;
      #umami-homepage-screenshot {
        display: block;
        margin: 0 auto;
        max-width: 320px;
        max-height: 500px;
      }
    }
    #umami-homepage-screenshot-main {
      display: none;
    }
  }
  @media screen and (min-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;

    #umami-description-container {
      max-width: 410px;
      margin: 0 1.5em 0 0;
    }
    #umami-homepage-screenshot-main {
      display: block;
      margin: 0.8em 1.3em 0.5em 0;
      min-width: 35%;
      max-height: 400px;
    }
    #umami-image-container {
      display: none;
    }
  }
`;

export default function UmamiMeats() {
  const technologies = ["Node.js", "Next.js", "React", "Redux", "PostgreSQL"];

  return (
    <>
      <div className="single-project-header">
        <h2 className="project-title">Umami Meats</h2>
        {images.umamiMeats.icon && (
          <img
            src={images.umamiMeats.icon}
            className="project-icon"
            alt={`Umami Meats Icon`}
            style={{
              backgroundColor: "#000000",
              padding: "2px",
            }}
          />
        )}
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
        <div id="umami-description-container">
          <p className="description">{`Umami Meats is an ecommerce site that sells a small variety of high-quality steak and sushi. This project was built in roughly 10 days for the 'Grace Shopper' project at Fullstack Academy.`}</p>
          <p className="description">{`The vast majority of my time on this project was spent designing and building the frontend. At the very beginning of the project, I drew the wireframes for nearly every page; these proved to be invaluable, as they greatly sped up our process and ensured visual consistency throughout the entire application. Once we had built the foundation for each page, I revised much of the styling and added subtle animations to construct a user experience that is both aesthetically pleasing and extremely clear.`}</p>
        </div>

        <div id="umami-image-container">
          <img
            src={images.umamiMeats.main}
            alt="Umami Meats Homepage"
            id="umami-homepage-screenshot"
          />
        </div>
        <img
          src={images.umamiMeats.main}
          alt="Umami Meats Homepage"
          id="umami-homepage-screenshot-main"
        />
      </DescriptionImagesContainer>

      <hr />

      <ProjectLinksAndInfo>
        <div className="links">
          <a
            href="https://github.com/dexters-lab-fsa-2208/umami-meats"
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
