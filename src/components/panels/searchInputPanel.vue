<template>
  <div class="space-y-6 p-4 text-sm">
    <!-- 검색창 상단 -->
    <div class="flex items-center space-x-2">
      <button @click="goBack" class="text-lg">←</button>
      <input
        type="text"
        placeholder="상품명 또는 브랜드 입력"
        class="flex-1 border-b p-2 outline-none"
        v-model="searchQuery"
        @keyup.enter="emitSearch"
      />
      <span class="text-gray-500" @click="emitSearch">🔍</span>
    </div>

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
import { ref, defineEmits } from 'vue'

/* 추후 CRUD로 끌어올 데이터 */
const searchQuery = ref('')
const recentSearches = ref(['운동화', '신발', '셔츠'])
const recommendedTags = [
  '나이키 운동화',
  '휠라 운동화',
  '아식스 운동화',
  '뉴발란스 운동화',
  '나이키신발',
  '나이키',
  '창문형에어컨',
  '호카',
]
const todayBoons = ['브랜드데이 미소페 | 할인 ~53%', '신상위크 HUNTER | 할인 ~43%']
const popularSearches = [
  '호카',
  '뉴발란스운동화',
  '아식스젤카야노',
  '러닝화',
  '나이키러닝화',
  '살로몬메리제인',
  '우포스쪼리',
  '노바블라스트5',
  '러닝화',
  '나이키슬리퍼',
]

// 'search' 이벤트를 부모 컴포넌트로 발생시킬 것임을 명시
// script setup에서는 defineEmits 매크로를 사용하여 이벤트를 정의합니다.
const emit = defineEmits(['search'])

const emitSearch = () => {
  // 검색어가 비어있거나 공백만 있는 경우 경고 메시지 표시
  if (searchQuery.value.trim() === '') {
    alert('검색어를 입력해주세요.')
    return // 함수 실행 중단
  }
  // 'search' 이벤트를 발생시키고, 현재 searchQuery의 값을 함께 전달
  emit('search', searchQuery.value)
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
