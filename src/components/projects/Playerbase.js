import React from "react";
import ProjectContainer from "../ProjectContainer";
import styled from "styled-components";

// todo: hover system for alt text (desktop only)
const ImageContainer = styled.div`
  margin-top: 1.5rem;
  max-width: 100%;
  img {
    width: 100%;
  }
`;

export default function Playerbase() {
  return (
    <>
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
        <p>
          Playerbase is an application that runs seasonal auction drafts for
          various amateur and professional Dota 2 leagues directly in the
          browser. So far we have run 15 auctions for 3 different clients,
          resulting in over 150 unique teams. Currently, we are still expanding
          this project to support more unique features, such as league
          management and fantasy.
        </p>
        <ImageContainer>
          <img
            src="https://raw.githubusercontent.com/l-ohman/portfolio/main/src/images/screenshots/playerbase-gunnar.png"
            alt="Gunnar, professional Dota 2 player, livestreams his perspective during a Playerbase auction to over 1,000 viewers on Twitch"
            title="Gunnar, a professional Dota 2 player, livestreams his perspective during a Playerbase auction"
          />
          <img
            src="https://raw.githubusercontent.com/l-ohman/portfolio/main/src/images/screenshots/playerbase-history-tab.png"
            alt="History tab during an ongoing Playerbase auction"
            title="History tab during an ongoing Playerbase auction"
          />
        </ImageContainer>
      </ProjectContainer>
    </>
  );
}
