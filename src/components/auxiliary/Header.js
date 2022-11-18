import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    margin: 0;
    padding: 0.5em 0.7em;
    width: 100%;
    background: darkblue;
    color: white;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    #header-links {
        margin: 0 auto;
        display: flex;
        width: 100%;
        justify-content: space-around;
        max-width: 500px;
    }

    a {
        font-size: 1.2em;
        color: inherit;
        text-decoration: inherit;
        transition: color 0.2s;
        &:hover {
            color: #dfdfdf;
        }
    }
`;

export default function Header() {
    const headerLinks = [
        "about",
        "skills",
        "projects",
        "contact"
    ];

    const test = (location) => {
        console.log(location);
    }

    return(
        <HeaderContainer>
            <div id="header-links">
                {headerLinks.map((route, i)=>(
                    <div key={i} onClick={(e) => test(route)}>
                        <p>{route}</p>
                    </div>
                ))}
            </div>
        </HeaderContainer>
    );
}
