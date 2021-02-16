import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './stylesheets/projects.css'
import NavBar from "./elements/navbar";
import styled from "styled-components";
import bgImg from "../../media/switz.jpg";
import ContentContainer from "./elements/contentContainer";

function Projects(props) {

    const projects = props

    return(
        <PageWrapper>
            <NavBar />
            <ContentContainer>
                <div>

                    {console.log(projects)}

                </div>
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

export default Projects