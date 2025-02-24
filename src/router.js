import { createRouter, createWebHistory } from 'vue-router'

import MoviesList from './views/MoviesList.vue'
import MovieDetails from './views/MovieDetails.vue'



export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: MoviesList,
      path: '/MoviesList'
    },
    {
      path: '/',
      redirect: '/MoviesList'
    },
    {
      component: MovieDetails,
      path: '/movie/:id',
      props: true
    }
  ]
})
