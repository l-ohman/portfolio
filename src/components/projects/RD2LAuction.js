import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import images from "../../images";
import colors from "../../colors.json";

const iconColor = "white";
const imageRadius = 5;

const TechnologiesContainer = styled.div`
  #tech-list {
    width: fit-content;
    margin: 0.2em auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .tag {
    background: ${colors.accent};
    color: white;

    width: fit-content;
    font-size: 0.97em;
    padding: 0.25em 0.6em;
    border-radius: 0.9em;
    margin: 0.2em 0.45em 0 0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.08);
    &:first-child {
      margin-left: 0.45em;
    }
  }
`;

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

    img:first-child {
      border-radius: ${imageRadius + "px"};
      object-position: 50% 0px;
      max-height: 600px;
    }
    /* img:last-child {
      margin: 8px 0 15px;
      border-radius: ${imageRadius + "px"};
      object-position: 50% 0%;
      max-height: 450px;
    } */

    @media screen and (max-width: 600px) {
      img:first-child {
        max-height: 395px;
      }
      /* img:last-child {
        object-position: 0% 0%;
        max-height: 200px;
      } */
    }
  }
`;

const ProjectLinksAndInfo = styled.div`
  height: 3em;
  width: 100%;
  margin: 0.25em auto 0.45em;

  display: flex;
  justify-content: center;
  align-items: center;

  .links {
    padding-top: 3px;
    margin-left: 0;
    display: flex;
    justify-content: center;
    > * {
      margin: 0 7px;
    }

    .single-link {
      transition: background-color 0.07s linear 0s;

      background-color: ${colors.accent};
      padding: 0.3em 0.75em 0.45em;
      border-radius: 1.1em;
      display: flex;
      align-items: center;
      text-decoration: none;
      overflow: hidden;
      p {
        margin-right: 0.4em;
        padding-top: 0.2em;
        color: white;
      }
      a {
        color: white;
      }

      &:hover,
      &:active {
        background-color: ${colors.accent2};
      }
    }
    .min-txt {
      display: none;
    }
    @media screen and (max-width: 400px) {
      .single-link {
        .min-txt {
          display: block;
          margin-right: 9px;
        }
        .full-txt {
          display: none;
        }
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
        <h2 className="project-title">RD2L Auction</h2>
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
        <p className="description">{`In RD2L, an amateur Dota 2 League, every season begins with a auction draft. I, alongside two very experienced engineers, built a web application that utilizes web sockets to run a live auction directly in the browser. Over the course of 1-3 hours, team captains can bid on players and slowly build up their rosters for the upcoming season. So far, we have successfully run 2 auctions with this application and filled 39 teams in the process. (There are 5 players per team, which comes out to 195 players in total!)`}</p>

        <p className="description">{`I was the lead UI/UX designer and frontend engineer on this project. When beginning this process, I understood that the functionality our clients were looking for necessitated an extremely complex UI in order to display a wide variety of information. However, it also needed to be straightforward so users could easily navigate and use the wealth of information provided to them. After many rounds of experimentation, feedback, and iteration, we had created an intricate but intuitive interface that was extremely well received by the users.`}</p>

        {/* <p className="description">{`Any data that a captain would need is accessible easily in the interface—whether it's a specific piece of data about remaining players, the gold that their competitors have left to draft with, or even the average rating of their own roster, all can easily be found in the dense but intuitive menu.`}</p> */}

        <div id="rd2l-image-container">
          <img src={images.rd2l.main} alt={`RD2L Auction screenshot`} />
          {/* <img src={images.rd2l.secondary} alt={`rd2l screenshot`} /> */}
        </div>
      </DescriptionImagesContainer>

      <hr />

      <ProjectLinksAndInfo>
        <div className="links">
          <a
            href="https://used-vessel-production.up.railway.app/auction/3"
            target="_blank"
            rel="noopener noreferrer"
            className="single-link"
          >
            <p className="full-txt">View Site</p>
            <p className="min-txt">Deployed</p>
            <FaExternalLinkAlt color={iconColor} size={20} />
          </a>
          <a
            href="https://github.com/cadenforrest/DotaLeagueSite"
            target="_blank"
            rel="noopener noreferrer"
            className="single-link"
          >
            <p className="full-txt">View on Github</p>
            <p className="min-txt">Github</p>
            <FaGithub color={iconColor} size={24} />
          </a>
        </div>
      </ProjectLinksAndInfo>
    </>
  );
}
