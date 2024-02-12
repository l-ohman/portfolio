import React from "react";
import styled from "styled-components";
import colors from "../../colors.json";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;

  margin: 0;
  width: min(100vw, 375px);
  background: ${colors.dark};
  color: white;
  font-size: 0.95rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  #header-links {
    margin: 0 auto;
    display: flex;
    width: min(100%, 610px);
    justify-content: space-around;
    opacity: 1;
    padding: 0.3rem 0;

    .single-link:hover {
      cursor: pointer;
      transition: color 0.08s linear 0s;
      color: #e9e9e9;
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
        window.scrollTo({
          top: projects.current.offsetTop - 30,
          behavior: "smooth",
        });
        break;
      case "skills":
        window.scrollTo({
          top: skills.current.offsetTop - 30,
          left: 0,
          behavior: "smooth",
        });
        break;
      case "contact":
        window.scrollTo({
          top: contact.current.offsetTop - 30,
          left: 0,
          behavior: "smooth",
        });
        break;
      default:
        return;
    }
  };

  return (
    <HeaderContainer>
      <div id="header-links">
        {headerLinks.map((route, i) => (
          <div key={i} onClick={(e) => scroll(route)} className="single-link">
            <p>{route}</p>
          </div>
        ))}
      </div>
    </HeaderContainer>
  );
}
