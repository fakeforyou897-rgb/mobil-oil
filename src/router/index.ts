import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CatalogPage from '@/pages/CatalogPage.vue'
import PlaceholderPage from '@/pages/PlaceholderPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/shop', name: 'shop', component: CatalogPage },
    { path: '/cart', name: 'cart', component: PlaceholderPage, props: { title: 'Your garage bag', eyebrow: 'Cart' } },
    { path: '/profile', name: 'profile', component: PlaceholderPage, props: { title: 'Your driver profile', eyebrow: 'Profile' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
