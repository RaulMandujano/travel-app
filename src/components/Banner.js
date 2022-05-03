import React, { useEffect } from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import '../components/Banner.css';
import { Modal, Box, TextField } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import AirbnbList from '../components/AirbnbList';

import Search from '../components/Search';
import getLocation from "../apis/getLocation";
import { useLocation, useSearchParams } from 'react-router-dom';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

const Banner = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [places, setPlaces] = useState([]);
    const [selectedPlaceIndex, setSelectedPlaceIndex] = useState(-1);
    const [params] = useSearchParams();
    const [selectedPlace, setSelectedPlace] = useState(params.get('type') || '');

    const place = places[selectedPlaceIndex]
    const location = useLocation();


    const getPlaces = async (params = { location: 'Paris' }) => {
        try {
            const afterWeekDate = new Date();
            afterWeekDate.setDate(afterWeekDate.getDate() + 7);
            const res = await getLocation({
                checkin: new Date().toISOString().split('T')[0],
                checkout: afterWeekDate.toISOString().split('T')[0],
                adults: 2,
                children: '0',
                infants: '0',
                ...params
            })
            if (res.results) {
                setPlaces(res.results);
            }
        }
        catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        if (location.pathname === '/nearby') {
            navigator.geolocation.getCurrentPosition(
                async position => {
                    let lat_change = 10 / 111;
                    let lon_change = Math.abs(Math.cos(position.coords.latitude * (Math.PI / 180)));
                    let sw_lat = position.coords.latitude - lat_change;
                    let sw_lng = position.coords.longitude - lon_change;
                    let ne_lat = position.coords.latitude + lat_change;
                    let ne_lng = position.coords.longitude + lon_change;
                    getPlaces({ ne_lat, ne_lng, sw_lat, sw_lng });
                },
                async error => {
                    getPlaces()
                }
            )
        }
        else getPlaces()

    }, [location.pathname])

    return (
        <>
            {/* <GoogleMaps /> */}
            <datalist id='places'>
                {places.map(place => <option value={place.type} key={place.id} />)}
            </datalist>
            <div className="banner">
                <div className="banner_search">
                    {showSearch && <Search onPlacesFetch={places => {
                        setPlaces(places);
                        setShowSearch(false);
                    }} />}
                    <Button onClick={() => setShowSearch(!showSearch)} className="banner_searchButton" variant="outlined">
                        {showSearch ? "Hide" : "Search Place"}
                    </Button>

                    <div className="banner__info">
                        <h2>Go</h2>
                        <h2>Near</h2>
                        <Button className="banner__infoBtn" variant="outlined">Explore Nearby Stays</Button>
                    </div>
                </div>
            </div>
            <TextField label='Filters' defaultValue={selectedPlace} inputProps={{ list: 'places' }} onChange={e => setSelectedPlace(e.target.value)} />
            {places.map((place, index) => {
                const type = place.type;
                const isExist = type && type.toLowerCase().includes(selectedPlace.toLowerCase())
                return isExist && (
                    <AirbnbList {...place} key={index} onClick={() => setSelectedPlaceIndex(index)} />
                )
            })}


            {place && (
                <Modal
                    open={true}
                    onClose={() => setSelectedPlaceIndex(-1)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                <Box sx={{ width: 700, height: 1000, overflowY: 'scroll', margin:"auto" }}>
                    <ImageList variant="masonry" cols={1} gap={8}>
                        {place.images.map((image, index) => (
                        <ImageListItem key={index}>
                            <img
                            src={image}
                            alt={image}
                            loading="lazy"
                            />
                        </ImageListItem>
                        ))}
                    </ImageList>
                </Box>

                </Modal>
            )}

        </>
    )
}

export default Banner;