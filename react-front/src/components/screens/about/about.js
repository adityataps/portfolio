import React, { useEffect } from 'react'
import styled from "styled-components"
import Typist from "react-typist";
import "./stylesheets/about.css"
import 'react-typist/dist/Typist.css'
import bgImg from "../../media/barca-city.jpg"
import me from "../../media/me.png"
import NavBar from "../../common/elements/navbar";
import ContentContainer from "../../common/elements/contentContainer";
import '../../common/elements/stylesheets/contentContainer.css'
import '../../../../node_modules/animate.css/animate.css'

function About() {

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

                <div className={"about-container"}>
                    <div className={"picture-me"}>
                        <div className={"img-container"}>
                            <img src={me} alt={""} className={"portrait"} />
                        </div>
                    </div>
                    <div className={"about-text"}>

                        <div className={"about-typist-container"}>
                            <Typist startDelay={800} cursor={{blink: true, element: '|'}}>
                                System.out.println("
                                <b style={{color: 'crimson'}}>
                                    hello world!
                                </b>
                                ");
                            </Typist>
                        </div>

                        <div className={"about-text-container"}>
                            <p>
                                I'm a developer based in Atlanta, GA, studying artificial intelligence
                                and user-centric programming at the Georgia Institute of Technology,
                                with a deep penchant for web development.
                                <br />
                                <br />
                                In my study I have worked with revolutionary technology to stitch
                                panoramas using Computer Vision, prototype front-end wireframes for
                                web and mobile applications, and even collaborated with peers to construct a
                                chest X-Ray cardiomegaly and chest neoplasm detector, among other projects.
                                <br />
                                <br />
                                I am intrigued by design, human-computer interaction, traveling, fine art,
                                music, photography, podcasts, and cooking.
                                <br />
                                <br />
                                I have been fortunate to be able to do what I love,
                                driven by the unpossible and seeking to be inspired by those around me.
                            </p>
                       </div>
                    </div>

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

export default About