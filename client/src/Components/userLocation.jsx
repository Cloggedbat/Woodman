import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import axios from 'axios'
import './maps.css'

const Locations = props => {

    const [location, setLocation] = useState()



    const success = position => {
        const coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        // console.log(position.coords.longitude)
        // console.log(coordinates, "lol this should work")
        setLocation(coordinates)
    }
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    if (result.state === "granted") {
                        navigator.geolocation.getCurrentPosition(success)
                    }
                });
        }
    }, [])


    console.log(location, "success")
}