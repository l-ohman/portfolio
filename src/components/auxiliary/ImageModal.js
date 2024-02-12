import React from "react";
import styled from "styled-components";

// covers the entire page so the user cannot interact with other things
const ModalPageCover = styled.div`
  z-index: 150;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
`;

const modalWidth = 500;
const modalHeight = 500;
const ModalContainer = styled.div`
  position: fixed;
  top: calc(50vh - ${modalHeight / 2}px);
  left: calc(50vw - ${modalWidth / 2}px);

  background: white;
  width: ${modalWidth + "px"};
  height: ${modalHeight + "px"};
  padding: 20px;
`;

export default function ImageModal({ isOpen }) {
  React.useEffect(() => {
    // Disallow scrolling when open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (isOpen)
    return (
      <ModalPageCover>
        <ModalContainer>
          <p>This is an example modal</p>
        </ModalContainer>
      </ModalPageCover>
    );
}
