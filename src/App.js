import React from 'react';
import './App.css';

import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import Banner from './components/Banner';
import RecipeReviewCard from './components/RecipeReviewCard';
import Grid from '@mui/material/Grid';

function App() {

  // container justify="center" alignItems="center" direction="column"
  return (
    <Grid>

<Banner />

<SimpleBottomNavigation />

    <RecipeReviewCard />

    </Grid>
  );
}

export default App;
