import React from "react";
import styled from "styled-components";
import colors from "../colors.json";

const ContentContainer = styled.div`
  text-align: justify;
  background: ${colors.secondary};
  border-radius: 1em;
  padding: 1.1em 0 0.2em;
  p {
    padding: 0.3em 2em 1.2em;
  }
  h1 {
    font-size: 150%;
    margin: 0.3em;
    padding: 0 0.7em;
    text-align: center;
  }
`;

export default function Bio() {
  return (
    <ContentContainer>
      {/* <h1>about me</h1> */}
      <p>
        I am a Fullstack Software Engineer from Texas. As a recent graduate of
        Fullstack Academy, I am very curious and excited to work on new projects
        — especially those related to music, mathematics, and outer space. My
        main goal at the moment is to learn and grow as a developer as much as
        possible.
      </p>
      <p>
        My main priorities are accessibility and maintainability. When working
        on the user-side of things, I prioritize simplicity and clarity; but on
        the developer-side, I focus on writing readable code that can be easily
        understood and revised by the next developer.
      </p>
    </ContentContainer>
  );
}
