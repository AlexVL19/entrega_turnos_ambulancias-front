import api from "../../general/axiosInstance.js"

export default {

    getRequest(datos) {
        return api.post("/addTurnChange", datos)
    }
}