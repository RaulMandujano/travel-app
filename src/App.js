import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';

import Header from './components/Header';
// import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import Banner from './components/Banner';

import { Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites';
import Home from './components/Home';

function App() {

  // container justify="center" alignItems="center" direction="column"
  return (
    <Grid container justify="center" alignItems="center" direction="column" className="page">

      <Header />
      {/* <SimpleBottomNavigation /> */}
      <Routes>
        <Route path='/explore' element={<Banner />} />
        <Route path='/nearby' element={<Banner />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>

      <Home />


    </Grid>
  );
}

export default App;
