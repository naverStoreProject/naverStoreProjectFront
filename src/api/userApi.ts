import axios from 'axios'
import type { ApiResponse } from './types/response.types.ts'
import { type TokenInfo, type LoginForm, type UserInfo } from './types/user.types.ts'
import { type Product } from '@/components/products/productData.ts'

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

const getMyInfo = async () => {
  try {
    const response = await api.get<ApiResponse<UserInfo>>(`/member/me`, {
      validateStatus: status => status >= 200 && status < 500,
    })
    return response.data
  } catch (error) {
    console.error('내 정보 조회 실패: ', error)
  }
}

const login = async (form: LoginForm) => {
  try {
    const response = await api.post<ApiResponse<TokenInfo>>('/login', form, {
      validateStatus: status => status >= 200 && status < 500,
    })
    return response.data
  } catch (error) {
    console.error('에러 발생:', error)
  }
}

const getMyWishList = async () => {
  try {
    const response = await api.get(`/member/mywishlist`)
    const list: any[] = response.data.data

    const productList: Product[] = list.map(data => ({
      id: '123',
      brand: data.brand,
      name: data.name,
      image: data.image,
      originalPrice: data.originalPrice.toString(),
      currentPrice: data.currentPrice.toString(),
      discountRate: data.discountRate.toString(),
      adTag: true,
      averageRating: data.averageRating.toString(),
      ratingCount: data.ratingCount.toString(),
    }))

    return productList
  } catch (error) {
    console.error('에러 발생:', error)
  }
}

export { getMyInfo, login, getMyWishList }
