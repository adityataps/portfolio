import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './stylesheets/contactForm.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";

function ContactForm() {

    return (
        <div className={"form-container"}>
            <Form className={"form-contents"}>

                <Form.Group controlId={"nameInput"}>
                    <Form.Label> Name </Form.Label>
                    <Form.Control size={"sm"} type={"text"} placeholder={"aditya"} />
                </Form.Group>

                <br />

                <Form.Group controlId={"emailInput"}>
                    <Form.Label> Email Address </Form.Label>
                    <Form.Control size={"sm"} type={"email"} placeholder={"aditya.taps@gmail.com"} />
                </Form.Group>

                <br />

                <Form.Group controlId={"subjectInput"}>
                    <Form.Label> Subject </Form.Label>
                    <Form.Control size={"sm"} type={"text"} placeholder={"nice website!"}  />
                </Form.Group>

                <br />

                <Form.Group controlId={"contact-text-input"}>
                    <Form.Label> Message </Form.Label>
                    <Form.Control size={"sm"} as={"textarea"} rows={1} placeholder={"let's link up!"} />
                </Form.Group>

                <br />

                <Button className={"submit-button"} variant={"outline-primary"}> Submit </Button>

            </Form>
        </div>
    )

}

export default ContactForm