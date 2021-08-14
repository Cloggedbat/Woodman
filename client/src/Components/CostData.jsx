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
            var loopData =request.data;
var tTarray = loopData.map(top =>{
    var obp =top.name + top.obp 
    return obp
})

var sortedTTA = tTarray.sort((a,b) => a-b)
// console.log(sortedTTA,"tt")        
        setTopTen(sortedTTA)
            return request
        };
        FetchPlaces();
    }, []);



    return (
        <div>
                <Card>
                    <h1>1  {topTen[0]}</h1>
                    <h1>2  {topTen[1]}</h1>
                    <h1>3  {topTen[2]}</h1>
                    <h1>4  {topTen[3]}</h1>
                    <h1>5  {topTen[4]}</h1>
                </Card>



        </div >

    )





};
export default CostDisplay


