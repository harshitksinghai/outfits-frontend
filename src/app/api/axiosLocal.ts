import axios from "axios";

const apiLocal = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiLocal;