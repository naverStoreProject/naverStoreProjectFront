import axios from 'axios'

// 로그인 API 요청
export const loginApi = (email: string, password: string) => {
  return axios.post('/api/login', { email, pwd: password })
}
