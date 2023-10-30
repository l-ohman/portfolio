import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  padding: 3.5em 1em 2.45em;
  color: black;
  overflow: hidden;
  height: 80vh;
  position: relative;
  * {
    z-index: 5;
  }

  @media screen and (min-width: 650px) {
  }
`;

const Circle = styled.div`
  margin: 20px auto;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #2c2b70;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);

  /* overflow: hidden; */
  position: absolute;
  z-index: 1;
`;

const HeroText = styled.h1`
  color: black;
  font-size: 4rem;
  font-weight: 700;
  position: absolute;
`;

export default function Hero() {
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [windowSize, setWindowSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = (event) => {
      setWindowSize({ x: window.innerWidth, y: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const center = calculateCircleCenter(
    mousePos.x,
    mousePos.y,
    windowSize.x,
    windowSize.y
  );
  const radialGradient = createRadialGradient(center);

  return (
    <HeroContainer>
      <Circle style={{ background: radialGradient }} />
    </HeroContainer>
  );
}

function calculateCircleCenter(x, y, width, height) {
  let xPos = x / width;
  let yPos = y / height;
  // scale vals
  xPos = xPos * 0.2 + 0.4;
  yPos = yPos * 0.2 + 0.4;
  // conv to percents
  return `${xPos * 100}% ${yPos * 100}%`;
}

function createRadialGradient(str) {
  return `
    radial-gradient(
      rgba(0, 0, 0, 0) 10%,
      rgba(255, 255, 255, 0.2) 100%
    ),
    radial-gradient(
      ellipse at ${str},
      #6051aa 10%,
      #2c2b70 100%,
      #9198e5 250%
    )`;
}
