import React from "react";
import ProjectContainer from "../ProjectContainer";
import styled from "styled-components";

const ImageContainer = styled.div`
  margin-top: 1.5rem;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    width: 49%;
  }
`;

export default function BookBeasts() {
  return (
    <ProjectContainer
      title="Book Beasts"
      technologies={[
        "Node.js",
        "Express",
        "PostgreSQL",
        "React",
        "Redux",
        "Mocha",
      ]}
      dateStart="October 2022"
      githubLink="https://github.com/fsa-2208-mspiggy/Book-Beasts"
    >
      <p>
        Book Beasts, my team's capstone project at Fullstack Academy, is a
        uniquely educational and highly interactive platform where children and
        students can write their own story books. Additionally, it provides
        parents and instructors with the necessary tools to monitor and manage
        their students' works.
      </p>
      <ImageContainer>
        <img
          src="https://raw.githubusercontent.com/l-ohman/portfolio/main/src/images/screenshots/book-beasts-1.png"
          alt="Book Beasts student dashboard"
        />
        <img
          src="https://raw.githubusercontent.com/l-ohman/portfolio/main/src/images/screenshots/book-beasts-2.png"
          alt="Book Beasts book edit view"
        />
      </ImageContainer>
    </ProjectContainer>
  );
}
