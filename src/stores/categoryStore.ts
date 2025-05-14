import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCategoryStore = defineStore('category', () => {
  // 현재 선택된 카테고리의 id를 관리
  const selectedCategoryId = ref<number>(1)

  // 카테고리 목록 데이터 (샘플)
  const categories = ref([
    { id: 1, name: '남성의류' },
    { id: 2, name: '패션잡화' },
    { id: 3, name: 'PC/주변기기' },
    { id: 4, name: '스포츠/레저' },
  ])

  // 하위 항목
  const subCategories = ref({
    1: [
      { id: 101, name: '팬츠', tag: '관심있는' },
      { id: 102, name: '상의' },
      { id: 103, name: '아우터' },
    ],
    2: [
      { id: 201, name: '가방' },
      { id: 202, name: '지갑' },
    ],
    3: [
      { id: 301, name: '노트북' },
      { id: 302, name: '키보드' },
    ],
  })

  // 선택된 카테고리의 하위 카테고리를 computed로 자동 갱신
  const currentSubCategories = computed(() => subCategories.value[selectedCategoryId.value] || [])

  // 선택된 카테고리의 이름 가져오기
  const currentCategoryName = computed(() => {
    return categories.value.find(cat => cat.id === selectedCategoryId.value)?.name || ''
  })

  // 카테고리 선택 시 실행될 메소드
  const selectCategory = (id: number) => {
    selectedCategoryId.value = id
  }

  return {
    categories,
    selectedCategoryId,
    currentSubCategories,
    currentCategoryName,
    selectCategory,
  }
})
