import styled from "styled-components";
import colors from "../../../colors.json";

const ProjectLinksAndInfo = styled.div`
  height: 3em;
  width: 100%;
  margin: 0.25em auto 0.45em;

  display: flex;
  justify-content: center;
  align-items: center;

  .links {
    padding-top: 3px;
    margin-left: 0;
    display: flex;
    justify-content: center;
    > * {
      margin: 0 7px;
    }

    .single-link {
      transition: background-color 0.07s linear 0s;

      background-color: ${colors.accent};
      padding: 0.3em 0.75em 0.45em;
      border-radius: 1.1em;
      display: flex;
      align-items: center;
      text-decoration: none;
      overflow: hidden;
      p {
        margin-right: 0.4em;
        padding-top: 0.2em;
        color: white;
      }
      a {
        color: white;
      }

      &:hover,
      &:active {
        background-color: ${colors.accent2};
      }
    }
    .min-txt {
      display: none;
    }
    @media screen and (max-width: 400px) {
      .single-link {
        .min-txt {
          display: block;
          margin-right: 9px;
        }
        .full-txt {
          display: none;
        }
      }
    }
  }
`;

export default ProjectLinksAndInfo;
