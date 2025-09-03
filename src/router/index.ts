// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// import your views
import Home from '../views/Home/Home.vue'


// define routes
const routes = [
  { path: '/', name: 'Home', component: Home }
]

// create router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
