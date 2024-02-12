import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectContainer = styled.div`
  max-width: 100vw;
  min-width: 375px;
`;

const Divider = styled.hr`
  min-width: 100%;
  border: 1px solid black;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  * {
    font-family: "Krona One", Arial, sans-serif;
    /* centered for mobile view */
    text-align: center;
    margin: 0 auto;
  }
`;

const ProjectName = styled.h2`
  font-size: 1.75rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const DateRange = styled.p``;
const Descriptions = styled.div``;

const TechnologyList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const SingleTechnology = styled.p`
  background: #44646e;
  width: fit-content;
  color: white;
  padding: 5px 10px;
  border-radius: calc(1rem + 4px);
  margin: 1px 2px 2px;
`;

const ProjectLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ProjectLink = styled.a`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 7px;
  p {
    font-family: "Krona One", Arial, sans-serif;
  }

  padding: 0.3rem 0.75rem;
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
      {/* PROJECT TITLE AND DATE */}
      <ProjectHeader>
        <div>
          <ProjectName>{title}</ProjectName>
          <DateRange>
            {dateEnd ? `${dateStart}—${dateEnd}` : dateStart}
          </DateRange>
        </div>
      </ProjectHeader>

      <hr />

      {/* PROJECT IMAGES */}
      <ImageContainer>
        {images.map(({ src, alt }, idx) => (
          <SingleImage key={idx} src={src} alt={alt} />
        ))}
      </ImageContainer>

      {/* PROJECT DESCRIPTION */}
      <Descriptions>{children}</Descriptions>

      <Divider />

      {/*       
      <TechnologyList>
        {technologies.map((tech, idx) => (
          <SingleTechnology key={tech + idx}>{tech}</SingleTechnology>
        ))}
      </TechnologyList> */}
      {/* from a design perspective -- might be easier to display techs with logos */}

      {/* PROJECT LINKS */}
      <ProjectLinksContainer>
        {deploymentLink && (
          <ProjectLink
            href={deploymentLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>site</p>
            <FaExternalLinkAlt size={20} />
          </ProjectLink>
        )}
        {githubLink && (
          <ProjectLink
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>github</p>
            <FaGithub size={23} />
          </ProjectLink>
        )}
      </ProjectLinksContainer>
    </ProjectContainer>
  );
}
