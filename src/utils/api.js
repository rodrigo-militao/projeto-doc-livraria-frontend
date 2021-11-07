import axios from 'axios'

const API_URL = "http://localhost:5001/"

export const getArticle =  async (id) => {
    const response = await axios.get(`${API_URL}article/${id}`)
    return response.data
}

export const getArticles = async () => {
    const response = await axios.get(`${API_URL}article/`)
    return response.data
}

export const createArticle = async (article) =>{
    const response = await axios.post(`${API_URL}article/`, article)
    return response.data
}

export const updateArticle = async (id, article) => {
    const response = await axios.put(`${API_URL}article/${id}`, article)
    return response.data
}

export const deleteArticle = async (id) => {
    const response = await axios.delete(`${API_URL}article/${id}`)
    return response.data
}

export const getGroups = async () => {
    const response = await axios.get(`${API_URL}group`)
    return response.data
}
