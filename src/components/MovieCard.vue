<script setup>
defineProps({
  movie: Object
})
</script>

<template>

  <div class="movie-card">
    <img
    v-if="movie.poster_path"
    :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
    :alt="movie.title"
    />
    <div class="movie-title">
      {{ movie.title }}
    </div>
  </div>
</template>

<style scoped>
.movie-card {
  width: 200px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #222;
  text-align: center;
  color: white;
}

.movie-card img {
  width: 100%;
  height: auto;
  border-bottom: 2px solid white;
}

.movie-title {
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
}

</style>
