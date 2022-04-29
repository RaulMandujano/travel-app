import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';

import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import Banner from './components/Banner';
import { Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites';

function App() {

  // container justify="center" alignItems="center" direction="column"
  return (
    <Grid container justify="center" alignItems="center" direction="column" className="page">

      <SimpleBottomNavigation />
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>


    </Grid>
  );
}

export default App;
