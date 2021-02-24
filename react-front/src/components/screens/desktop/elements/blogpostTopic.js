import React from 'react'
import './stylesheets/blogpostTopic.css'

function BlogpostTopic(props) {

    return (
        <TopicColor props={props} />
    )
}

function TopicColor(props) {
    switch(props.props.topic) {
        case 1:
            return(<b className={"topic-text food"}> Food </b>)
        case 2:
            return(<b className={"topic-text programming"}> Programming </b>)
        case 3:
            return(<b className={"topic-text lifestyle"}> Lifestyle </b>)
        case 4:
            return(<b className={"topic-text opinion"}> Opinion </b>)
        case 5:
            return(<b className={"topic-text tv"}> TV and Movies </b>)
        case 6:
            return(<b className={"topic-text gaming"}> Gaming </b>)
        case 7:
            return(<b className={"topic-text art"}> Art </b>)
        case 8:
            return(<b className={"topic-text diy"}> DIY </b>)
        case 9:
            return(<b className={"topic-text leet"}> LeetCode and HackerRank </b>)
        case 10:
            return(<b className={"topic-text interviews"}> Interviews </b>)
        case 11:
            return(<b className={"topic-text podcasts"}> Podcasts </b>)
        case 12:
            return(<b className={"topic-text books"}> Books and Literature </b>)
        case 13:
            return(<b className={"topic-text reviews"}> Reviews </b>)
        case 14:
            return(<b className={"topic-test travel"}> Travel </b>)
        default:
            return(<b className={"topic-text unsorted"}> Unsorted </b>)
    }
}

export default BlogpostTopic