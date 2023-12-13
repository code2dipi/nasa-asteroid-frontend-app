// services/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/asteroids';

export const getAsteroidsList = (startDate, endDate) => {
  const url = `${BASE_URL}/landing?startDate=${startDate}&endDate=${endDate}&apiKey=dhYabotopiVNsXMDMyLkGLE3EjomwBi8jMVipGzr`;
  return axios.get(url);
};

export const getAsteroidDetails = (asteroidId) => {
  const url = `${BASE_URL}/details/${asteroidId}?apiKey=dhYabotopiVNsXMDMyLkGLE3EjomwBi8jMVipGzr`;
  return axios.get(url);
};
