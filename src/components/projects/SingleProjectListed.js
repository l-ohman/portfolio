import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  /*FaUserAlt,
  FaUserFriends,*/
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ContentContainer = styled.div`
  border: 2px solid green;
`;

export default function SingleProjectListed() {
  return(
    <ContentContainer>
      <p>SingleProjectListed placeholder</p>
    </ContentContainer>
  )
}
