import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectContainer = styled.div`
  max-width: 100vw;
  min-width: 359px;
  padding: 0 8px 30px;
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
  margin: 1.75rem auto;
`;
// todo
const ReadMore = styled.p`
  text-decoration: underline;
  font-style: italic;
  font-weight: 300;
  margin: 0.5rem 0 0.25rem;
`;

const TechnologyList = styled.div`
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
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 7px;
  p {
    font-family: "Krona One", Arial, sans-serif;
  }
`;

// should be in a separate file probably, if adding carousel?
const ImageContainer = styled.div``;
const SingleImage = styled.img`
  overflow: hidden;
  max-width: 100%;
`;

export default function SingleProject({
  title = "",
  images = [],
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

      {/* PROJECT DESCRIPTION */}
      <Descriptions>
        {children}

        {/* todo: make "readmore" conditional if app has more info */}
        <ReadMore>Read more</ReadMore>
      </Descriptions>

      {/* PROJECT IMAGES */}
      <ImageContainer>
        {images.map(({ src, alt }, idx) => (
          <SingleImage key={idx} src={src} alt={alt} />
        ))}
      </ImageContainer>

      {/* PROJECT LINKS */}
      <ProjectLinksContainer>
        {deploymentLink && (
          <ProjectLink
            href={deploymentLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>open site</p>
            <FaExternalLinkAlt size={20} />
          </ProjectLink>
        )}
        {githubLink && (
          <ProjectLink
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>view on github</p>
            <FaGithub size={23} />
          </ProjectLink>
        )}
      </ProjectLinksContainer>
    </ProjectContainer>
  );
}
