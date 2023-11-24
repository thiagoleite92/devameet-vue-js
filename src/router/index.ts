import LoginViewVue from '@/views/LoginView.vue';
import RegisterViewVue from '@/views/RegisterView.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    },
    {
      path: '/cadastro',
      name: 'register',
      component: RegisterViewVue
    }
  ]
});

export default router;
