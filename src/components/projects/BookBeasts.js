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
`;



export default function BookBeasts() {
  const technologies = [
    "Node.js",
    "Express",
    "PostgreSQL",
    "React",
    "Redux",
    "Mocha",
  ];

  return (
    <>
      <div className="single-project-header">
        <h2 className="project-title">Book Beasts</h2>
        {images.bookBeasts.icon && (
          <img
            src={images.bookBeasts.icon}
            className="project-icon"
            alt={`Book Beasts icon`}
            // style={{
            //   backgroundColor: project.id === 2 ? "#000000" : "none",
            //   padding: project.id === 2 ? "2px" : "0",
            // }}
          />
        )}
      </div>

      <TechnologiesContainer>
        <div id="tech-list">
          {technologies.map((tech, i) => (
            <p className="tag" key={tech + i}>
              {tech}
            </p>
          ))}
        </div>
      </TechnologiesContainer>
      <hr id="header-divider" />

      <DescriptionImagesContainer>
        <p className="description">{`For our final project at Fullstack Academy, my team and I wanted to build an educational and interactive experience for children - so we built Book Beasts. This project had two main goals: the first was to enable students’ creativity by giving them a platform to create, and the second was to provide instructors with the tools necessary to monitor and manage their students’ works.`}</p>

        <div id="book-beasts-image-container">
          <img
            src={images.bookBeasts.main}
            alt="Book Beasts Student View"
            id="book-beasts-student"
          />
          <img
            src={images.bookBeasts.secondary}
            alt="Book Beasts Book-Editor"
            id="book-beasts-editor"
          />
        </div>
      </DescriptionImagesContainer>

      <hr />

      <ProjectLinksAndInfo>
        <div className="links">
          <a
            href="https://github.com/fsa-2208-mspiggy/Book-Beasts"
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
