import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import images from "../../images";
import ProjectContainer from "../ProjectContainer";

export default function BookBeasts() {
  return (
    <ProjectContainer
      title="Book Beasts"
      images={[
        { src: images.bookBeasts.main, alt: "Book Beasts student view" },
      ]}
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
        For our final project at Fullstack Academy, my team and I wanted to
        build an educational and interactive experience for children - so we
        built Book Beasts. This project had two main goals: the first was to
        enable students’ creativity by giving them a platform to create, and the
        second was to provide instructors with the tools necessary to monitor
        and manage their students’ works.
      </p>
    </ProjectContainer>
  );
}
