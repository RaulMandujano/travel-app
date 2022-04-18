const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
		'X-RapidAPI-Key': 'b2676f4bacmshf024e52eb9e1defp1b229djsn7b29df711424'
	}
};

fetch('https://airbnb13.p.rapidapi.com/autocomplete?query=paris', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));