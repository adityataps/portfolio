import React from 'react'
import styled from "styled-components"
import "./stylesheets/contact.css"
import bgImg from "../../media/barca-beach.jpg"
import NavBar from "./elements/navbar";
import ContentContainer from "./elements/contentContainer";

function Contact() {
    return(
        <PageWrapper>
            <NavBar />
            <ContentContainer>

            </ContentContainer>
        </PageWrapper>
    )
}

const PageWrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default Contact