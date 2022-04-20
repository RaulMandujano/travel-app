import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import '../components/Banner.css';

import Search from '../components/Search';

const Banner = () => {

    const [showSearch, setShowSearch] = useState (false);

    return (
    
    <div className="banner">
        <div className="banner_search"> {showSearch && <Search />}
            <Button onClick={() => setShowSearch(!showSearch)} className="banner_searchButton" variant="outlined">
                {showSearch ? "Hide" : "Search Place"}
            </Button>
        </div>
    </div>

    )
}

export default Banner;