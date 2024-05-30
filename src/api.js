import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this to your backend API URL

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
};

export const signup = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    return error.response ? error.response.data : null;
  }
};
