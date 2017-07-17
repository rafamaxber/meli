import axios from 'axios'

const API_URL = 'http://localhost:4040/api/items';

export const fetchItemById = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const searchItems = (query) => {
  return axios.get(`${API_URL}?q=${encodeURIComponent(query)}`)
}