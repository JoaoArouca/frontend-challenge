import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com', // TODO: change to env
})
