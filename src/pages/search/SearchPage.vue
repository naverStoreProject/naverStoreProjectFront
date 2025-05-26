<template>
  <div class="container">
    <searchInputPanel v-if="!showResults" @search="handleSearch"/>
    <searchResultPanel v-if="showResults" :searchQuery="currentSearchQuery" />
  </div>
</template>

<script setup lang="ts">
import searchResultPanel from '@/components/panels/searchResultPanel.vue'
import searchInputPanel from '@/components/panels/searchInputPanel.vue'
import { ref } from 'vue';

const showResults = ref<boolean>(false);
const currentSearchQuery = ref<string>('');

const handleSearch = (query: string) => {
  console.log('SearchPage: 검색어 수신 -', query);

  if (query && query.trim() !== '') {
    currentSearchQuery.value = query.trim();
    showResults.value = true;
  } else {
    alert('검색어를 입력해주세요.');
    showResults.value = false;
  }
};

const resetSearch = () => {
  showResults.value = false;
  currentSearchQuery.value = '';
};

</script>

<style scoped>

</style>
