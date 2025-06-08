<template>
  <div class="container">
    <SearchInputPage @search="handleSearch" />
  </div>
</template>

<script setup lang="ts">
import SearchInputPage from '@/pages/search/SearchInputPage.vue'
import { ref } from 'vue'

const showResults = ref<boolean>(false)
const currentSearchQuery = ref<string>('')

const handleSearch = (query: string) => {
  console.log('SearchPage: 검색어 수신 -', query)

  if (query && query.trim() !== '') {
    currentSearchQuery.value = query.trim()
    showResults.value = true
  } else {
    alert('검색어를 입력해주세요.')
    showResults.value = false
  }
}

</script>

<style scoped></style>
