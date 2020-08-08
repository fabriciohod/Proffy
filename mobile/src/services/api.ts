import axios from 'axios';

const api = axios.create({
  baseURL: 'http://177.235.70.18:3333'
});

export default api;