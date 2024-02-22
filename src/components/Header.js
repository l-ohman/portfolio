import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;

  margin: 0;
  width: 100vw;
  min-width: 100%;
  background: ${({ theme }) => theme.colors.header};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
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

  &.header-animate {
    transform: none;
    transition: transform 400ms ease-in-out;
  }

  &.header-hide {
    transform: translateY(-75px);
  }

  @media screen and (min-width: 650px) {
    font-size: 1.2rem;
    #header-links {
      padding: 0.6rem 0;
    }
  }
`;

export default function Header({ hero, projects }) {
  const headerLinks = ["about", "projects", "contact"];

  const [isVisible, setIsVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const updateHeaderVisibility = () => {
    const currScrollPos = window.scrollY;
    if (isVisible && currScrollPos > prevScrollPos) {
      setIsVisible(false);
    } else if (!isVisible && currScrollPos < prevScrollPos) {
      setIsVisible(true);
    }
    setPrevScrollPos(currScrollPos);
  };

  React.useEffect(() => {
    window.onscroll = updateHeaderVisibility;
  }, [isVisible, prevScrollPos]);

  const scroll = (location) => {
    switch (location) {
      case "about":
        window.scrollTo({ top: hero.current.offsetTop, behavior: "smooth" });
        break;
      case "projects":
        window.scrollTo({
          top: projects.current.offsetTop - 40,
          behavior: "smooth",
        });
        break;
      case "contact":
        window.scrollTo({
          top: 100000, // nice
          left: 0,
          behavior: "smooth",
        });
        break;
      default:
        return;
    }
  };

  return (
    <HeaderContainer
      className={`header-animate ${!isVisible ? "header-hide" : ""}`}
    >
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
