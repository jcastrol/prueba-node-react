import axios from 'axios';
const getToken = () => localStorage.getItem('token');

const api = axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },

});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;