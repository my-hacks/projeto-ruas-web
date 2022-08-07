import axios from "axios";

const api = axios.create({
    baseURL: 'https://teiajobs-api.azurewebsites.net',
});

export default api;