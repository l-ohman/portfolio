import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import images from "../images";

const ExpandedContainer = styled.div`
  /* border: 2px solid green; */
  border: 1px solid red;
  width: 100%;
  margin: 0.2em 0 0.9em;
  padding: 0.2em 0.9em;

  border-radius: 0.5em;
  /* box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15); */

  .single-project-header {
    display: flex;
    align-items: center;
    .project-icon {
      width: 20px;
      max-height: 20px;
      margin-left: 5px;
      border-radius: 50%;
    }
  }

  hr {
    margin: 0.3em 0 3.5em;
  }
  @media screen and (min-width: 650px) {
    padding: 0.8em 1.2em 0.2em;
  }
`;

// const TagContainer = styled.div`
//   border: 2px solid purple;
//   text-align: center;
//   display: flex;
//   /* justify-content: center; */
//   align-items: center;
// `;

const TechnologiesContainer = styled.div`
  border: 1px solid purple;
  #tech-list {
    width: fit-content;
    margin: 0.2em 0;
    display: flex;
    flex-flow: row wrap;
  }

  /* have moved tag class here bc removing TagContainer */
  .tag {
    border: 1px solid blue;
    width: fit-content;
    font-size: 0.97em;
    padding: 0.2em 0.55em;
    border-radius: 0.9em;
    margin-right: 0.5em;
  }
`;

const DescriptionContainer = styled.div`
  /* border: 1px solid purple; */
  .paragraph {
    margin: 0.3em 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;

  img {
    max-width: 48%;
    height: fit-content;
    object-fit: contain;

    border: 1px solid #2f2f2f;
    border-radius: 8px;
  }

  &#umami-meats {
    /* justify-content: space-around; */
    img {
      max-height: 300px;
    }
    #homepage-screenshot {
      min-width: 55%;
      object-fit: cover;
      object-position: 0 0;
    }
  }

  &#solar-sandbox {
    img {
      height: 300px;
      margin: 0;
      padding: 0;
      object-fit: cover;
    }
    #node-graph-img {
      min-width: 60%;
      border-radius: 8px 0 0 8px;
      border-right: none;
    }
    #solar-system-img {
      width: 40%;
      border-radius: 0 8px 8px 0;
      object-position: 50%;
      border-left: none;
    }
  }
`;

const ExpandInfo = styled.div`
  .expand-txt {
    color: black;
    font-size: 0.94em;
    font-style: italic;
    text-decoration: underline;
    text-align: center;
    margin: 0.2em auto 0.6em;
  }
`;

const ProjectLinksAndInfo = styled.div`
  /* border: 1px solid purple; */

  position: absolute;
  bottom: 0.5em;
  right: 1.2em;
  height: 3em;
  width: fit-content;
  /* margin: 0.3em 0; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  .links {
    padding-top: 3px;
    margin-left: 0;
    display: flex;
    > * {
      /* border: 1px solid red; */
      &:nth-child(2) {
        margin-left: 14px;
      }
    }

    .single-link {
      border: solid 1px blue;
      padding: 0.3em 0.7em;
      border-radius: 1.1em;
      display: flex;
      align-items: center;
      text-decoration: none;

      p {
        margin-right: 0.4em;
        padding-top: 0.2em;
        color: black;
      }
    }
    @media screen and (max-width: 370px) {
      .single-link {
        width: 45px;
        height: 45px;
        border-radius: 38%;

        p {
          display: none;
        }
      }
    }
  }
`;

// eventually this should be consolidated with SingleProject.js
export default function SingleProject({ id, project }) {
  const [isExpanded, setExpanded] = React.useState(false);

  return (
    <ExpandedContainer>
      <div className="single-project-header">
        <h2>{project.title}</h2>
        {/* {project.solo ? (
        <FaUserAlt size={16} className="solo-team-icon" />
      ) : (
        <FaUserFriends size={23} className="solo-team-icon" />
      )} */}
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

      {/* might want to scrap the tags if there's no search/sort/filtering type of system */}
      {/* <TagContainer>
        {project.tags.map((tag, i) => (
          <p key={i} className="tag">
            {tag}
          </p>
        ))}
      </TagContainer> */}

      <TechnologiesContainer>
        {/* <h3 id="tech-header">Technologies used</h3> */}
        <div id="tech-list">
          {project.technologies.map((tech, i) => (
            <p className="tag" key={i}>
              {tech}
            </p>
          ))}
        </div>
      </TechnologiesContainer>

      <DescriptionContainer>
        <p className="paragraph">{project.full[0]}</p>
        {isExpanded && <p className="paragraph">{project.full[1]}</p>}
      </DescriptionContainer>

      {isExpanded && (
        <>
          {/*
        probably should have hard-coded most of this, esp. for image formatting; each itm
        should have a somewhat unique design. (lesson learned for next portfolio, i guess.)
      */}
          {id === 1 ? (
            <ImageContainer id="book-beasts">
              <img src={images[id].main} alt="Book Beasts Student View" />
              <img src={images[id].secondary} alt="Book Beasts Book-Editor" />
            </ImageContainer>
          ) : id === 2 ? (
            <ImageContainer id="umami-meats">
              <img
                src={images[id].main}
                alt="Umami Meats Homepage"
                id="homepage-screenshot"
              />
              <img src={images[id].secondary} alt="Umami Meats Cart View" />
            </ImageContainer>
          ) : (
            <ImageContainer id="solar-sandbox">
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
              {/* <img src={images[id].alt} alt={`${project.title} Screenshot 3`} /> */}
            </ImageContainer>
          )}
        </>
      )}

      <ExpandInfo>
        {isExpanded ? (
          <p onClick={() => setExpanded(false)} className="expand-txt">
            Collapse details
          </p>
        ) : (
          <p onClick={() => setExpanded(true)} className="expand-txt">
            Read more...
          </p>
        )}
      </ExpandInfo>

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
              <p>View Site</p>
              <FaExternalLinkAlt color="black" size={20} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="single-link"
            >
              <p>View on Github</p>
              <FaGithub color="black" size={24} />
            </a>
          )}
        </div>

        {/* <p
          className="collapse-details"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? "Collapse details" : "Read more"}
        </p> */}
      </ProjectLinksAndInfo>
    </ExpandedContainer>
  );
}