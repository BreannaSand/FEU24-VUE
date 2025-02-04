const apiKey = import.meta.env.VITE_API_KEY

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

function fetchData() {
    console.log("Fetching data...")
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
}
export default fetchData;
