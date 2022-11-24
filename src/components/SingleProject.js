import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import images from "../images";
import colors from "../colors.json";

const iconColor = "white";
const imageRadius = 5;

const ExpandedContainer = styled.div`
  background: ${colors.light};
  color: black;
  width: 100%;
  max-width: 1000px;

  margin: 0.2em auto 2em;
  padding: 0.2em 0.9em;
  border-radius: 0.5em;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.09);

  .single-project-header {
    display: flex;
    align-items: center;
    text-shadow: 2px 1px 5px rgba(0, 0, 0, 0.05);
    width: fit-content;
    margin: 0.3em auto 0.15em;

    .project-title {
      font-size: 190%;
    }
    .project-icon {
      width: 29px;
      max-height: 29px;
      margin: 0 0 0 8px;
      border-radius: 50%;
      box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.1);
    }

    @media screen and (min-width: 650px) {
      margin: 0.3em auto 0.25em;
      .project-title {
        font-size: 210%;
      }
      .project-icon {
        width: 34px;
        max-height: 34px;
        margin: 0 0 0px 9px;
      }
    }
  }

  hr {
    width: 97%;
    margin: 0.3em auto;
    &#header-divider {
      width: 100%;
      margin: 0.9em auto 0;
      /* max-width: 700px; */
    }
  }

  @media screen and (min-width: 650px) {
    padding: 0.8em 1.6em 0.2em;
    > * {
      margin-left: 0.2em;
    }
  }
`;

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

  &#book-beasts {
    #book-beasts-image-container {
      margin: 18px auto 15px;
      display: flex;
      justify-content: space-between;
    }

    @media screen and (min-width: 650px) {
      #book-beasts-image-container {
        justify-content: center;
        img {
          max-height: 500px;
          object-fit: cover;
        }
        #book-beasts-student {
          margin-right: 1.2em;
        }
        #book-beasts-editor {
          margin-left: 1.2em;
        }
      }
    }
  }

  &#umami-meats {
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
  }

  &#solar-sandbox {
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
  }
`;

const ProjectLinksAndInfo = styled.div`
  height: 3em;
  width: fit-content;
  margin: 0.25em auto 0.45em;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .links {
    padding-top: 3px;
    margin-left: 0;
    display: flex;
    > * {
      &:nth-child(2) {
        margin-left: 14px;
      }
    }

    .single-link {
      background: ${colors.accent};
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

export default function SingleProject({ id, project }) {
  return (
    <ExpandedContainer>
      <div className="single-project-header">
        <h2 className="project-title">{project.title}</h2>
        {images[id].icon && (
          <img
            src={images[id].icon}
            className="project-icon"
            alt={`${project.title} Icon`}
            style={{
              backgroundColor: id === 2 ? "#000000" : "none",
              padding: id === 2 ? "2px" : "0",
            }}
          />
        )}
      </div>

      <TechnologiesContainer>
        <div id="tech-list">
          {project.technologies.map((tech, i) => (
            <p className="tag" key={i}>
              {tech}
            </p>
          ))}
        </div>
      </TechnologiesContainer>
      <hr id="header-divider" />

      {/*
          probably should have hard-coded most of this, esp. for image formatting; each itm
          should have a somewhat unique design. (lesson learned for next portfolio, i guess.)
        */}
      {id === 1 ? (
        <DescriptionImagesContainer id="book-beasts">
          <p className="description">{project.description[0]}</p>
          {/* <p className="description">{project.description[1]}</p> */}

          <div id="book-beasts-image-container">
            <img
              src={images[id].main}
              alt="Book Beasts Student View"
              id="book-beasts-student"
            />
            <img
              src={images[id].secondary}
              alt="Book Beasts Book-Editor"
              id="book-beasts-editor"
            />
          </div>
        </DescriptionImagesContainer>
      ) : id === 2 ? (
        <DescriptionImagesContainer id="umami-meats">
          <div id="umami-description-container">
            <p className="description">{project.description[0]}</p>
            <p className="description">{project.description[1]}</p>
          </div>

          <div id="umami-image-container">
            <img
              src={images[id].main}
              alt="Umami Meats Homepage"
              id="umami-homepage-screenshot"
            />
          </div>
          <img
            src={images[id].main}
            alt="Umami Meats Homepage"
            id="umami-homepage-screenshot-main"
          />
        </DescriptionImagesContainer>
      ) : (
        <DescriptionImagesContainer id="solar-sandbox">
          <p className="description">{project.description[0]}</p>
          <p className="description">{project.description[1]}</p>

          <div id="solar-sandbox-image-container">
            <img
              src={images[id].main}
              alt={`${project.title} Screenshot 1`}
              id="node-graph-img"
            />
            <img
              src={images[id].secondary}
              alt={`${project.title} Screenshot 2`}
              id="solar-system-img"
            />
          </div>
        </DescriptionImagesContainer>
      )}

      <hr />

      <ProjectLinksAndInfo>
        <div className="links">
          {project.links.deployed && (
            <a
              href={project.links.deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="single-link"
            >
              <p className="full-txt">View Site</p>
              <p className="min-txt">Deployed</p>
              <FaExternalLinkAlt color={iconColor} size={20} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="single-link"
            >
              <p className="full-txt">View on Github</p>
              <p className="min-txt">Github</p>
              <FaGithub color={iconColor} size={24} />
            </a>
          )}
        </div>
      </ProjectLinksAndInfo>
    </ExpandedContainer>
  );
}
