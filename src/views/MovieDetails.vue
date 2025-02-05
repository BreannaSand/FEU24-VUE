<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { fetchData } from '../services/api';

    const route = useRoute()
    const movie = ref(null)

    onMounted(async () => {
        const data = await fetchData()
        if (data && data.results) {
            movie.value = data.results.find(m =>m.id == route.params.id)
        }
    })
</script>

<template>
    <div v-if="movie" class="movie-details">
        <img
        v-if="movie.poster_path"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :alt="movie.title"
        class="movie-poster"
        />
        <h1>{{movie.title}}</h1>
        <p><strong>Rating:</strong> {{ movie.vote_average }}</p>
        <p><strong>Overview:</strong> {{ movie.overview }}</p>
    </div>

</template>

<style scoped>
.movie-details {
    text-align: center;
    padding: 20px;
}

.movie-poster {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 20px;
}

</style>
