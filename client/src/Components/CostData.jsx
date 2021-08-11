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
            var inserted;
            var loopData = ''
          var i ;
          for(var i = 0, ii = request.data.math; i < ii ; i++){
            
              loopData = request.data[i].obp
            }
        //   this.setState({userName: loopData})
            
            
            
            console.log(loopData, "request")
            setTopTen(request.data)

            return request

        };
        FetchPlaces();
    }, []);



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


