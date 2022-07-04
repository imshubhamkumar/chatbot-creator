import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/home/HelloWorld.vue';
import botDashboardHomeVue from '../components/botDashboard/botDashboardHome.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/dashbord',
    name: 'Dashboard',
    component: botDashboardHomeVue
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router