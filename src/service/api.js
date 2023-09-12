import axios from 'axios';

const api = axios.create({
    baseURL: 'https://monkfish-app-7mrfk.ondigitalocean.app/'
});

export default api;