import { useEffect, useState } from "react"
// import ListingForm from '../listings/ListingForm'
const GeoLocator = props => {
    const [location, setLocation] = useState({
        lat: 51.501364,
        lng: -0.141890
    })
    const success = position => {
        const coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setLocation(coordinates)
        console.log(setLocation(coordinates))
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
    return (
        <div>
            {location}
        </div>
    )
}
export default GeoLocator