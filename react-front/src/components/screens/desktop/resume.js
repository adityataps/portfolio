import React from 'react'
import NavBar from "./elements/navbar";
import styled from "styled-components";
import bgImg from "../../media/arc.jpg";
import ContentContainer from "./elements/contentContainer";

function Resume() {
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

export default Resume