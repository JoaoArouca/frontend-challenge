import axios from 'axios'

const LAZY_TIME = 3000

export const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com', // TODO: change to env
})

apiClient.interceptors.request.use(async (config) => {
  await new Promise((resolve) => {
    setTimeout(resolve, LAZY_TIME)
  })
  return config
})
