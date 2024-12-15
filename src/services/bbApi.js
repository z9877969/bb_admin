import axios from 'axios';

export const bbInstance = axios.create({
  baseURL: 'http://localhost:4040/api',
  // baseURL: 'https://api.brushbuddy.com.ua/api',
  // baseURL: 'https://brush-buddy-back.onren/der.com/api',
});
