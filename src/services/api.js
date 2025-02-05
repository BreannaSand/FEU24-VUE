const apiKey = import.meta.env.VITE_API_KEY



export async function fetchData() {
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

    console.log("Fetching data...")
    try {
        const response = await fetch(API_URL)
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error("API Fetch Error: error")
        return null
    }
}
