import React from "react";
import styled from "styled-components";
import colors from "../../colors.json";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;

  margin: 0;
  padding: 0.5em 0.7em;
  width: 100%;
  background: ${colors.dark};
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
    opacity: 1;
    :hover {
      cursor: pointer;
      color: #EEEEEE;
    }
  }
`;

export default function Header({ hero, projects, skills, contact }) {
  const headerLinks = ["about", "projects", "skills", "contact"];

  // const [hideHeader, setHideHeader] = React.useEffect(false);

  const scroll = (location) => {
    switch (location) {
      case "about":
        window.scrollTo({ top: hero.current.offsetTop, behavior: "smooth" });
        break;
      case "projects":
        window.scrollTo({ top: (projects.current.offsetTop - 30), behavior: "smooth" });
        break;
      case "skills":
        window.scrollTo({ top: (skills.current.offsetTop - 30), left: 0, behavior: "smooth" });
        break;
      case "contact":
        window.scrollTo({ top: (contact.current.offsetTop - 30), left: 0, behavior: "smooth" });
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
