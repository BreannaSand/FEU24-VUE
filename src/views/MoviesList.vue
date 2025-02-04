
<script setup>
import MovieCard from '../components/MovieCard.vue'
import fetchData from '../services/api.js'
fetchData()
</script>


<template>
    <div>
        <h1>Movies List</h1>
        <MovieCard />

    </div>

</template>


<style>

</style>
