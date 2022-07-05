import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores'
import HelloWorld from '../components/home/HelloWorld.vue';
import HomeVue from '../components/home/home.vue';
import botDashboardHomeVue from '../components/botDashboard/botDashboardHome.vue';
import LoginComponentVue from '../components/auth/login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeVue,
    children: [
      {
        path: '/',
        name: 'Home',
        component: HelloWorld,
      },
      {
        path: '/dashboard/:botId',
        name: 'Dashboard',
        component: botDashboardHomeVue
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponentVue,
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  linkActiveClass: 'active',
  routes
})
router.beforeEach(async (to) => {
  const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
})
export default router