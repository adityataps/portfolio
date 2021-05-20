import React, { useEffect } from 'react'
import "./stylesheets/blog.css"
import NavBar from "../../common/elements/navbar";
import styled from "styled-components";
import { useParams, Redirect } from 'react-router-dom';
import bgImg from "../../media/gothic-q.jpg";
import BlogpostContainer from "./components/blogpostContainer";

function Blog(props) {

    const imgs = [bgImg];
    useEffect(() => {
        imgs.forEach((bgImg) => {
            new Image().src = bgImg.fileName;
        })
    }, [])

    let posts = props.data
    let { post } = useParams()
    let specificPost = posts.find(({date}) => date === post)
    if (specificPost) {
        posts = [specificPost]
    }

    return(
        <PageWrapper>
            <NavBar />
            {(post && !specificPost) ?
                <Redirect to={"/blog"} />
            : null}
            <BlogpostContainer posts={posts} />
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