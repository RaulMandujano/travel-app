import { useEffect, useState } from "react";
import getRecipes from "../apis/getRecipes";
import RecipeReviewCard from "../components/RecipeReviewCard";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

export default function Home() {
  const [receipes, setReceipes] = useState([]);

  useEffect(() => {
    getRecipes({ingredients: 'pasta'})
            .then(res => setReceipes(res))
  }, [])
  console.log(receipes)
  return (
    <>
      <ResponsiveAppBar onUpdateRecipes={receipes => setReceipes(receipes)} />
      <div style={{ padding: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {receipes.map((receipe, index) => <RecipeReviewCard key={index} {...receipe} />)}
      </div>

    </>
  )
}
