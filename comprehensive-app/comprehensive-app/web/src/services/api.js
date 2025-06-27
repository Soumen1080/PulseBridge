import axios from 'axios';

const API_URL = 'http://your-backend-url/api'; // Replace with your backend URL

export const authenticateUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const shareContent = async (content) => {
    try {
        const response = await axios.post(`${API_URL}/content/share`, content);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(`${API_URL}/messages/send`, message);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const fetchMessages = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/messages/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};