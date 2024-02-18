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

export default function SolarSandbox() {
  return (
    <ProjectContainer
      title="Solar Sandbox"
      technologies={[
        "React",
        "React Flow",
        "Three.js",
        "React Three Fiber",
        "Zustand",
      ]}
      dateStart="September 2022"
      dateEnd="January 2023"
      deploymentLink="https://solar-sandbox.vercel.app/"
      githubLink="https://github.com/l-ohman/solar-sandbox"
    >
      <p>
        Solar Sandbox is an interactive application where users can design their
        own solar system from scratch. Users can build their own system of
        planets and moons with a 3D view that updates in realtime. This project
        was built in roughly 4 days for our solo 'Async Week' project at
        Fullstack Academy.
      </p>
      <ImageContainer>
        <img
          src="https://raw.githubusercontent.com/l-ohman/portfolio/main/src/images/screenshots/solar-sandbox-1a.jpg"
          alt="Node graph editor in Solar Sandbox"
          title="Node graph editor in Solar Sandbox"
        />
        <img
          src="https://raw.githubusercontent.com/l-ohman/portfolio/main/src/images/screenshots/solar-sandbox-1b.jpg"
          alt="3D view of a solar system in Solar Sandbox"
          title="3D view of a solar system in Solar Sandbox"
        />
      </ImageContainer>
    </ProjectContainer>
  );
}
