import { Map, GoogleApiWrapper } from 'google-maps-react';
import styles from './GoogleMap.module.css';
import React, { useEffect, useState, useRef } from 'react';


const Main = (props) => {
    const mapRef = useRef();
    useEffect(() => {
        const bounds = mapRef.current.map.getBounds()
        console.log(bounds);
    }, [mapRef])
    const coordinates = props.coordinates
    return (
        <div className={styles.root}>
            <Map
                ref={mapRef}
                google={props.google}
                zoom={10}
                defaultCenter={{ lat: coordinates.latitude, lng: coordinates.longitude }}
                onReady={(mapProps, map) => { }}
            >
            </Map>
        </div>
    )
}

const GoogleMapsReact = props => {
    const [coordinates, setCoordinates] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setCoordinates(position.coords)
            },
            error => {
                console.log('not allowed')
            }
        )
    }, [])
    return coordinates && <Main {...props} coordinates={coordinates} />
};


export default GoogleApiWrapper({
    apiKey: ('AIzaSyDtr45hZrMVPdLd28fPX2bpO5SZciYqR_E')
})(GoogleMapsReact);