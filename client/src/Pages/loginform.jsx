import React, { useState } from 'react';
import axios from 'axios'
import {
    Button,
    ButtonGroup,
    Col,
    Container,
    Form,
    Jumbotron
} from "react-bootstrap";
import { Redirect } from "react-router-dom";


const Loginforms = () => {
    const [userNameValue, setUsernameValue] = useState(' ');
    const [passWordValue, setPasswordValue] = useState(' ')
    const [redirect, setRedirect] = useState(false);

    const goBackBtn = () => {
        console.log("Hit homepage");
    }
    const signUpBtn = () => {
        if (userNameValue === "") {
            console.log("Missing required credentials");
            alert("Missing required credentials. Please enter required information");
        } else {

            const userObj = {
                username: userNameValue,
                password: passWordValue,
            }
            console.log(userObj);
            axios.post('/auth/login',
                userObj
            ).then((res) => {
                console.log("Successfully registered!");
                console.log(res.data.userId);
                alert("Successfully Registered! You will receive a welcome email from our team!");

                // dispatch({ type: "UPDATE_USERID", payload: res.data.userId });
                // dispatch({ type: "UPDATE_UUID", payload: res.data.uuid });

                redirectHandler();
                console.log("redirected to cam2");
            }).catch(err => {
                console.log(err);
            });
            //     console.log("login successful");
            //     alert("Successfully logged in");


            // }).catch(err => {
            //     console.log(err);
            // });
        }
    }

    const redirectHandler = () => {
        setRedirect(true);
        console.log("redirect handler: ", redirect);
    }

    if (redirect === true) {
        return <Redirect to="/SignedIn" />
    }



    return (
        <>

            <Container id="main-container">

                <Jumbotron id="signup-jumbotron">
                    <h1 id="pi">Personal Information</h1>
                    <hr />
                    <Form id="signUp-form">

                        <Form.Row>
                            <Form.Group as={Col} controlId="username">
                                <Form.Label></Form.Label>
                                <Form.Control
                                    type="username"
                                    placeholder="*Enter userName"
                                    onChange={(e) => setUsernameValue(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label></Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="*Password"
                                    onChange={(e) => setPasswordValue(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>

                        </Form.Row>
                    </Form>
                    <h6>* required</h6>
                    <br />

                    <ButtonGroup size="lg" className="mr-3">
                        <Button href="/" onClick={() => { goBackBtn() }} variant="dark"
                            type="submit" id='left-button'>Go Back</Button>
                    </ButtonGroup>

                    <ButtonGroup size="lg" className="mr-3">
                        <Button onClick={() => { signUpBtn() }} variant="dark"
                            type="submit" id='right-button'>Continue</Button>
                    </ButtonGroup>

                    <br /><br />
                    <h6>Click 'Continue' </h6>
                </Jumbotron>
            </Container>
        </>
    );
};





export default Loginforms;
