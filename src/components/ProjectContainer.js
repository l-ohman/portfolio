import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

// ok
const ProjectContainerContainer = styled.div`
  border: 2px solid pink;
`;

const ProjectName = styled.h2``;
const DateRange = styled.p``;
const Descriptions = styled.div``;

export default function ProjectContainer({
  title = "",
  technologies = [],
  dateStart = "",
  dateEnd = "",
  githubLink = "",
  deploymentLink = "",
  children,
}) {
  return (
    <ProjectContainerContainer>
      <ProjectName>{title}</ProjectName>
      <DateRange>
        {dateStart}—{dateEnd}
      </DateRange>
      <hr />

      <Descriptions>{children}</Descriptions>
    </ProjectContainerContainer>
  );
}
