import React, { useEffect } from 'react'
import "./stylesheets/blog.css"
import NavBar from "../../common/elements/navbar";
import styled from "styled-components";
import { useParams, useLocation, Redirect } from 'react-router-dom';
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

    // let post = new URLSearchParams(useLocation().search).get("post")
    // let posts = props.data
    //
    // if (post) {
    //     posts = [posts.find(({date}) => date === post)]
    //     if (!posts || posts.length === 0) {
    //         posts = props.data
    //     }
    // }

    return(
        <OverlayScrollbarsComponent style={{"background-image": `url(${bgImg})`}} className={"page-wrapper"}>
            <BlogpostContainer posts={props.data} />
        </OverlayScrollbarsComponent>
    )
}


export default Blog