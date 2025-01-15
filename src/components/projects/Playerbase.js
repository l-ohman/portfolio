import React from "react";
import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";
import images from "../../images";
import ProjectLinksAndInfo from "./styled/ProjectLinksAndInfo";
import TechnologiesContainer from "./styled/TechnologiesContainer";

const iconColor = "white";
const imageRadius = 5;

const DescriptionImagesContainer = styled.div`
  .description {
    font-size: 1.04em;
    margin: 0.6em 0.3em 0.9em;
    text-align: justify;
  }
  @media screen and (min-width: 650px) {
    .description {
      font-size: 1.1em;
    }
  }

  img {
    max-width: 48%;
    height: fit-content;
    object-fit: contain;
    border-radius: ${imageRadius + "px"};
    box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.07);
  }

  #rd2l-image-container {
    margin: 0.5em 0 0.7em;
    img {
      display: block;
      height: 500px;
      min-width: 100%;
      margin: 0;
      padding: 0;
      object-fit: cover;
      box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.07);
    }

    img {
      border-radius: ${imageRadius + "px"};
      object-position: 0px 0px;
      max-height: 600px;
    }
    /* img:last-child {
      margin: 8px 0 15px;
      border-radius: ${imageRadius + "px"};
      object-position: 50% 0%;
      max-height: 450px;
    } */

    @media screen and (max-width: 600px) {
      img {
        max-height: 350px;
      }
    }
    @media screen and (min-width: 930px) {
      img {
        object-position: 50% 0px;
      }
    }
  }
`;

export default function RD2LAuction() {
  const technologies = [
    "Typescript",
    "Next.js",
    "Material UI",
    "socket.io",
    "Redis",
    "Django",
    "Docker",
  ];

  return (
    <>
      <div className="single-project-header">
        <h2 className="project-title">Playerbase</h2>
      </div>

      <TechnologiesContainer>
        <div id="tech-list">
          {technologies.map((tech, i) => (
            <p className="tag" key={i}>
              {tech}
            </p>
          ))}
        </div>
      </TechnologiesContainer>
      <hr id="header-divider" />

      <DescriptionImagesContainer>
        <p className="description">
          Playerbase is a large project that I am building alongside 2 very
          experienced engineers to support the needs of amateur Dota 2 leagues.
          We have created an application that, using web sockets, runs live
          auction drafts where team captains can bid on players to build their
          rosters for upcoming seasons. So far we have run 6 auctions in total:
          4 for{" "}
          <a href="https://rd2l.gg/" target="_blank" rel="noopener noreferrer">
            RD2L (Reddit Dota 2 League)
          </a>
          , and 2 for{" "}
          <a href="https://nadcl.us/" target="_blank" rel="noopener noreferrer">
            NADCL (North American Dota 2 Challenger's League)
          </a>
          . Currently, we are still expanding this project to support more
          unique features and host other amateur leagues.
        </p>

        {/* <p className="description">{`Any data that a captain would need is accessible easily in the interface—whether it's a specific piece of data about remaining players, the gold that their competitors have left to draft with, or even the average rating of their own roster, all can easily be found in the dense but intuitive menu.`}</p> */}

        <div id="rd2l-image-container">
          <img src={images.rd2l.main} alt={`Playerbase Auction screenshot`} />
          {/* <img src={images.rd2l.secondary} alt={`rd2l screenshot`} /> */}
        </div>
      </DescriptionImagesContainer>

      <hr />

      <ProjectLinksAndInfo>
        <div className="links">
          <a
            href="https://nadcl.playerbase.fun/auction/9"
            target="_blank"
            rel="noopener noreferrer"
            className="single-link"
          >
            <p className="full-txt">View Site</p>
            <p className="min-txt">Deployed</p>
            <FaExternalLinkAlt color={iconColor} size={20} />
          </a>
        </div>
      </ProjectLinksAndInfo>
    </>
  );
}
