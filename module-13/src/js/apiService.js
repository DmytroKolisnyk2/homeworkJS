import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const key = '23244571-e0b1f6062f2659059b6ad356b';

export const apiRequest = (query, page) => {
  return axios.get(`/?image_type=photo&key=${key}&orientation=horizontal&q=${query}&page=${page}&per_page=12`);
};