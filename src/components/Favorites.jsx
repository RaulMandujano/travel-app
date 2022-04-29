import React, { useEffect } from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import '../components/Banner.css';
import { Modal, Box, Typography } from '@mui/material'

import AirbnbList from '../components/AirbnbList';

import Search from '../components/Search';
import getLocation from "../apis/getLocation";
import getFavorites from "../util/getFavorites";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Favorites = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [places, setPlaces] = useState([]);
    const [selectedPlaceIndex, setSelectedPlaceIndex] = useState(-1)

    const place = places[selectedPlaceIndex]

    useEffect(() => {

        const afterWeekDate = new Date();
        afterWeekDate.setDate(afterWeekDate.getDate() + 7);
        getFavorites()
            .then(places => setPlaces(places))
        
    }, [])

    return (
        <>
            <div className="banner">
                <div className="banner_search">
                    {showSearch && <Search onPlacesFetch={places => {
                        setPlaces(places);
                        setShowSearch(false);
                    }} />}
                    <Button onClick={() => setShowSearch(!showSearch)} className="banner_searchButton" variant="outlined">
                        {showSearch ? "Hide" : "Search Place"}
                    </Button>
                </div>
            </div>
            {places.map((place, index) => (
                <AirbnbList {...place} isFavoritePage={true} key={index} onClick={() => setSelectedPlaceIndex(index)} />
            ))}


            {place && (
                <Modal
                    open={true}
                    onClose={() => setSelectedPlaceIndex(-1)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {place.name}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            )}

        </>
    )
}

export default Favorites;