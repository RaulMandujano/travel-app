import React from "react";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import '../components/Search.css';
import getLocation from '../apis/getLocation';

import { DateRangePicker } from 'react-date-range';
import Button from '@mui/material/Button';

const Search = () => {
    const [startDate, setStartDate] = useState(new Date());

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [endDate, setEndDate] = useState(tomorrow);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };


    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const onSubmit = e => {
        e.preventDefault();
        const { location, adults } = e.target;
    
        getLocation({
            checkin: startDate.toISOString().split('T')[0],
            checkout: endDate.toISOString().split('T')[0],
            location: location.value, adults: adults.value,
            children: '0',
            infants: '0',
            page: '1'
        })
    }

    return (
        <form className="search" onSubmit={onSubmit}>

            <div>
                <input required className="search-input" name='location' type="text" placeholder="Where You Go ? " />
            </div>

            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

            <div className="input-guest">
                <h2>
                    Number of Guest
                </h2>
                <input min={1} name='adults' defaultValue={2} type="number" />
            </div>

            <Button type='submit'>Search AirBnb</Button>
        </form>
    )
}

export default Search;