import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  border: 1px solid blue;
  
  margin-top: 3.5em;
  padding: 0 0.7em;
  h1 {
    border: 1px solid red;
    width: fit-content;
    margin: 1em auto;
    /* text-align: center; */
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <h1>Hi, I'm Jake.</h1>
    </HeroContainer>
  );
}
