import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as null | { id: number; name: string },
    token: '' as string,
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        const res = await axios.post('/api/login', { email, password })

        this.token = res.data.token
        this.user = res.data.user

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
  },
})
