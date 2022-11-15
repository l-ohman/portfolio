import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FaUserAlt, FaUserFriends } from "react-icons/fa";

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
      margin: 0.2em 0;
      padding: 0.2em 0.2em 3.1em;

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
    .readmore {
      border: 1px solid purple;

      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 0.96em;
      font-style: italic;

      margin: 0 0.5em 0.5em;
      padding: 0.43em 0.88em 0.33em 0.79em;
      border-radius: 40% 10% 40% 10%;
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

export default function Projects() {
  const projects = useSelector((state) => state.projects);
  const projectList = Object.keys(projects);
  console.log(projects["book-beasts"]);

  return (
    <ContentContainer>
      <h1>Projects</h1>
      <div id="project-list">
        {/* first project should be prioritized - maybe just larger in some way */}

        {projectList.map((itm, i) => {
          const project = projects[itm];
          return (
            <div
              key={i}
              className={"single-project" + (i === 0 ? " featured" : "")}
            >
              <div className="single-project-header">
                <h2>{project.title}</h2>
                {project.solo ? (
                  <FaUserAlt size={16} className="solo-team-icon" />
                ) : (
                  <FaUserFriends size={23} className="solo-team-icon" />
                )}
              </div>

              <TagContainer>
                {project.tags.map((tag, i) => (
                  <p key={i} className="tag">
                    {tag}
                  </p>
                ))}
              </TagContainer>

              <p>{project.short}</p>

              {/* screenshot or some small image */}

              {/* list a few of the technologies, maybe some tags */}

              {/* deployed + github links */}

              {/* "Read more" button */}
              <p className="readmore">Read more</p>
            </div>
          );
        })}
      </div>
    </ContentContainer>
  );
}
