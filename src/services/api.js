// services/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/asteroids';
const API_KEY='YOUR-API-KEY' // CHANGE YOUR API KEY HERE

export const getAsteroidsList = (startDate, endDate) => {
  const url = `${BASE_URL}/landing?startDate=${startDate}&endDate=${endDate}&apiKey=${API_KEY}`;
  return axios.get(url);
};

export const getAsteroidDetails = (asteroidId) => {
  const url = `${BASE_URL}/details/${asteroidId}?apiKey=${API_KEY}`;
  return axios.get(url);
};
