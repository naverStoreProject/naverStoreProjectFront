export interface LoginForm {
  email: string
  pwd: string
}

export interface UserInfo {
  name: string
  nickname: string
  email: string
  phone: string
  address: string
  wishNum: number
  balance: number
}

export interface TokenInfo {
  accessToken: string
}
