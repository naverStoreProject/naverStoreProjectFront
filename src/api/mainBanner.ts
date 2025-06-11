import axios, { type AxiosResponse } from 'axios'
import type { MainBannersResponse, MainBannerResponse } from '@/types/api.ts'

// 배너 데이터 가져오기
const mbanners = {
  //모두 가져오기
  getAllbanners: async (): Promise<MainBannersResponse> => {
    try {
      const apiUrl = '/api/mainBanners'
      const response: AxiosResponse<MainBannersResponse> = await axios.get(apiUrl)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  },

  //하나만 가져오기
  getMainBanner: async (id: number): Promise<MainBannerResponse> => {
    try {
      const apiUrl = `/api/mainBanners/${id}`
      const response: AxiosResponse<MainBannerResponse> = await axios.get(apiUrl)
      return response.data
    } catch (error) {
      throw error
    }
  },
}

export default mbanners
