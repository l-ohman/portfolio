import React from "react";
import ProjectContainer from "../ProjectContainer";
import styled from "styled-components";

// todo: add new images, and hover system for alt text
const ImageContainer = styled.div`
  margin-top: 1.5rem;
  max-width: 100%;
  img {
    width: 100%;
  }
`;

export default function Playerbase() {
  return (
    <ProjectContainer
      title="Playerbase"
      technologies={[
        "Typescript",
        "Python",
        "Next.js",
        "Django",
        "Docker",
        "Web Sockets",
        "Material UI",
        "Redis",
      ]}
      dateStart="May 2023"
      dateEnd="Present"
      deploymentLink="https://playerbase.fun/"
      hasLongVersion={true}
    >
      <ShortDescription />
      <ImageContainer>
        <img
          src="https://raw.githubusercontent.com/l-ohman/portfolio/main/src/images/screenshots/rd2l-01.png"
          alt="Live Playerbase auction from a bidder's perspective"
        />
      </ImageContainer>
    </ProjectContainer>
  );
}

// Placeholder until single project view is complete

const ShortDescription = () => {
  return (
    <p>
      Playerbase is an application that runs seasonal auction drafts for various
      amateur and professional Dota 2 leagues, directly in the browser via web
      sockets. So far, we have run 15 auctions for 3 different clients,
      resulting in over 150 unique teams.
    </p>
  );
};

const LongDescription = () => {
  return (
    <p>
      Playerbase is a large project that I am building alongside 2 very
      experienced engineers to support the needs of amateur Dota 2 leagues. We
      have created an application that, using web sockets, runs live auction
      drafts where team captains can bid on players to build their rosters for
      upcoming seasons. So far we have run 11 auctions in total: 9 for{" "}
      <a href="https://rd2l.gg/" target="_blank" rel="noopener noreferrer">
        RD2L (Reddit Dota 2 League)
      </a>
      , and 2 for{" "}
      <a href="https://nadcl.us/" target="_blank" rel="noopener noreferrer">
        NADCL (North American Dota 2 Challenger's League)
      </a>
      . Currently, we are still expanding this project to support more unique
      features and host other amateur leagues.
    </p>
  );
};
