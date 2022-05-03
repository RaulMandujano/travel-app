import React, { useEffect } from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import '../components/Banner.css';
import { Modal, Box } from '@mui/material'

import AirbnbList from './AirbnbList';

import Search from './Search';
import getFavorites from "../util/getFavorites";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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

export default Favorites;