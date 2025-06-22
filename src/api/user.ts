import axios from 'axios'

// 로그인 API 요청
export const loginApi = (email: string, password: string) => {
  return axios.post('/api/login', { email, pwd: password })
}

// 주문내역 관련 API 요청
// 주문내역 조회
export async function fetchOrderGroups(memberId: number) {
  return await axios.get(`/api/order-group/member/${memberId}`)
}
export async function fetchOrderItemsByOrderId(orderId: number) {
  return await axios.get(`/api/order-item/order/${orderId}`)
}

// 주문내역 검색
export async function searchOrderItems(memberId: number, keyword: string) {
  const { data } = await axios.get('/api/order-item/search', {
    params: { memberId, keyword },
  })
  return data
}

// 주문내역 삭제
export async function deleteOrderItem(id: number) {
  return await axios.delete(`/api/order-items/${id}`)
}

// 주문내역 상태 업데이트
export async function updateOrderItemStatus(id: number, status: string) {
  await axios.put(`/api/order-item/status`, null, {
    params: { id, status },
  })
}
