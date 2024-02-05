import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import images from "../../images";
import ProjectContainer from "../ProjectContainer";

export default function SolarSandbox() {
  return (
    <ProjectContainer
      title="Solar Sandbox"
      images={[
        { src: images.solarSandbox.main, alt: "Solar Sandbox screenshot 1" },
        {
          src: images.solarSandbox.secondary,
          alt: "Solar Sandbox screenshot 2",
        },
      ]}
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
        was built in about 4 days for our 'Async Week' project at Fullstack
        Academy.
      </p>
    </ProjectContainer>
  );
}
