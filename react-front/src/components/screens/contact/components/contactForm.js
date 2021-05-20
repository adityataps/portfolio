import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './stylesheets/contactForm.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ContactForm() {

    return (
        <div className={"form-container"}>
            <Form>

                <Form.Group controlId={"nameInput"}>
                    <Form.Label> Name </Form.Label>
                    <Form.Control type={"text"} placeholder={"aditya"} />
                </Form.Group>

                <Form.Group controlId={"emailInput"}>
                    <Form.Label> Email Address </Form.Label>
                    <Form.Control type={"email"} placeholder={"aditya.taps@gmail.com"} />
                </Form.Group>

                {/*<br />*/}

                <Form.Group controlId={"subjectInput"}>
                    <Form.Label> Subject </Form.Label>
                    <Form.Control type={"text"} placeholder={"nice website!"}  />
                </Form.Group>

                {/*<br />*/}

                <Form.Group controlId={"contact-text-input"}>
                    <Form.Label> Message </Form.Label>
                    <Form.Control as={"textarea"} rows={4} placeholder={"let's link up!"} />
                </Form.Group>

                <Button className={"submit-button"} variant={"outline-primary"}> Submit </Button>

            </Form>
        </div>
    )

}

export default ContactForm