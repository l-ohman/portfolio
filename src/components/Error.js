import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorContainer = styled.div`
  margin-top: 1.4em;
  text-align: center;
  * {
    margin: 0.3em 0;
  };
  a {
    color: black;
    margin: 0;
    padding: 0;
  }
`;

const Return = styled.p`
  font-size: 0.95em;
  font-style: italic;
  text-decoration: underline;
  margin-top: 1em;
`;

export default function Error({ is404 }) {
  return(
    <ErrorContainer>
      {is404 ? (
        <>
          <h2>404 Error</h2>
          <p>Sorry, that page does not exist!</p>
          <Link to="/">
            <Return>Return to homepage</Return>
          </Link>
        </>
        ) : (
          <>
            <h2>500 Error</h2>
            <p>Internal server error</p>
          </>
        )}
    </ErrorContainer>
  )
}
