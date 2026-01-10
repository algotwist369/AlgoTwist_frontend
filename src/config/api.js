// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://algotwist.onrender.com';

export const API_ENDPOINTS = {
  SEND_EMAIL: `${API_BASE_URL}/api/send-email`,
};

export default API_BASE_URL; 