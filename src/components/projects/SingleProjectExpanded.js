import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import { useDispatch } from "react-redux";
import { unselectProject } from "../../store/reducers";

const ExpandedContainer = styled.div`
  /* border: 2px solid green; */
  border: 1px solid red;
  width: 100%;
  margin: 0.2em 0 0.9em;
  padding: 0.2em 0.2em 3.4em;

  border-radius: 0.5em;
  /* box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15); */

  .single-project-header {
    display: flex;
    align-items: center;
    .solo-team-icon {
      margin-left: 8px;
    }
  }

  .tag {
    border: 1px solid blue;
    width: fit-content;
    font-size: 0.97em;
    padding: 0.2em 0.55em;
    border-radius: 0.9em;

    margin-left: 0.5em;
    &:first-child {
      margin-left: 0;
    }
  }
  @media screen and (min-width: 650px) {
    padding: 1.2em;
  }
`;

const DescriptionContainer = styled.div`
  /* border: 1px solid purple; */
  #extended-description {
    .paragraph {
      margin: 0.3em 0;
    }
  }
`;

const TagContainer = styled.div`
  border: 2px solid purple;
  display: flex;
`;

const TechnologiesContainer = styled.div`
  border: 1px solid purple;

  #tech-header {
    margin-top: 0.7em;
    text-align: center;
  }
  #tech-list {
    width: fit-content;
    margin: 0.5em auto;
    display: flex;
  }
`;

const ProjectLinksAndInfo = styled.div`
  border: 1px solid purple;

  position: relative;
  bottom: 0;
  left: 0;
  height: 3em;
  width: 100%;
  margin-top: 0.3em;
  padding: 0 0.63em;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .links {
    padding-top: 2px;
    > * {
      /* border: 1px solid red; */
      &:nth-child(2) {
        margin-left: 14px;
      }
    }
  }
  .return-to-projects {
    border: 1px solid blue;

    width: fit-content;
    font-size: 0.96em;
    font-style: italic;
    padding: 0.43em 1.2em 0.31em 1.2em;
    border-radius: 35% 10% 35% 10%;
  }
`;

// eventually this should be consolidated with SingleProject.js
export default function SingleProjectExpanded({ id, project }) {
  const dispatch = useDispatch();
  const unselectThis = () => {
    dispatch(unselectProject());
  };

  return (
    <ExpandedContainer>
      <div className="single-project-header">
        <h2>{project.title}</h2>
        {/* {project.solo ? (
        <FaUserAlt size={16} className="solo-team-icon" />
      ) : (
        <FaUserFriends size={23} className="solo-team-icon" />
      )} */}
      </div>

      <TagContainer>
        {project.tags.map((tag, i) => (
          <p key={i} className="tag">
            {tag}
          </p>
        ))}
      </TagContainer>

      <DescriptionContainer>
        <div id="extended-description">
          {project.full.map((paragraph, i) => (
            <p key={i} className="paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </DescriptionContainer>

      {/*
        to add:
          x button at top to return (helpful UI)
          images (with wrap),
          solo/team somewhere,
          'other contributions'(team) and 'contributions'(solo)(rename)
      */}

      <TechnologiesContainer>
        <h3 id="tech-header">Technologies used</h3>
        <div id="tech-list">
          {project.technologies.map((tech, i) => (
            <p className="tag" key={i}>
              {tech}
            </p>
          ))}
        </div>
      </TechnologiesContainer>

      <ProjectLinksAndInfo>
        <div className="links">
          {project.links.deployed && (
            <a
              href={project.links.deployed}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt color="black" size={28} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="black" size={31} />
            </a>
          )}
        </div>

        <p className="return-to-projects" onClick={unselectThis}>
          Return to all projects
        </p>
      </ProjectLinksAndInfo>
    </ExpandedContainer>
  );
}
