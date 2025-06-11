import axios, { type AxiosResponse } from 'axios'
import type { MainBannerType } from '@/types/mainBanner'
import type { ApiResponse } from '@/types/api.ts'

// 배너 데이터 가져오기
const mainBannerApi = {
  //모두 가져오기
  getAllbanners: async (): Promise<ApiResponse<MainBannerType[]>> => {
    try {
      const apiUrl = '/api/mainBanners'
      const response: AxiosResponse<ApiResponse<MainBannerType[]>> = await axios.get(apiUrl)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  },

  //하나만 가져오기
  getMainBanner: async (id: number): Promise<ApiResponse<MainBannerType>> => {
    try {
      const apiUrl = `/api/mainBanners/${id}`
      const response: AxiosResponse<ApiResponse<MainBannerType>> = await axios.get(apiUrl)
      return response.data
    } catch (error) {
      throw error
    }
  },
}

export default mainBannerApi
