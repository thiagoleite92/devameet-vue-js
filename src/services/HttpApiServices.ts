import axios, { type AxiosInstance } from 'axios';

export class HttpApiServices {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: import.meta.env.VITE_VUE_API_URL + '/api'
    });

    this.axios.interceptors.request.use((config: any) => {
      const token = localStorage.getItem('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  protected post(url: string, data: any) {
    return this.axios.post(url, data);
  }

  protected get(url: string) {
    return this.axios.get(url);
  }

  protected put(url: string, data: any) {
    return this.axios.put(url, data);
  }

  protected delete(url: string) {
    return this.axios.delete(url);
  }
}
