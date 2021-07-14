import React, { Component, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import {
    Jumbotron,
    Container,
    Row

} from "react-bootstrap";


class loginforms extends Component {
    state = {


        username: '',
        password: '',
        auth: false
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name
        const value = target.value
        const password = target.password
        const auth = target.auth
        this.setState({
            [name]: value,


        })

    };
    submit = async (event) => {
        event.preventDefault();
        // sendToWDB = send to Wood DB
        if (this.state.username === '' || this.state.password === '') {
            alert("Missing username or password");
            console.log("Missing username or password");
        }
        // else if (this.state.username === '' || this.state.password === '') {

        // }
        else {
            let auth = true
            const sendToWDB = {
                username: this.state.username,
                password: this.state.password,
                auth: true
            };

            await axios.post('auth/login', sendToWDB)
                .then((res) => {
                    console.log('data sent')
                    alert('Welcome')
                    console.log("Redirect to profile");
                })

                .catch((err) => {
                    console.log('data not sent')
                    alert('you are not a registered user')
                    // const sendToWDB = {
                    //     auth: false
                    // };
                })
            console.log(sendToWDB.auth, 'state1')
            console.log(this.state.auth, 'state2')

        }




        // axios({
        //     url: 'http://localhost:5000/save',
        //     method: 'post',
        //     data: sendToWDB
        // })

    };
    redirectHandler = () => {


    }

    render() {
        console.log(this.state, 'state')
        return (
            <Container id="main-container">
                <Row>

                    <Jumbotron>
                        <div>
                            <h2>Input your information</h2>
                            <form onSubmit={this.submit} >
                                <div className='form-imput'>
                                    <input type='text'
                                        name='username'
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        placeholder='Username'
                                    />
                                </div>
                                <div className='form-imput'>
                                    <input type='text'
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        placeholder='Password' />
                                </div>

                                <button onChange={this.submit}  >Sub</button>
                            </form>
                        </div>
                    </Jumbotron>
                </Row>
            </Container>
        );
    }
}



export default loginforms;