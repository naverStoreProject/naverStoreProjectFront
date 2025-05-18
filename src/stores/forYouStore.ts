import { defineStore } from 'pinia'

export interface ViewedItem {
  id: string
  brand: string
  name: string
  discountPrice: number
  originalPrice: number
  tag?: string           // ‘찜질팩’ 같은 키워드
  image: string          
  viewedAt: number
}

export const useForYouStore = defineStore('forYou', {
  state: () => ({
    viewedArr: <ViewedItem[]>[
  {
    id: 'p-001',
    brand: 'RedBean',
    name: '레드빈 찜질팩 세트',
    discountPrice: 24900,
    originalPrice: 31900,
    tag: '찜질팩',
    image: 'https://dummyimage.com/300x300/',
    viewedAt: Date.now() - 5 * 60 * 1000,
  },
  {
    id: 'p-002',
    brand: 'Belkin',
    name: '108W 4포트 USB‑C PD 충전기',
    discountPrice: 78400,
    originalPrice: 149000,
    tag: '휴대폰충전기',
    image: 'https://dummyimage.com/300x300/',
    viewedAt: Date.now() - 26 * 60 * 1000,
  },
  {
    id: 'p-003',
    brand: 'Samsung',
    name: '갤럭시북5 Pro 울트라5',
    discountPrice: 1633000,
    originalPrice: 1899000,
    tag: '노트북',
    image: 'https://dummyimage.com/300x300/',
    viewedAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
  },
  {
    id: 'p-004',
    brand: 'Jill Stuart',
    name: '15인치 노트북숄더백',
    discountPrice: 141600,
    originalPrice: 206400,
    tag: '숄더백',
    image: 'https://dummyimage.com/300x300/',
    viewedAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
  },
  {
    id: 'p-005',
    brand: 'InstantSoup',
    name: '돼지고기 순대국 1팩',
    discountPrice: 2900,
    originalPrice: 3900,
    tag: '즉석국',
    image: 'https://dummyimage.com/300x300/',
    viewedAt: Date.now() - 24 * 60 * 60 * 1000,
  },
  {
    id: 'p-006',
    brand: 'Allo',
    name: '140W GaN 1포트 PD 충전기',
    discountPrice: 61900,
    originalPrice: 89900,
    tag: '휴대폰충전기',
    image: 'https://dummyimage.com/300x300/',
    viewedAt: Date.now() - 26 * 60 * 1000,
  },
  {
    id: 'p-007',
    brand: 'Herb Hot',
    name: '황토 허브 찜질팩 세트',
    discountPrice: 31680,
    originalPrice: 49240,
    tag: '찜질팩',
    image: 'https://dummyimage.com/300x300/',
    viewedAt: Date.now() - 5 * 60 * 1000,
  },
  {
    id: 'p-008',
    brand: 'Anker',
    name: '65W 4포트 초고속 충전기',
    discountPrice: 56050,
    originalPrice: 59000,
    tag: '휴대폰충전기',
    image: 'https://dummyimage.com/300x300/',
    viewedAt: Date.now() - 26 * 60 * 1000,
  },
  {
    id: 'p-009',
    brand: 'QuickMeal',
    name: '사골 육개장 600g',
    discountPrice: 3400,
    originalPrice: 5400,
    tag: '즉석국',
    image: 'https://dummyimage.com/300x300/',
    viewedAt: Date.now() - 40 * 60 * 1000,
  },
    ],
  }),

  getters: {
    sortedViewedArr(state) {
    return [...state.viewedArr].sort((a, b) => b.viewedAt - a.viewedAt);
    },
    grouped(state) {
      const map: Record<string, ViewedItem[]> = {}
      state.viewedArr.forEach((it) => {
        const diff = Date.now() - it.viewedAt
        const min = Math.floor(diff / 60000)
        const key =
          min < 60
            ? `${min}분 전`
            : min < 1440
            ? `${Math.floor(min / 60)}시간 전`
            : `${Math.floor(min / 1440)}일 전`
        if (!map[key]) map[key] = []
        map[key].push(it)
      })
      return map
    },
    uniqueTags(state) {
    const seen = new Set()
    const result: ViewedItem[] = []

    for (const item of this.sortedViewedArr) {
      if (!item.tag) continue
      if (!seen.has(item.tag)) {
        seen.add(item.tag)
        result.push(item)
      }
    }

    return result
}

  },

  actions: {
    push(item: Omit<ViewedItem, 'viewedAt'>) {
      this.viewedArr = this.viewedArr.filter(i => i.tag !== item.tag)     
      this.viewedArr.unshift({ ...item, viewedAt: Date.now() })   
      if (this.viewedArr.length > 100) this.viewedArr.pop()
    },
  },
})
