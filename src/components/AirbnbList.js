import * as React from 'react';

import "../components/AirbnbList.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star';

export default function ComplexGrid(props) {
  return (
    <>
    <div className="searchResult" onClick={props.onClick}>
        <img src={props.images[0]} alt={props.title} />
        <FavoriteBorderIcon className="searchResult__heart" />
        <div className="searchResult__info">
            <div className="searchResult__infoTop">
                <span>{props.address}</span>
                <h3>{props.name}</h3>
                <p>____</p>
                <p>Guest: {props.persons} Persons</p>

                  <p>Amenities:</p>
                <p>{props.previewAmenities[0]}, {props.previewAmenities[1]}, {props.previewAmenities[2]}</p>
            </div>
            <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                    <StarIcon className="searchResult__star" fontSize="small" />
                    <p><strong>{props.rating}</strong></p>
                </div>
                <div className="searchResult__price">
                    <h3>{props.price.priceItems[0].title}</h3>
                    <p>{`$${props.price.total} total`}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}