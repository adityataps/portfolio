import React, {  useEffect } from 'react'
import './stylesheets/resume.css'
import ResumePDF from "./components/resumePDF";
import NavBar from "../../common/elements/navbar";
import styled from "styled-components";
import bgImg from "../../media/arc.jpg";
import ContentContainer from "../../common/elements/contentContainer";
import Typist from "react-typist";



function Resume() {

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

                <div className={"resume-contents-container"}>
                    <div className={"resume-typist-container"}>
                        <Typist className={"resume-typist-contents"} startDelay={800} cursor={{blink: true, element: '|'}}>
                            Console.log("
                            <b style={{color: 'crimson'}}>
                                my curriculum vitae
                            </b>
                            ");
                        </Typist>
                    </div>
                    <ResumePDF style={{height: "85%"}}/>
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

export default Resume