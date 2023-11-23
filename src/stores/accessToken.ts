import { defineStore } from 'pinia';

export const useAccessTokenStore = defineStore({
  id: 'accessToken',
  state: () => ({
    token: localStorage.getItem('token')
  }),
  getters: {
    isAuthenticated: (state: any) => !!state.token
  },
  actions: {
    setToken(token: string) {
      localStorage.setItem('token', token);
    },
    removeToken() {
      localStorage.removeItem('token');
    }
  }
});
