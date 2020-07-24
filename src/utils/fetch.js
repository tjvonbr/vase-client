import axios from 'axios';

const publicFetch = axios.create({
  baseURL: process.env.VASE_API_URL
});

export { publicFetch };
