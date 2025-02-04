const apiKey = import.meta.env.API_KEY

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`


fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`)
        }
        return response.json()
    })
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error("API Fetch Error: error")
    })
