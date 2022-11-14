import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    position: absolute;
    width: 100%;
    padding: 0.3em 0;
    bottom: 0;
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
