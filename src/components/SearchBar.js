import React from "react";
import "../components/SearchBar.css";

import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

function SearchBar() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
      'X-RapidAPI-Key': 'b2676f4bacmshf024e52eb9e1defp1b229djsn7b29df711424'
    }
  };
  
  fetch('https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2022-05-16&checkout=2022-05-17&adults=1&children=0&infants=0&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
<>
    <div className="box">

      <input type="text" name="search" placeholder="Search.." />
      <button>G</button>

    </div>

    <div className='dates'>
      
      <DateRangePicker />

    </div>
</>
  );
}

export default SearchBar;
