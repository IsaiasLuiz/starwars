import axios from 'axios';

const API = axios.create({
  baseURL: 'https://swapi.co/api',
});

export default API;
