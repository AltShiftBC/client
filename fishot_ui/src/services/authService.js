// authService.js
import apiClient from './apiClient';

export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    const { token } = response.data;
    localStorage.setItem('token', token);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    const { token } = response.data;
    localStorage.setItem('token', token);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logoutUser = () => {
  localStorage.removeItem('token');
};
