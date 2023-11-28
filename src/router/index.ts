import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import HomeView from '../views/HomeView.vue';
import { useAccessTokenStore } from '@/stores/accessToken';
import ProfileViewVue from '@/views/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { rotaPrivada: true }
    },
    {
      path: '/',
      name: 'login',
      component: LoginView,
      props: true
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/user',
      name: 'user',
      component: ProfileViewVue,
      meta: { rotaPrivada: true }
    }
  ]
});

router.beforeEach((to) => {
  const store = useAccessTokenStore();

  if (to.name !== 'login' && to.meta.rotaPrivada && !store.isAuthenticated) {
    return { name: 'login' };
  } else if (to.name === 'register' && store.isAuthenticated) {
    return { name: 'home' };
  }
});

export default router;
