import axios from 'axios'

const API_URL = "http://localhost:5001/"

export async function getArticle(id) {
    const response = await axios.get(`${API_URL}${id}`)
    return response.data
}

export async function getArticles() {
    const response = await axios.get(`${API_URL}`)
    return response.data
}

export async function createArticle(article) {
    const response = await axios.post(`${API_URL}`, article)
    return response.data
}

export async function updateArticle(id, article) {
    const response = await axios.put(`${API_URL}${id}`, article)
    return response.data
}

export async function deleteArticle(id) {
    const response = await axios.delete(`${API_URL}${id}`)
    return response.data
}
