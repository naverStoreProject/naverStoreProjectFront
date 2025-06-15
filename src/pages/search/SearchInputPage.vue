<template>
  <div class="space-y-6 p-4 text-sm">

    <!-- 최근 검색어 -->
    <div>
      <div class="mb-2 flex items-center justify-between">
        <div class="text-xs text-gray-500">최근 검색어</div>
        <button @click="clearRecent" class="text-xs text-gray-500">전체삭제</button>
      </div>

      <!-- 최근 검색어 리스트 -->
      <div class="space-y-1 text-sm">
        <div
          class="flex items-center justify-between space-x-2"
          v-for="(word, i) in recentSearches"
          :key="i"
        >
          <div>
            <span class="text-gray-500">🔍</span>
            <span>{{ word }}</span>
            <span class="text-xs text-gray-400">{{ getToday() }}</span>
          </div>
          <button class="text-xs text-gray-400" @click="removeRecent(i)">×</button>
        </div>
      </div>
    </div>

    <!-- 추천 검색어 -->
    <div>
      <div class="mb-2 text-xs text-gray-500">추천 검색어</div>
      <div class="flex flex-wrap gap-2">
        <BaseBtn
          v-for="(tag, i) in recommendedTags"
          :key="i"
          :label="tag"
          rounded="full"
          size="sm"
          class="bg-surface-50"
        />
      </div>
    </div>

    <!-- 오늘의 혜택 -->
    <div class="space-y-2">
      <div class="text-xs text-gray-500">오늘의 혜택</div>
      <div class="flex gap-2 overflow-x-auto">
        <BaseBtn
          v-for="(boon, i) in todayBoons"
          :key="i"
          :label="boon"
          rounded="full"
          size="sm"
          color="base"
        />
      </div>
    </div>

    <!-- 인기 검색어 -->
    <div>
      <div class="mb-2 flex items-center justify-between text-xs text-gray-500">
        <span>인기 검색어</span>
        <span>05.22. 기준, 전체</span>
      </div>
      <div>
        <BaseBtn label="전체" rounded="full" size="sm" class="bg-primary-500" />
        <div class="mt-2 grid grid-cols-2 gap-y-2">
          <div
            v-for="(item, index) in popularSearches"
            :key="index"
            class="flex items-center space-x-2"
          >
            <span class="w-4 font-semibold text-red-600">{{ index + 1 }}</span>
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseBtn from '@/components/buttons/BaseBtn.vue'
import { ref } from 'vue'
import { useOffcanvasStore } from '@/stores/offcanvasStore'

/* 추후 CRUD로 끌어올 데이터 */
const searchQuery = ref('')
const recentSearches = ref([])
const recommendedTags = [
  '추천 태그 1',
  '추천 태그 2',
  '추천 태그 3',
  '추천 태그 4',
  '추천 태그 5',
]
const todayBoons = ['브랜드데이 미소페 | 할인 ~53%', '신상위크 HUNTER | 할인 ~43%']
const popularSearches = [
  '인기 검색어 1',
  '인기 검색어 2',
  '인기 검색어 3',
  '인기 검색어 4',
  '인기 검색어 5',
  '인기 검색어 6',
  '인기 검색어 7',
  '인기 검색어 8',
  '인기 검색어 9',
  '인기 검색어 10',
]

const offcanvasStore = useOffcanvasStore()

// 입력한 검색어로 결과 페이지 오픈 (offcanvas)
const openSearchResultOffCanvas = () => {

  if (searchQuery.value.trim() === '') {
    alert('검색어를 입력해주세요.')
    return
  }

  offcanvasStore.open('searchResult');
}

const goBack = () => {
  history.back()
}

const removeRecent = (index: number) => {
  recentSearches.value.splice(index, 1)
}

const clearRecent = () => {
  recentSearches.value = []
}

const getToday = () => {
  const now = new Date()
  return `${now.getMonth() + 1}.${now.getDate()}.`
}
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
