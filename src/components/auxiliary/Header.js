import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;

  margin: 0;
  padding: 0.5em 0.7em;
  width: 100%;
  background: darkblue;
  color: white;
  font-size: 1.05em;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  #header-links {
    margin: 0 auto;
    display: flex;
    width: 100%;
    justify-content: space-around;
    max-width: 610px;
    :hover {
      cursor: pointer;
      color: #EEEEEE;
    }
  }
`;

export default function Header() {
  const headerLinks = ["about", "projects", "skills", "contact"];

  const scroll = (location) => {
    // might want to restructure how header works to ensure this scrolls to right place
    // currently i do not think this would work consistently across all devices
    switch (location) {
      case "about":
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        break;
      case "projects":
        window.scrollTo({ top: 320, left: 0, behavior: "smooth" });
        break;
      case "skills":
        window.scrollTo({ top: (document.body.scrollHeight - 710), left: 0, behavior: "smooth" });
        break;
      case "contact":
        window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: "smooth" });
        break;
      default:
        return;
    }
  };

  return (
    <HeaderContainer>
      <div id="header-links">
        {headerLinks.map((route, i) => (
          <div key={i} onClick={(e) => scroll(route)}>
            <p>{route}</p>
          </div>
        ))}
      </div>
    </HeaderContainer>
  );
}
