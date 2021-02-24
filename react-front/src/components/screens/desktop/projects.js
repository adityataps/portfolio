import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './stylesheets/projects.css'
import NavBar from "./elements/navbar";
import styled from "styled-components";
import bgImg from "../../media/switz.jpg";
import Typist from "react-typist";
import 'react-typist/dist/Typist.css'
import ContentContainer from "./elements/contentContainer";
import ProjectContainer from "./elements/projectContainer";

function Projects(props) {

    const projects = props

    return(
        <PageWrapper>
            <NavBar />
            <ContentContainer>
                <div className={"project-contents"}>
                    <div className={"typist-container"}>
                        <Typist startDelay={800} cursor={{blink: true, element: '|'}}>
                            &lt;b&gt;&nbsp;
                            <b style={{color: 'crimson'}}>
                                past works and collaborations
                            </b>
                            &nbsp;&lt;/b&gt;
                        </Typist>
                    </div>
                    <ProjectContainer projects={projects} />
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