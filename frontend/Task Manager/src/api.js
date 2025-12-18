import axios from 'axios';
import { ACCESSTOKEN } from './constant';

const isDevelopment = import.meta.env.MODE === 'development';

console.log("isDevelopment", isDevelopment)

const api = axios.create({
  baseURL: isDevelopment? import.meta.env.VITE_API_URL_LOCAL : import.meta.env.VITE_API_URL_DEV,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESSTOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}
, (error) => {
  return Promise.reject(error);
});

export default api;