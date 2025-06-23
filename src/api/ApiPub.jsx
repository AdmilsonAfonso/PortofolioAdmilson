import axios from "axios"


export const ApiPub = axios.create({
    baseURL:"http://localhost:8080/publicacao"
})


export const ApiLogin = axios.create({
    baseURL:"http://localhost:8080/api/usuarios"
})