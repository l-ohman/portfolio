import React from "react";
import ProjectContainer from "../ProjectContainer";
import styled from "styled-components";

// todo: crop images to be same height
const ImageContainer = styled.div`
  margin-top: 1.5rem;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    width: 49%;
    object-fit: cover;
  }
`;

export default function UmamiMeats() {
  return (
    <ProjectContainer
      title="Umami Meats"
      technologies={["Node.js", "Next.js", "React", "Redux", "PostgreSQL"]}
      dateStart="September 2022"
      githubLink="https://github.com/dexters-lab-fsa-2208/umami-meats"
    >
      <p>
        Umami Meats is an ecommerce site that sells a small variety of
        high-quality steak and sushi. This project was built in roughly 10 days
        for the 'Grace Shopper' project at Fullstack Academy.
      </p>
      <ImageContainer>
        <img
          src="https://raw.githubusercontent.com/l-ohman/portfolio/main/src/images/screenshots/umami-meats-0.png"
          alt="Umami Meats homepage"
        />
        <img
          src="https://raw.githubusercontent.com/l-ohman/portfolio/main/src/images/screenshots/umami-meats-1.png"
          alt="Umami Meats cart view"
        />
      </ImageContainer>
    </ProjectContainer>
  );
}
