import React from "react";
import styled from "styled-components";

const footerHeight = 2;
const FooterContainer = styled.div`
    position: absolute;
    width: 100%;
    height: ${footerHeight + "em"};
    bottom: ${"-" + (footerHeight + 2) + "em"};
    padding: 0.3em 0;

    background: black;
    color: white;
    text-align: center;

    display: flex;
    justify-content: space-around;
`;

export default function Footer() {
    return(
        <FooterContainer>
            {/* these should be icons with links eventually */}
            <p>Email</p>
            <p>LinkedIn</p>
            <p>Github</p>
            <p>Resume</p>
        </FooterContainer>
    );
}
