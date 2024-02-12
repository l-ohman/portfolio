import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const sidePadding = 12;
const ProjectContainer = styled.div`
  max-width: 100vw;
  min-width: ${375 - sidePadding * 2}px;
  padding: 0 ${sidePadding}px 3rem;
  img {
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  * {
    font-family: "Krona One", Arial, sans-serif;
  }
`;

const ProjectName = styled.h2`
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const DateRange = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
const Descriptions = styled.div`
  margin: 0 auto;

  .read-more {
    /* currently unused */
    text-decoration: underline;
    font-style: italic;
    font-weight: 300;
    margin: 0.5rem 0 0.25rem;
  }
`;

const TechnologyList = styled.div`
  margin: 0 auto 1.5rem;
  display: flex;
  flex-flow: row wrap;
`;
const SingleTechnology = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  background: #44646e;
  width: fit-content;
  color: white;
  padding: 3px 6px;
  margin: 1px 2px 2px;
`;

const ProjectLinksContainer = styled.div`
  margin: 1rem 0 1rem;
`;

const ProjectLink = styled.a`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 7px;
  .github-link {
    margin-left: -2px;
  }
`;

export default function SingleProject({
  title = "",
  technologies = [],
  dateStart = "",
  dateEnd = "",
  githubLink = "",
  deploymentLink = "",
  children,
}) {
  return (
    <ProjectContainer>
      <hr />
      {/* PROJECT TITLE AND DATE */}
      <ProjectHeader>
        <div>
          <ProjectName>{title}</ProjectName>
          <DateRange>
            {dateEnd ? `${dateStart}—${dateEnd}` : dateStart}
          </DateRange>
        </div>
      </ProjectHeader>

      {/* TECHNOLOGY LIST */}
      <TechnologyList>
        {technologies.map((tech, idx) => (
          <SingleTechnology key={tech + idx}>{tech}</SingleTechnology>
        ))}
      </TechnologyList>

      {/* PROJECT DESCRIPTION AND IMAGES */}
      <Descriptions>{children}</Descriptions>

      {/* PROJECT LINKS */}
      <ProjectLinksContainer>
        {deploymentLink && (
          <ProjectLink
            href={deploymentLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt size={20} />
            <p>Open site</p>
          </ProjectLink>
        )}
        {githubLink && (
          <ProjectLink
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
            <p className="github-link">View on Github</p>
          </ProjectLink>
        )}
      </ProjectLinksContainer>
    </ProjectContainer>
  );
}
