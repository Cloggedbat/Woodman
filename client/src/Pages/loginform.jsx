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

        this.setState({
            [name]: value
        })

    };
    submit = (event) => {
        event.preventDefault();
        // sendToWDB = send to Wood DB
        const sendToWDB = {

            date: Date.now(),
            name: this.state.name,
            lat: this.state.lat,
            lng: this.state.lng,
        };

        axios.post('/save', sendToWDB)
            .then(() => {
                console.log('data sent')
            })
            .catch(() => {
                console.log('data not sent')
            })


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
                                        name='name'
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        placeholder='Username'
                                    />
                                </div>
                                <div className='form-imput'>
                                    <input name="lat" id="" cols="30" rows="10" value={this.state.lat} onChange={this.handleChange} placeholder='Password'></input>
                                </div>

                                <button >Sub</button>
                            </form>
                        </div>
                    </Jumbotron>
                </Row>
            </Container>
        );
    }
}



export default loginforms;