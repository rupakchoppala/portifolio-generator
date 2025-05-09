import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://portifolio-generator-3.onrender.com",
    headers: {
        "Content-Type": "application/json"
    }
});

// Add an interceptor to dynamically attach the token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
