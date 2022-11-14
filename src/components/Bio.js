import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const HomeContainer = styled.div`
  text-align: justify;
  * {
    margin: 1em 0;
  }
  h1 {
    text-align: center;
  }
`;

export default function Bio() {
  const bio = useSelector((state) => state.bio);

  return (
    <HomeContainer>
      <h1>{bio.header}</h1>
      <p>{bio.main}</p>
      <p>{bio.secondary}</p>
    </HomeContainer>
  );
}
