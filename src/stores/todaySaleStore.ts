import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 상품 데이터 타입
export interface TodaySaleItem {
  id: string
  image: string
  name: string
  brand: string
  discountPrice: number
  originalPrice: number
  title: string
}

export const useTodaySaleStore = defineStore('todaySale', () => {
  // 행사 종료 시간 (오늘 자정 기준 예시)
  const saleEndTime = ref(new Date().setHours(23, 59, 59, 999))

  const items = ref<TodaySaleItem[]>([
      {
        id: '1',
        image: 'https://dummyimage.com/200x200/',
        title: '무선 이어폰 특가',
        name: '에어사운드 T12',
        brand: 'AirSound',
        discountPrice: 49000,
        originalPrice: 99000,
      },
      {
        id: '2',
        image: 'https://dummyimage.com/200x200/',
        title: '간편하게 데일리 백팩',
        name: '어반백 블랙',
        brand: 'Urbanist',
        discountPrice: 29000,
        originalPrice: 59000,
      },
      {
        id: '3',
        image: 'https://dummyimage.com/200x200/',
        title: '시원한 여름 반팔티',
        name: '썸머 티셔츠',
        brand: 'CoolWear',
        discountPrice: 12000,
        originalPrice: 25000,
      },
      {
        id: '4',
        image: 'https://dummyimage.com/200x200/',
        title: '프리미엄 블루투스 스피커',
        name: 'BoomBox X5',
        brand: 'SonicGear',
        discountPrice: 65000,
        originalPrice: 129000,
      },
      {
        id: '5',
        image: 'https://dummyimage.com/200x200/',
        title: '게이밍 마우스 특가',
        name: 'GX-Mouse Pro',
        brand: 'GameON',
        discountPrice: 22000,
        originalPrice: 42000,
      },
      {
        id: '6',
        image: 'https://dummyimage.com/200x200/',
        title: '오가닉 천연 샴푸',
        name: '내추럴 클렌징 샴푸',
        brand: 'HerbCare',
        discountPrice: 15000,
        originalPrice: 28000,
      },
      {
        id: '7',
        image: 'https://dummyimage.com/200x200/',
        title: '카페라떼 50팩 기획전',
        name: '라떼 한잔의 여유',
        brand: 'CoffeeTime',
        discountPrice: 19900,
        originalPrice: 39000,
      },
      {
        id: '8',
        image: 'https://dummyimage.com/200x200/',
        title: '가성비 캠핑 의자',
        name: '컴팩트 캠핑체어',
        brand: 'Campers',
        discountPrice: 27000,
        originalPrice: 54000,
      },
      {
        id: '9',
        image: 'https://dummyimage.com/200x200/',
        title: '여름용 기능성 쿨러닝 팬츠',
        name: '쿨링 팬츠 2종세트',
        brand: 'FitLife',
        discountPrice: 34000,
        originalPrice: 68000,
      },
      {
        id: '10',
        image: 'https://dummyimage.com/200x200/',
        title: 'LED 무드등 수면조명',
        name: '드림라이트 360',
        brand: 'DreamLab',
        discountPrice: 18000,
        originalPrice: 35000,
      },
      {
        id: '11',
        image: 'https://dummyimage.com/200x200/',
        title: '초경량 런닝화',
        name: '에어스텝 런',
        brand: 'RunFlex',
        discountPrice: 48000,
        originalPrice: 98000,
      },
      {
        id: '12',
        image: 'https://dummyimage.com/200x200/',
        title: '프리미엄 텀블러',
        name: '보온보냉 스틸컵',
        brand: 'HydraStyle',
        discountPrice: 12000,
        originalPrice: 25000,
      },
      {
        id: '13',
        image: 'https://dummyimage.com/200x200/',
        title: '스마트폰 거치대',
        name: '각도조절 폰 스탠드',
        brand: 'MobileBuddy',
        discountPrice: 8900,
        originalPrice: 15900,
      },
      {
        id: '14',
        image: 'https://dummyimage.com/200x200/',
        title: '전동 칫솔 세트',
        name: '화이트클린 케어',
        brand: 'SmileOn',
        discountPrice: 33000,
        originalPrice: 65000,
      },
      {
        id: '15',
        image: 'https://dummyimage.com/200x200/',
        title: '스마트 체중계 할인',
        name: '피트니스 트래커',
        brand: 'HealthKit',
        discountPrice: 27000,
        originalPrice: 52000,
      },
      {
        id: '16',
        image: 'https://dummyimage.com/200x200/',
        title: '여름용 미니 선풍기',
        name: '핸디쿨러',
        brand: 'CoolTech',
        discountPrice: 9900,
        originalPrice: 18900,
      },
      {
        id: '17',
        image: 'https://dummyimage.com/200x200/',
        title: '데일리 가죽 카드지갑',
        name: '슬림 포켓 월렛',
        brand: 'LeatherOne',
        discountPrice: 23000,
        originalPrice: 46000,
      },
      {
        id: '18',
        image: 'https://dummyimage.com/200x200/',
        title: '어린이용 물총 세트',
        name: '썸머워터건',
        brand: 'FunPlay',
        discountPrice: 8000,
        originalPrice: 16000,
      },
      {
        id: '19',
        image: 'https://dummyimage.com/200x200/',
        title: '여름철 해충퇴치기',
        name: '버그제로 2.0',
        brand: 'SafeHome',
        discountPrice: 27000,
        originalPrice: 49000,
      },
      {
        id: '20',
        image: 'https://dummyimage.com/200x200/',
        title: '무선 충전 마우스패드',
        name: '패드 + 충전기 일체형',
        brand: 'DeskTopia',
        discountPrice: 19000,
        originalPrice: 39000,
      },
  ])

  // 현재 시간 기준 남은 시간 계산
  const remainingTime = computed(() => {
    const now = new Date().getTime()
    const distance = saleEndTime.value - now

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  })

  return {
    items,
    saleEndTime,
    remainingTime,
  }
})
