import React from "react";
import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";
import images from "../../images";
import ProjectContainer from "../ProjectContainer";

export default function Playerbase() {
  return (
    <ProjectContainer
      title="Playerbase"
      images={[{ src: images.rd2l.main, alt: "Playerbase Auction screenshot" }]}
      technologies={[
        "Typescript",
        "Python",
        "Next.js",
        "Django",
        "Web Sockets",
        "Material UI",
        "Redis",
        "Docker",
      ]}
      dateStart="May 2023"
      dateEnd="Present"
      deploymentLink="https://playerbase.fun/"
    >
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
    </ProjectContainer>
  );
}
