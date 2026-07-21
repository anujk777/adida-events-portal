import axios from 'axios';

// Create an Axios instance
const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Update this for production
});

// Interceptor to attach JWT token to requests
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

// Event API calls
export const fetchEvents = () => API.get('/events');
export const createEvent = (eventData) => API.post('/events', eventData);

export default API;