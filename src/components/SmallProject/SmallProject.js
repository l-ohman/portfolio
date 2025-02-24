import React from "react";
import styled from "styled-components";
import colors from "../../colors.json";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import FloatIn from "../animators/FloatIn";

const projectMb = "36px";
const Project = styled.div`
  /* border: 1px solid red; */
  width: 92%;
  margin: 0 auto;
  border-radius: 12px;
  > div {
    height: 100%;
  }
  > div > div {
    box-shadow: 1px 1px 9px rgba(0, 0, 0, 0.15);
    height: calc(100% - ${projectMb});
    background: ${colors.light};
    border-radius: 12px;
    margin-bottom: ${projectMb};
    padding-bottom: 14px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    /* img and title -- this div anchors title to top of group*/
    > :nth-child(1) {
      margin-bottom: 0.25rem;
      padding: 0;
      /* title */
      > :nth-child(2) {
        padding: 4px 18px 0;
      }
    }

    > * {
      padding: 8px 18px;
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
  object-position: ${(props) => props.objectPosition};
  border-radius: 12px 12px 0 0;
`;

const Title = styled.h2`
  font-family: "Quicksand", sans-serif;
  font-size: 1.9rem;
`;

const Technologies = styled.div`
  width: fit-content;
  margin: auto auto 0.2em;
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

const Links = styled.div`
  margin-left: 0.3rem;
  display: flex;
  > * {
    margin-right: 1.15rem;
  }
  a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 0.35rem;

    text-decoration: none;
    > span {
      text-decoration: underline;
    }
  }
`;

const DetailText = styled.p`
  font-style: italic;
`;

export default function SmallProject(props) {
  return (
    <Project>
      <FloatIn>
        <div>
          <div>
            <ImageContainer
              src={props.image}
              alt={props.alt}
              title={props.alt}
              objectPosition={props.imageObjectPosition || "50% 50%"}
            />
            <Title>{props.title}</Title>
          </div>

          <p>{props.blurb}</p>

          <Technologies>
            {props.technologies.map((tech, i) => (
              <div key={`${tech}_${i}`}>{tech}</div>
            ))}
          </Technologies>

          {(props.site || props.github) && (
            <Links>
              {props.site && (
                <a href={props.site} target="_blank" rel="noopener noreferrer">
                  <span>View Site</span>{" "}
                  <FaExternalLinkAlt className="link-icon" />
                </a>
              )}
              {props.github && (
                <a
                  href={props.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Github</span>{" "}
                  <FaGithub size={19} className="github-icon" />
                </a>
              )}
            </Links>
          )}

          {props.detailText && <DetailText>{props.detailText}</DetailText>}
        </div>
      </FloatIn>
    </Project>
  );
}
