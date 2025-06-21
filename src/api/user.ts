import axios from 'axios'

// 로그인 API 요청
export const loginApi = async (email: string, password: string) => {
  const response = await axios.post('/api/login', { email, pwd: password })
  return response.data
}
