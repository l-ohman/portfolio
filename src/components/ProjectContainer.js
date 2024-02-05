import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectContainer = styled.div`
  /* border: 2px solid pink; */
  padding: 2px;
  hr {
    /* hmmm */
    min-width: 100%;
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
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const DateRange = styled.p``;
const Descriptions = styled.div``;

const ProjectLink = styled.p`
  font-size: 1.1rem;
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
      <ProjectHeader>
        <div>
          <ProjectName>{title}</ProjectName>
          <DateRange>
            {dateEnd ? `${dateStart}—${dateEnd}` : dateStart}
          </DateRange>
        </div>

        <div>
          {deploymentLink && (
            <a href={deploymentLink} target="_blank" rel="noopener noreferrer">
              <ProjectLink>site</ProjectLink>
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <ProjectLink>github</ProjectLink>
            </a>
          )}
        </div>
      </ProjectHeader>
      <hr />

      <ImageContainer>
        {images.map(({ src, alt }, idx) => (
          <SingleImage key={idx} src={src} alt={alt} />
        ))}
      </ImageContainer>

      <Descriptions>{children}</Descriptions>
    </ProjectContainer>
  );
}
