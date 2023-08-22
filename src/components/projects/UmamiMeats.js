import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import images from "../../images";
import colors from "../../colors.json";

const iconColor = "white";
const imageRadius = 5;

const TechnologiesContainer = styled.div`
  #tech-list {
    width: fit-content;
    margin: 0.2em auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .tag {
    background: ${colors.accent};
    color: white;

    width: fit-content;
    font-size: 0.97em;
    padding: 0.25em 0.6em;
    border-radius: 0.9em;
    margin: 0.2em 0.45em 0 0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.08);
    &:first-child {
      margin-left: 0.45em;
    }
  }
`;

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

const ProjectLinksAndInfo = styled.div`
  height: 3em;
  width: 100%;
  margin: 0.25em auto 0.45em;

  display: flex;
  justify-content: center;
  align-items: center;

  .links {
    padding-top: 3px;
    margin-left: 0;
    display: flex;
    justify-content: center;
    > * {
      margin: 0 7px;
    }

    .single-link {
      transition: background-color 0.07s linear 0s;

      background-color: ${colors.accent};
      padding: 0.3em 0.75em 0.45em;
      border-radius: 1.1em;
      display: flex;
      align-items: center;
      text-decoration: none;
      overflow: hidden;
      p {
        margin-right: 0.4em;
        padding-top: 0.2em;
        color: white;
      }
      a {
        color: white;
      }

      &:hover,
      &:active {
        background-color: ${colors.accent2};
      }
    }
    .min-txt {
      display: none;
    }
    @media screen and (max-width: 400px) {
      .single-link {
        .min-txt {
          display: block;
          margin-right: 9px;
        }
        .full-txt {
          display: none;
        }
      }
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
