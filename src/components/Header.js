import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    margin: 0;
    padding: 0.3em 0.7em;
    width: 100%;
    background: darkblue;
    color: white;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    #header-links {
        margin-left: 0.5em;
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
`;

export default function Header() {
    const thereProbablyWontBeAHeader = [
        "Projects",
        "Bio",
        "Contact",
        "Example"
    ];

    return(
        <HeaderContainer>
            <h2>Hello</h2>
            <div id="header-links">
                {thereProbablyWontBeAHeader.map(i=>(
                    <p>{i}</p>
                ))}
            </div>
        </HeaderContainer>
    );
}
