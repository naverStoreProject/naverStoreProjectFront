export interface OrderItem {
  id: number
  status: '배송 완료' | '배송 중' | '구매확정완료'
  image: string
  title: string
  date: string
  price: number
  company: string
  statusChangedAt: string
}

export const orderedList: OrderItem[] = [
  {
    id: 1,
    status: '배송 완료',
    statusChangedAt: '2025-06-01T09:13:00',
    image: 'https://placehold.co/300x300',
    title: '여름 인견 이불 세트 SS',
    date: '6.1. 09:13 주문',
    price: 35000,
    company: 'coolsummer',
  },
  {
    id: 2,
    status: '배송 중',
    statusChangedAt: '2025-06-02T10:22:00',
    image: 'https://placehold.co/300x300',
    title: '오가닉 무지 타올 3장 세트',
    date: '6.2. 10:22 주문',
    price: 22000,
    company: 'sunsu-towel',
  },
  {
    id: 3,
    status: '구매확정완료',
    statusChangedAt: '2025-06-03T08:00:00',
    image: 'https://placehold.co/300x300',
    title: '쿨링 젤 매트 Q 사이즈',
    date: '6.3. 08:00 주문',
    price: 58000,
    company: 'coolgel',
  },
  {
    id: 4,
    status: '배송 중',
    statusChangedAt: '2025-06-04T11:35:00',
    image: 'https://placehold.co/300x300',
    title: '스노우 화이트 배게커버 2p',
    date: '6.4. 11:35 주문',
    price: 12000,
    company: 'sleepbest',
  },
  {
    id: 5,
    status: '배송 완료',
    statusChangedAt: '2025-06-05T14:07:00',
    image: 'https://placehold.co/300x300',
    title: '자카드 여름 블랭킷',
    date: '6.5. 14:07 주문',
    price: 29000,
    company: 'blanko',
  },
  {
    id: 6,
    status: '배송 완료',
    statusChangedAt: '2025-06-06T09:45:00',
    image: 'https://placehold.co/300x300',
    title: '모달 프리미엄 이불 커버',
    date: '6.6. 09:45 주문',
    price: 41000,
    company: 'modalhouse',
  },
  {
    id: 7,
    status: '구매확정완료',
    statusChangedAt: '2025-06-07T13:28:00',
    image: 'https://placehold.co/300x300',
    title: '순면 침대패드 SS',
    date: '6.7. 13:28 주문',
    price: 33000,
    company: 'cottonpad',
  },
  {
    id: 8,
    status: '배송 중',
    statusChangedAt: '2025-06-08T15:50:00',
    image: 'https://placehold.co/300x300',
    title: '릴렉스 마이크로화이버 이불',
    date: '6.8. 15:50 주문',
    price: 39000,
    company: 'relax',
  },
  {
    id: 9,
    status: '배송 완료',
    statusChangedAt: '2025-06-09T17:10:00',
    image: 'https://placehold.co/300x300',
    title: '시어서커 여름이불 S',
    date: '6.9. 17:10 주문',
    price: 27000,
    company: 'coolnight',
  },
  {
    id: 10,
    status: '구매확정완료',
    statusChangedAt: '2025-06-10T10:30:00',
    image: 'https://placehold.co/300x300',
    title: '에어매쉬 매트리스커버',
    date: '6.10. 10:30 주문',
    price: 46000,
    company: 'airhome',
  },
]
