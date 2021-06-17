
import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";
// fix this import or create a variable that would be easier to "center the map", later can be updated to person location
// import LOS_ANGELES_CENTER from './const/la_center.jsx';

import axios from 'axios'
import './maps.css'

require('dotenv').config()

const SLCcenter = { lat: 40.6237869, lng: -111.8473300 }
const zionNp = { lat: 37.300064162133154, lng: -113.02748589891031 }



function Firemap() {


    const options = {
        method: 'GET',
        url: 'https://api.ambeedata.com/latest/fire',
        params: { lat: 37.096859137395455, lng: -113.57689415434142 },
        headers: { 'x-api-key': '9416a30c74beee6b6c0df03568b538d8ac99cb8aa311572f7d682511ea03f75e', 'Content-type': 'application/json' }
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    // useEffect(() => {
    //     FetchPlaces();
    // }, [])
    // useEffect(() => {
    //     const listener = e => {
    //         if (e.key === "Escape") {
    //             setSelectedPark(null);
    //         }
    //     };
    //     window.addEventListener("keydown", listener);

    //     return () => {
    //         window.removeEventListener("keydown", listener);
    //     };
    // }, []);

    return (
        <div id="maps">

            <GoogleMap
                defaultZoom={10}
                // will look into making this its own variable/ will need to find out how to shift the cinter 
                defaultCenter={SLCcenter}
                defaultOptions={{ styles: mapStyles }}
            >
                {/* {places.map((places) => (
                    <Marker await
                        position={{
                            lat: places.lat,
                            lng: places.lng
                            // text={place.name}
                            // show={places.show}

                        }}
                        onClick={() => {
                            setSelectedPark(places);
                        }}
                    // icon={{
                    //         url: `/skateboarding.svg`,
                    //         scaledSize: new window.google.maps.Size(25, 25)
                    //       }}
                    //     />
                    //   ))}
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
                                <h1>{selectedPark.name}</h1>
                                <p>{selectedPark.address}</p>
                            </div>
                        </InfoWindow>
                    )} */}
            </GoogleMap >
        </div>
    );


}
const MapWrapped = withScriptjs(withGoogleMap(Firemap));
export default function FiremapD() {
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
