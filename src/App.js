import React from 'react';
import './App.css';

import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import Banner from './components/Banner';
import Grid from '@mui/material/Grid';

function App() {

  // container justify="center" alignItems="center" direction="column"
  return (
    <Grid container justify="center" alignItems="center" direction="column" className="page">

<SimpleBottomNavigation />

<Banner />

    </Grid>
  );
}

export default App;
