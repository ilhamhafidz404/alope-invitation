import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  linkActiveClass: "bg-[#6d442e] text-white",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/',
      name: 'cover',
      component: () => import('../views/Cover.vue')
    },
    {
      path: '/',
      name: 'pengantin',
      component: () => import('../views/Pengantin.vue')
    },
    {
      path: '/',
      name: 'acara',
      component: () => import('../views/Acara.vue')
    },
    {
      path: '/',
      name: 'lokasi',
      component: () => import('../views/Lokasi.vue')
    },
  ]
})

export default router
