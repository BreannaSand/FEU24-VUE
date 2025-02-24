
<script setup>
import { ref, computed, onMounted } from 'vue'
import MovieCard from '../components/MovieCard.vue'
import {fetchData} from '../services/api.js'

const movies = ref ([])
const searchQuery = ref('')

onMounted(async () =>{
    const data = await fetchData()
    if (data && data.results) {
        movies.value = data.results
        console.log(movies.value)
        console.log(movies.value[0].title)
    }
})

//computed property for filtering
const filteredMovies = computed(() => {
    return movies.value.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
})
</script>


<template>
    <div>
        <!--Search Bar-->
        <input v-model="searchQuery"
        placeholder="Search"
        class="search-bar"
        />

    <div class="movies-list">
        <MovieCard
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie"
        />
        </div>
    </div>
</template>


<style >

    .search-bar {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .movies-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
    min-height: 100vh;
}
</style>
