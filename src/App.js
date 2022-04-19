import React from 'react';
import './App.css';

import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import SearchBar from './components/SearchBar';
import RecipeReviewCard from './components/RecipeReviewCard';

function App() {


  return (
    <>
    <SearchBar />
    <SimpleBottomNavigation />
    <RecipeReviewCard />
    </>
  );
}

export default App;
