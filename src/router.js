import { createRouter, createWebHistory } from 'vue-router'

import MoviesList from './views/MoviesList.vue'
import MovieDetails from './views/MovieDetails.vue'
import MovieCard from './components/MovieCard.vue'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: MoviesList,
      path: '/MoviesList'
    },
    {
      component: MovieDetails,
      path: '/MovieDetails'
    },
    {
      component: MovieCard,
      path: '/MovieCard'
    }
  ]
})
