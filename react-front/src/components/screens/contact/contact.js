import React, { useEffect } from 'react'
import styled from "styled-components"
import "./stylesheets/contact.css"
import bgImg from "../../media/barca-beach.jpg"
import NavBar from "../../common/elements/navbar";
import ContentContainer from "../../common/elements/contentContainer";
import ContactForm from "./components/contactForm";
import Typist from "react-typist";

function Contact() {

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

                <div className={"contact-content"}>
                    <div className={"left-content"}>

                        <div className={"contact-typist-container"}>
                            <Typist startDelay={800} cursor={{blink: true, element: '|'}}>
                                print("
                                <b style={{color: 'crimson'}}>
                                    Let's keep in touch.
                                </b>
                                ")
                            </Typist>
                        </div>

                        <hr style={{width: "75%", "margin": "0 auto 20px"}}/>

                        <div className={"contact-header"}>
                            Got a project in mind? Let's work together.
                        </div>

                        <div className={"contact-body"}>

                            I'm a meticulous quick learner and go-getter team player,
                            and I'm open to collaboration.

                        </div>


                    </div>
                    <div className={"right-content"}>

                        <ContactForm />

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

export default Contact