
<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '../components/MovieCard.vue'
import {fetchData} from '../services/api.js'

const movies = ref ([])

onMounted(async () =>{
    const data = await fetchData()
    if (data && data.results) {
        movies.value = data.results
        console.log(movies.value)
        console.log(movies.value[0].title)
    }
})
</script>


<template>
    <div class="movies-list">
        <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        />
        </div>

</template>


<style >
    .movies-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
    min-height: 100vh;
}
</style>
