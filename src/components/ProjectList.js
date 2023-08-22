import React from "react";
import styled from "styled-components";
import {
  BookBeasts,
  SolarSandbox,
  UmamiMeats,
  Tusk,
  RD2LAuction,
} from "./projects";
import colors from "../colors.json";

const ContentContainer = styled.div`
  padding: 1.1em 1em 0.6em;
  background: ${colors.backgroundSecondary};
  color: black;

  h1 {
    font-size: 260%;
    text-align: center;
    margin-bottom: 0.3em;
  }
  @media screen and (min-width: 650px) {
    padding: 0.6em 1em 0.1em;
    > h1 {
      font-size: 285%;
      margin: 0;
      padding: 0.4em 0.7em 0.2em;
    }
    #project-list {
      padding: 0.8em 1em 1em;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }
  }
`;

const ProjectContainer = styled.div`
  background: ${colors.light};
  color: black;
  width: 100%;
  max-width: 1000px;

  margin: 0.2em auto 2em;
  padding: 0.2em 0.9em;
  border-radius: 0.5em;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.09);

  .single-project-header {
    display: flex;
    align-items: center;
    text-shadow: 2px 1px 5px rgba(0, 0, 0, 0.05);
    width: fit-content;
    margin: 0.3em auto 0.15em;

    .project-title {
      font-size: 190%;
    }
    .project-icon {
      width: 29px;
      max-height: 29px;
      margin: 0 0 0 8px;
      border-radius: 50%;
      box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.1);
    }

    @media screen and (min-width: 650px) {
      margin: 0.3em auto 0.25em;
      .project-title {
        font-size: 210%;
      }
      .project-icon {
        width: 34px;
        max-height: 34px;
        margin: 0 0 0px 9px;
      }
    }
  }

  hr {
    width: 97%;
    margin: 0.3em auto;
    &#header-divider {
      width: 100%;
      margin: 0.9em auto 0;
      /* max-width: 700px; */
    }
  }

  @media screen and (min-width: 650px) {
    padding: 0.8em 1.6em 0.2em;
    > * {
      margin-left: 0.2em;
    }
  }
`;

export default function ProjectList() {
  return (
    <ContentContainer>
      <h1>recent work</h1>
      <div id="project-list">
        <ProjectContainer>
          <RD2LAuction />
        </ProjectContainer>

        <ProjectContainer>
          <UmamiMeats />
        </ProjectContainer>

        <ProjectContainer>
          <SolarSandbox />
        </ProjectContainer>

        <ProjectContainer>
          <BookBeasts />
        </ProjectContainer>

        <ProjectContainer>
          <Tusk />
        </ProjectContainer>
      </div>
    </ContentContainer>
  );
}
