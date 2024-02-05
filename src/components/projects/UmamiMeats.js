import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import images from "../../images";
import ProjectContainer from "../ProjectContainer";

export default function UmamiMeats() {
  return (
    <ProjectContainer
      title="Umami Meats"
      images={[{ src: images.umamiMeats.main, alt: "Umami Meats homepage" }]}
      technologies={["Node.js", "Next.js", "React", "Redux", "PostgreSQL"]}
      dateStart="September 2022"
      githubLink="https://github.com/dexters-lab-fsa-2208/umami-meats"
    >
      <p>
        Umami Meats is an ecommerce site that sells a small variety of
        high-quality steak and sushi. This project was built in roughly 10 days
        for the 'Grace Shopper' project at Fullstack Academy.
      </p>
      {/* <p>
        The vast majority of my time on this project was spent designing and
        building the frontend. At the very beginning of the project, I drew the
        wireframes for nearly every page; these proved to be invaluable, as they
        greatly sped up our process and ensured visual consistency throughout
        the entire application. Once we had built the foundation for each page,
        I revised much of the styling and added subtle animations to construct a
        user experience that is both aesthetically pleasing and extremely clear.
      </p> */}
    </ProjectContainer>
  );
}
