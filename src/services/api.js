import axios from "axios";

const apiEndPoint = "https://fakestoreapi.com";

const instance = axios.create({
    baseURL: apiEndPoint,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 60000
});

