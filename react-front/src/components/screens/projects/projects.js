import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './stylesheets/projects.css'
import NavBar from "../../common/elements/navbar";
import styled from "styled-components";
import bgImg from "../../media/switz.jpg";
import Typist from "react-typist";
import 'react-typist/dist/Typist.css'
import ContentContainer from "../../common/elements/contentContainer";
import ProjectContainer from "./components/projectContainer";

function Projects(props) {

    const imgs = [bgImg];
    useEffect(() => {
        imgs.forEach((bgImg) => {
            new Image().src = bgImg.fileName;
        })
    }, [])

    return(
        <PageWrapper>
            <NavBar />
            <ContentContainer>
                <div className={"project-contents"}>
                    <div className={"typist-container"}>
                        <Typist startDelay={800} cursor={{blink: true, element: '|'}}>
                            &lt;b&gt;&nbsp;
                            <b style={{color: 'crimson', margin: ""}}>
                                past works and collaborations
                            </b>
                            &nbsp;&lt;/b&gt;
                        </Typist>
                    </div>
                    <hr style={{width: "90%", "margin": "0 auto 20px"}}/>
                    <ProjectContainer projects={props} />
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