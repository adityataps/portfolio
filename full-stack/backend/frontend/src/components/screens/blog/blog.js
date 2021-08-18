import React, { useEffect } from 'react'
import "./stylesheets/blog.css"
import NavBar from "../../common/elements/navbar";
import styled from "styled-components";
import { useParams, Redirect } from 'react-router-dom';
import bgImg from "../../media/gothic-q.jpg";
import BlogpostContainer from "./components/blogpostContainer";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";

function Blog(props) {

    const imgs = [bgImg];
    useEffect(() => {
        imgs.forEach((bgImg) => {
            new Image().src = bgImg.fileName;
        })
    }, [])

    let posts = props.data
    let post = window.location.hash
    let specificPost = null

    if (post !== "") {
        specificPost = posts.find(({date}) => date === post.substring(1))
        if (specificPost) {
            posts = [specificPost]
        }
    }

    return(
        <OverlayScrollbarsComponent style={{"background-image": `url(${bgImg})`}} className={"page-wrapper"}>
            {(post && !specificPost) ?
                <Redirect to={
                    {pathname: "/blog",
                        as: "/blog",
                        state: { data: posts }
                    }
                } />
            : null}
            <BlogpostContainer posts={posts} />
        </OverlayScrollbarsComponent>
    )
}


export default Blog