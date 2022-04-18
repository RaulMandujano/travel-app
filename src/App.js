import React from 'react';
import './App.css';

import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import SearchAppBar from './components/SearchAppBar';
import RecipeReviewCard from './components/RecipeReviewCard';
import CalendarPicker from '@mui/x-date-pickers/CalendarPicker';

function App() {


  return (
    <>
    <SearchAppBar />
    <SimpleBottomNavigation />
    <RecipeReviewCard />
    <CalendarPicker />
    </>
  );
}

export default App;
