import React from "react";
import styled from "styled-components";
import colors from "../colors.json";
// import images from "../images";

const HeroContainer = styled.div`
  padding: 2em 0.7em 0.7em;
  /* overflow: hidden; */
  #page-header {
    width: 100%;
    text-align: center;
    font-size: 200%;
    margin-bottom: 0.4em;
    @media screen and (min-width: 650px) {
      font-size: 250%;
      margin-bottom: 0;
    }
  }
  .headshot-picture {
    display: block;
    margin: 0 auto;
    /* border-radius: 1em; */
    max-width: 150px;
    max-height: 150px;
  }
  #hero-main {
    #horizontal-img {
      /* display: none; */
    }
    #bio {
      width: 100%;
      text-align: justify;
      background: ${colors.secondary};
      border-radius: 1em;
      padding: 1em;
    }

    @media screen and (min-width: 650px) {
      margin: 1.2em 3em 0;
    }
    @media screen and (min-width: 550px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      #bio {
        width: 60%;
        padding: 0.9em 0 0;
        p {
          padding: 0.3em 2em 1.2em;
        }
      }
      .headshot-picture {
        max-width: 230px;
        max-height: 230px;
      }
    }
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <h1 id="page-header">Hi, I'm Jake.</h1>
      <div id="hero-main">
        <div id="bio">
          <p>
            I am a fullstack developer currently based in Texas, where I was
            born and raised. As a recent graduate of Fullstack Academy, I am
            very curious and excited to work on new projects — especially those
            related to music, mathematics, and education. My main goal at the
            moment is to learn as much as possible, so I am looking for any
            employment opportunities where I can work on a team and grow as a
            developer.
          </p>
        </div>
        {/* <img
          src={images.headshot}
          alt="My smile when my code runs with no bugs"
          className="headshot-picture"
          id="horizontal-img"
        /> */}
      </div>
    </HeroContainer>
  );
}
