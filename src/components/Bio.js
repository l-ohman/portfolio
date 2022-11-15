import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ContentContainer = styled.div`
  text-align: justify;
  border: 1px solid blue;
  padding: 0 0.7em;
  * {
    margin: 1em 0;
    border: 1px solid red;
  }
  h1 {
    text-align: center;
  }
`;

export default function Bio() {
  const bio = useSelector((state) => state.bio);

  return (
    <ContentContainer>
      <h1>{bio.header}</h1>
      <p>{bio.main}</p>
      <p>{bio.secondary}</p>
    </ContentContainer>
  );
}
