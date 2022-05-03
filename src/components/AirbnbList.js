import React, { useState } from 'react';

import "../components/AirbnbList.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { removeDOC, setDOC } from '../util/db';

export default function Form(props) {

  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  }

  const createList = () => {
    if(props.isFavoritePage) {
      console.log(props.id)
      removeDOC(`lists/${props.id}`)
    }
    else {
      const data = {
        name: props.name || '',
        address: props.address || '',
        images: props.images || '',
        persons: props.persons || '',
        previewAmenities: props.previewAmenities || '',
        rating: props.rating || '',
        price: props.price || '',
        path: `lists/${props.id}` || '',
      }
      setDOC(data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }


  return (
    <>

      <div className="searchResult" onClick={props.onClick}>
        <img src={props.images[0]} alt={props.title} />
        <FavoriteIcon className="searchResult__heart" onClick={createList} />
        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            <span>{props.address}</span>
            <h3 onChange={handleOnChange} value={title}>{props.name}</h3>
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