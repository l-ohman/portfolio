import React from "react";
import styled from "styled-components";
import colors from "../../colors.json";

const projectMb = "2rem";
const Project = styled.div`
  /* border: 1px solid red; */
  width: 95%;
  margin: 0 auto;
  border-radius: 12px;
  > div {
    box-shadow: 1px 1px 9px rgba(0, 0, 0, 0.15);
    height: calc(100% - ${projectMb});
    background: ${colors.light};
    border-radius: 12px;
    margin-bottom: ${projectMb};
    padding-bottom: 14px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    > * {
      padding: 2px 12px;
    }
    img {
      padding: 0;
      margin-bottom: 6px;
    }
  }
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

export default function SmallProject(props) {
  return (
    <Project>
      <div>
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
          <a href={props.github} target="_blank">
            View Github
          </a>
        )}
      </div>
    </Project>
  );
}
