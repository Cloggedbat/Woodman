import React, { useState, useEffect, useRef } from "react";
import {
    Card,
    Container,
    Row

} from "react-bootstrap";
import axios from 'axios'

require('dotenv').config()


const CostDisplay = () => {
    const [topTen, setTopTen] = useState(null);
    const FetchPlaces = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                setTopTen(data.json)
                console.log(data, 'looking for price')
            })
            .catch(() => {
                console.log('dWood not found')
            })
    }

    useEffect(() => {
        //         costData();
        FetchPlaces();
    }, [])
    // const costData = async () => {
    //     const obpData = topTen.city


    //     console.log(obpData, "obpOBP")
    // }
    return (
        <div>
            {topTen && (

                <Card> </Card>
            )}
        </div >

    )





}
export default CostDisplay
