// 주문 상태 enum 정의
export type OrderItemStatus =
  | '배송완료'
  | '교환완료'
  | '환불완료'
  | '배송중'
  | '주문완료'
  | '상품준비중'
  | '구매확정'

// OrderGroup 타입
export interface OrderGroup {
  id: number
  memberId: number
}

// OrderItem 타입
export interface OrderItem {
  id: number
  orderGroupId: number
  title: string
  detail: string
  image: string
  count: number
  price: number
  link: string
  orderTime: string
  status: OrderItemStatus
  statusChangedTime: string
  company: string
}
