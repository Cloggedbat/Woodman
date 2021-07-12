import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import {
    Jumbotron,
    Container,
    Row

} from "react-bootstrap";

class loginforms extends Component {
    state = {

        username: '',
        password: '',

    };
    // works-this is what we will use to get the data we need on the maps

    // getWoodData = () => {
    //     axios.get('/api')
    //         .then((response) => {
    //             const data = response.data;
    //             this.setState({ woodData: data })
    //             console.log(data, 'looking for the wood')
    //         })
    //         .catch(() => {
    //             console.log('dWood not found')
    //         })
    // }
    // // can turn off
    // componentDidMount = () => {
    //     this.getWoodData();
    // }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name
        const value = target.value
        const password = target.password


        this.setState({
            [name]: value,
            // [password]: value,

        })

    };
    submit = async (event) => {
        event.preventDefault();
        // sendToWDB = send to Wood DB
        if (this.state.username === '' || this.state.password === '') {
            alert("Missing username or password");
            console.log("Missing username or password");
        } else {
            const sendToWDB = {


                username: this.state.username,
                password: this.state.password,

            };

            await axios.post('auth/login', sendToWDB)
                .then((res) => {
                    console.log('data sent')
                    alert('Welcome')
                })
                .catch((err) => {
                    console.log('data not sent')
                    alert('you are not a registered user')
                })
            console.log(sendToWDB, 'state')
        }

        // axios({
        //     url: 'http://localhost:5000/save',
        //     method: 'post',
        //     data: sendToWDB
        // })

    };

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

                                <button onChange={this.submit} href='/' >Sub</button>
                            </form>
                        </div>
                    </Jumbotron>
                </Row>
            </Container>
        );
    }
}



export default loginforms;