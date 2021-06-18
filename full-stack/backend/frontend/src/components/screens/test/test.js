import React, {useState} from 'react'
import './stylesheets/test.css'
import UseAnimations from "react-useanimations";
import icon from 'react-useanimations/lib/facebook'

export default function Test() {

    return (
        <div>
            <UseAnimations animation={icon} size={100} className={"animation-test"} strokeColor={"white"}/>
        </div>
    )

}