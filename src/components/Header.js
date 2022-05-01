import React from 'react';
import '../components/Header.css';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';
import {Link} from "react-router-dom";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';


const Header = ()=> {

    const [value, setValue] = React.useState(0);
    const navigate = useNavigate()

    return(
        <div className="header">
            <Link to="/"><img className="header__icon" src="/App-logos/App-logos_transparent.png" alt="logo"/></Link>
            
            <div className="header__center">
                <Box sx={{ width: 500 }}>
                    <BottomNavigation sx={{ border: "none", }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                >
                    
                <BottomNavigationAction onClick={() => navigate('/explore')} label="Explore" icon={<HomeIcon />} />
                <BottomNavigationAction onClick={() => navigate('/nearby')} label="Near by" icon={<HomeIcon />} />
                <BottomNavigationAction onClick={() => navigate('/favorites')} label="Favorites" icon={<FavoriteIcon />} />
                {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
                </BottomNavigation>
                </Box>
            </div>
            
            <div className="header__right">

                <LanguageIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header;