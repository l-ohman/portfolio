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
        <p className="description">{`For our final project at Fullstack Academy, my team and I wanted to build an educational and interactive experience for children — so we built Book Beasts. This project had two main goals: the first was to enable students’ creativity by giving them a platform to create, and the second was to provide instructors with the tools necessary to monitor and manage their students’ works.`}</p>

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
