import authHeader from "./authHeader";

export default (params = {}) => {

    let url = 'https://airbnb13.p.rapidapi.com/search-location'

    const keys = Object.keys(params);

    keys.forEach((key, index) => {
        if(index === 0) url += `?${key}=${params[key]}`
        else url += `&${key}=${params[key]}`
    })

    const options = {
        method: 'GET',
        headers: authHeader,
    };


    return fetch(url, options)
        .then(response => response.json())
}