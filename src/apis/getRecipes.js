const getRecipes = (params = {}) => {

    let url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients`
    const keys = Object.keys(params);

    keys.forEach((key, index) => {
        if(index === 0) url += `?${key}=${params[key]}`
        else url += `&${key}=${params[key]}`
    })


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'b2676f4bacmshf024e52eb9e1defp1b229djsn7b29df711424'
        },
        query: JSON.stringify(params)
    };

    return fetch(url, options)
        .then(res => res.json())
}

export default getRecipes;