import axios from 'axios';
import { ACCESSTOKEN } from './constant';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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