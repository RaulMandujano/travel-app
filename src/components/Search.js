import React from "react";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import '../components/Search.css';


import { DateRangePicker } from 'react-date-range';
import { Button } from "rsuite";

const Search = () => {
    const [startDate, setStartDate] = useState (new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of Guest
            </h2>
            <input min={0} defaultValue={2} type="number" />
            
            <Button>Search AirBnb</Button>
        </div>
    )
}

export default Search;