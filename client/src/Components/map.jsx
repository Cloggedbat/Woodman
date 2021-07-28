import React, { useState, useEffect, useRef } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
// import useSupercluster from "use-supercluster";
import "./maps.css";
import mapStyles from "./mapStyles";
// fix this import or create a variable that would be easier to "center the map", later can be updated to person location
// import LOS_ANGELES_CENTER from './const/la_center.jsx';
import iconMarker from "../assets/Campfire.png"

import axios from 'axios'
import './maps.css'

require('dotenv').config()

const SLCcenter = { lat: 40.6237869, lng: -111.8473300 }
const zionNp = { lat: 37.300064162133154, lng: -113.02748589891031 }



const Map = props => {
    const [selectedPark, setSelectedPark] = useState(null);
    const [places, setPlaces] = useState([])
    const [location, setLocation] = useState(
        zionNp
    )
    const refMap = useRef(null);
    const success = async (position) => {
        const coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        // console.log(position.coords.longitude)
        // console.log(coordinates, "lol this should work")
        setLocation(coordinates)
        console.log(coordinates, 'coordinates')
    }
    const geoLocate = () => {
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    if (result.state === "granted") {
                        navigator.geolocation.getCurrentPosition(success)
                    }
                });
        }
    }
    // useEffect(() => {

    const FetchPlaces = () => {
        geoLocate()
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                setPlaces(data)
                console.log(data, 'looking for the wood')
            })
            .catch(() => {
                console.log('dWood not found')
            })
    }

    useEffect(() => {
        FetchPlaces();
    }, [])
    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedPark(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);


    console.log(location, "success")
    return (
        <div id="maps">
            {location && (
                <GoogleMap await
                    defaultZoom={10}
                    // will look into making this its own variable/ will need to find out how to shift the cinter 
                    defaultCenter={{
                        lat: location.lat,
                        lng: location  .lng
                        // text={place.name}
                        // show={places.show}

                    }}
                    defaultOptions={{ styles: mapStyles }}
                >
                    {places.map((places) => (
                        <Marker await
                            icon={{
                                url: iconMarker,
                                scaledSize: new window.google.maps.Size(25, 25)
                            }}

                            position={{
                                lat: places.lat,
                                lng: places.lng
                                // text={place.name}
                                // show={places.show}

                            }}
                            onClick={() => {
                                setSelectedPark(places);
                            }}

                        />))}{selectedPark && (
                            <InfoWindow
                                onCloseClick={() => {
                                    setSelectedPark(null);
                                }}
                                position={{
                                    lat: selectedPark.lat,
                                    lng: selectedPark.lng
                                }}
                            >
                                <div>
                                    <h2>{selectedPark.name}</h2>
                                    <p>{selectedPark.address}</p>
                                    <p>{selectedPark.city}</p>
                                    <p>{selectedPark.phoneNumber}</p>

                                </div>
                            </InfoWindow>
                        )}
                </GoogleMap >
            )}
        </div>
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function Maps() {
    return (
        <div style={{
            marginTop: '1vw',
            height: '50vw',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY
                    }`} loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}