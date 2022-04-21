export default function handler() {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'b2676f4bacmshf024e52eb9e1defp1b229djsn7b29df711424'
    }
  };
  
  fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=chicken&number=5&ignorePantry=true&ranking=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}












// const options = {
//   method: 'GET',
//   headers: {
//   'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//   'X-RapidAPI-Key': 'b2676f4bacmshf024e52eb9e1defp1b229djsn7b29df711424'
//   }
//   };
  
//   fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=chicken&number=5&ignorePantry=true&ranking=1', options)
//   .then(response => response.json())
//   .then(response => console.log(respons