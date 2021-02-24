import React from 'react'
import "./stylesheets/blog.css"
import NavBar from "./elements/navbar";
import styled from "styled-components";
import bgImg from "../../media/gothic-q.jpg";
import BlogpostContainer from "./elements/blogpostContainer";

function Blog(props) {

    const posts = props

    return(
        <PageWrapper>
            <NavBar />

            <BlogpostContainer posts={posts}>

            </BlogpostContainer>

            {console.log(posts)}
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

export default Blog