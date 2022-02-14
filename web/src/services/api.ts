import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',//conectando com o backend 
})

export default api;