import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as null | { id: number; name: string },
    token: '' as string,
  }),

  actions: {
    async login(email: string, password: string) {
      console.log('login 함수 진입')
      try {
        console.log('axios 요청 전:', email, password)
        const res = await axios.post('/api/login', { email, pwd: password })
        console.log('axios 응답:', res)

        const accessToken = res.data.data?.accessToken
        console.log('accessToken:', accessToken)
        if (!accessToken) {
          console.error('Login failed: accessToken is missing', res)
          return false
        }
        console.log(accessToken)
        this.token = accessToken
        this.user = null

        // JWT 토큰을 localStorage에 저장
        localStorage.setItem('token', this.token)

        // Axios 기본 Authorization 헤더 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`

        return true
      } catch (err) {
        console.error('Login failed', err)
        return false
      }
    },

    logout() {
      this.token = ''
      this.user = null

      // localStorage에서 토큰 제거
      localStorage.removeItem('token')

      // Axios 헤더 제거
      delete axios.defaults.headers.common['Authorization']
    },

    restoreToken() {
      const savedToken = localStorage.getItem('token')
      if (savedToken) {
        this.token = savedToken
        axios.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`
      }
    },

    async fetchUserInfo() {
      try {
        const res = await axios.get('/api/member/me')
        this.user = res.data.data // 서버에서 내려준 유저 정보
      } catch (err) {
        console.error('Failed to fetch user info', err)
        this.user = null
      }
    },
  },
})
