import axios from 'axios'
import type { ApiResponse } from './types/response.types.ts'

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const getMyWishList = async () => {}
