import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const authenticateUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const shareContent = async (content) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/content/share`, content);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/messages/send`, message);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const fetchMessages = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/messages/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};