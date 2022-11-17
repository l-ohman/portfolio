import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  /*FaUserAlt,
  FaUserFriends,*/
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const ContentContainer = styled.div`
  border: 1px solid blue;
  > h1 {
    text-align: center;
  }
  /* padding: 0.2em 0.5em; */

  #project-list {
    padding: 0;

    .single-project {
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
    }

    @media screen and (min-width: 650px) {
      padding: 1em;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

      .single-project {
        width: 48%;
      }
      .featured {
        width: 100%;
      }
    }
  }
`;

const TagContainer = styled.div`
  border: 2px solid purple;
  display: flex;

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
`;

const ProjectLinksAndInfo = styled.div`
  border: 1px solid purple;

  position: absolute;
  bottom: 0;
  left: 0;
  height: 3em;
  width: 100%;
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
  .readmore {
    border: 1px solid red;

    width: fit-content;
    font-size: 0.96em;
    font-style: italic;
    padding: 0.43em 0.88em 0.31em 0.79em;
    border-radius: 40% 10% 40% 10%;
  }
`;

export default function Projects() {
  const projects = useSelector((state) => state.projects);
  const projectList = Object.keys(projects);

  // if 0, no project selected; else, var is idx+1
  const [selectedProject, selectProject] = React.useState(0);

  return (
    <AnimatePresence /*mode="wait"*/>
      <ContentContainer>
        <h1>Projects</h1>
        <div id="project-list">
          {projectList.map((itm, i) => {
            const project = projects[itm];
            const select = () => selectProject(i+1);
            return (
              <div
                key={i}
                className={"single-project" + (i === 0 ? " featured" : "")}
              >
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

                <p>{project.short}</p>

                {/* need screenshot or some small image, maybe favicon */}

                <ProjectLinksAndInfo>
                  <div className="links">
                    {project.links.deployed && (
                      <a href={project.links.deployed} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt color="black" size={28} />
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub color="black" size={31} />
                      </a>
                    )}
                  </div>

                  <p className="readmore" onClick={select}>Read more</p>
                </ProjectLinksAndInfo>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </AnimatePresence>
  );
}
