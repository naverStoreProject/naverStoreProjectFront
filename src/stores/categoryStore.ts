import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCategoryStore = defineStore('category', () => {
  const selectedCategoryId = ref<number>(1)

  const categories = ref([
    { id: 1, name: '남성의류' },
    { id: 2, name: '패션잡화' },
    { id: 3, name: 'PC/주변기기' },
    { id: 4, name: '스포츠/레저' },
    { id: 5, name: '여성의류' },
    { id: 6, name: '뷰티' },
    { id: 7, name: '가전/디지털' },
    { id: 8, name: '식품' },
    { id: 9, name: '생활/주방' },
    { id: 10, name: '도서/음반' },
    { id: 11, name: '자동차용품' },
    { id: 12, name: '출산/유아동' },
    { id: 13, name: '가구/인테리어' },
    { id: 14, name: '문구/사무용품' },
    { id: 15, name: '헬스/건강식품' },
    { id: 16, name: '여행/레저용품' },
    { id: 17, name: '반려동물용품' },
    { id: 18, name: '홈데코' },
    { id: 19, name: '자동차용품' },
    { id: 20, name: '기타' },
  ])

  // 각 카테고리 id마다 20개씩 더미 서브카테고리 생성
  const generateSubCategories = () => {
    const subs: Record<number, { id: number; name: string }[]> = {}
    categories.value.forEach(cat => {
      subs[cat.id] = Array.from({ length: 20 }, (_, idx) => ({
        id: cat.id * 100 + idx + 1,
        name: `${cat.name} 상품 ${idx + 1}`,
      }))
    })
    return subs
  }

  const subCategories = ref(generateSubCategories())
  const currentSubCategories = computed(() => subCategories.value[selectedCategoryId.value] || [])

  const currentCategoryName = computed(() => {
    return categories.value.find(cat => cat.id === selectedCategoryId.value)?.name || ''
  })

  const selectCategory = (id: number) => {
    selectedCategoryId.value = id
  }

  return {
    categories,
    subCategories,
    selectedCategoryId,
    currentSubCategories,
    currentCategoryName,
    selectCategory,
  }
})
