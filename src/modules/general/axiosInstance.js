//Instancia de Axios que nos permitirá acceder a las rutas de la API que están dentro del backend

import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-type": "application/json"
    }
});

export default api;