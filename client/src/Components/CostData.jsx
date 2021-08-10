import React, { useState, useEffect, useRef } from "react";
import {
    Card,
    Container,
    Row

} from "react-bootstrap";
import axios from 'axios';

require('dotenv').config();


const CostDisplay = () => {
    const [topTen, setTopTen] = useState([]);

    useEffect(() => {
        const FetchPlaces = async () => {
            const request = await axios.get('/api')
            console.log(request.data, "request")
            setTopTen(request.data)

            return request

        };
        FetchPlaces();
    }, []);
    console.log(topTen, "topTeN")



    return (
        <div>
            {topTen.map(topT =>(
                <Card>
                    <h1>hi{topT.obp}</h1>
                </Card>
            ))}


        </div >

    )





};
export default CostDisplay


