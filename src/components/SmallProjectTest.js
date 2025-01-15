import React from "react";
import styled from "styled-components";
import colors from "../colors.json";

const ProjectsContainer = styled.div`
  border: 1px solid yellow;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

export default function SmallProjectsContainer() {
  return (
    <ProjectsContainer>
      <SmallProjectItem
        title={"Playerbase"}
        image1={"/projects/rd2l-01.png"}
        image2={"/projects/rd2l-01.png"}
        blurb={
          "Web application for running live auctions for amateur e-sports leagues directly in the browser."
        }
        site={"https://playerbase.fun/"}
        github={null}
        technologies={[
          "Typescript",
          "Next.js",
          "Material UI",
          "socket.io",
          "Redis",
          "Django",
          "Docker",
        ]}
      />
    </ProjectsContainer>
  );
}

const Project = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.light};
  border-radius: 12px;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
`;

const Title = styled.h2`
  font-family: "Quicksand", sans-serif;
  font-size: 2rem;
`;

const Technologies = styled.div`
  width: fit-content;
  margin: 0.2em auto;
  display: flex;
  flex-flow: row wrap;
  gap: 4px 6px;

  > div {
    background: ${colors.accent};
    color: white;
    width: fit-content;
    font-size: 0.97em;
    padding: 0.25em 0.6em;
    border-radius: 0.9em;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.08);
  }
`;

function SmallProjectItem(props) {
  return (
    <Project>
      <ImageContainer src={props.image1} />
      <Title>{props.title}</Title>
      <p>{props.blurb}</p>

      <Technologies>
        {props.technologies.map((tech, i) => (
          <div key={`${tech}_${i}`}>{tech}</div>
        ))}
      </Technologies>

      {props.site && (
        <a href={props.site} target="_blank">
          View Site
        </a>
      )}
      {props.github && (
        <a href={props.Github} target="_blank">
          View Github
        </a>
      )}
    </Project>
  );
}
