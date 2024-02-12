import React from "react";
import ProjectContainer from "../ProjectContainer";
import styled from "styled-components";

const ImageContainer = styled.div`
  margin-top: 1.5rem;
  max-width: 100%;
  img {
    width: 100%;
  }
`;

export default function Tusk() {
  return (
    <ProjectContainer
      title="Tusk"
      technologies={[
        "Node.js",
        "React",
        "Redux",
        "Express",
        "PostgreSQL",
        "GraphQL",
      ]}
      dateStart="September 2022"
      dateEnd="July 2023"
      deploymentLink="https://l-ohman.github.io/tusk-d2/"
      githubLink="https://github.com/l-ohman/tusk-d2"
    >
      <p className="description">
        Tusk is a tool to analyze complex hero matchups in Dota 2. Users can
        pick and ban heroes for either team and view detailed information about
        the matchups between them. All data used in this project comes from the
        free{" "}
        <a
          href="https://stratz.com/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stratz GraphQL API.
        </a>
      </p>
      <ImageContainer>
        <img
          src="https://raw.githubusercontent.com/l-ohman/portfolio/main/src/images/screenshots/tusk-01.png"
          alt="Tusk hero selection view"
        />
        <img
          src="https://raw.githubusercontent.com/l-ohman/portfolio/main/src/images/screenshots/tusk-03.png"
          alt="Tusk matchup analyzer"
        />
      </ImageContainer>
    </ProjectContainer>
  );
}
