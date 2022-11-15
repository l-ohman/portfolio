import React from "react";
import styled from "styled-components";
import { BiCopy } from "react-icons/bi";

const ContentContainer = styled.div`
  border: 1px solid blue;
  font-size: 110%;
	text-align: center;
  * {
    margin-bottom: 0.3em;
  }
	> div {
		display: flex;
		align-items: center;
		width: fit-content;
		margin: 0 auto ;
		* {
			margin: 0 0.3em;
		}
	}
`;

export default function Contact() {
  const copyEmail = (e) => {
    navigator.clipboard.writeText("jakelohman7@gmail.com");
		// should throw notification that email was copied
		// maybe with some 'click again to open mail app'
		alert("'jakelohman7@gmail.com' copied to clipboard");
  };

  return (
    <ContentContainer>
      <h2>Contact</h2>

			<div>
      	<p>jakelohman7@gmail</p>
				<BiCopy size={25} onClick={copyEmail} />
			</div>
    </ContentContainer>
  );
}
