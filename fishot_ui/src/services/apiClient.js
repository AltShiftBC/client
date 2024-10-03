
// apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Make sure this is correct
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
