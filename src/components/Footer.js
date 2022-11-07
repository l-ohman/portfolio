import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    background: black;
    color: white;
    text-align: center;
`;

export default function Footer() {
    return(
        <FooterContainer>
            <h3>Placeholder</h3>
        </FooterContainer>
    );
}
