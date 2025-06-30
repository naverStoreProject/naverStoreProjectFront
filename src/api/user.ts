import type { ApiResponse } from '@/types/api'
import type { OrderItem } from '@/types/order'
import axios, { type AxiosResponse } from 'axios'

// 로그인 API 요청
export const loginApi = (email: string, password: string) => {
  return axios.post('/api/login', { email, pwd: password })
}

// 주문내역 관련 API 요청
const accessToken = import.meta.env.VITE_ACCESS_TOKEN

export const orderApi = {
  // 주문내역 조회
  getMyOrders: async (): Promise<ApiResponse<OrderItem[]>> => {
    try {
      const apiUrl = '/api/order'
      const response: AxiosResponse<ApiResponse<OrderItem[]>> = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      console.error(err)
      throw err
    }
  },

  // 주문 상세 조회
  getOrderById: async (orderId: number): Promise<ApiResponse<OrderItem>> => {
    try {
      const apiUrl = `/api/order/${orderId}`
      const response: AxiosResponse<ApiResponse<OrderItem>> = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      console.error(err)
      throw err
    }
  },

  // 주문 삭제
  deleteOrderItem: async (orderId: number): Promise<ApiResponse<void>> => {
    try {
      const apiUrl = `/api/order/${orderId}`
      const response: AxiosResponse<ApiResponse<void>> = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      console.error(err)
      throw err
    }
  },
}
