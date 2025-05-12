<template>
  <div class="container">
    <header class="header">
      <h2>운동화</h2>
      <div class="filters">
        <button>행사</button>
        <button>공식인증</button>
        <button>스타일</button>
        <button>가격</button>
        <button @click="toggleViewType">그리드 모양</button>
      </div>
    </header>

    <ProductList :view-type="viewType" />

    <nav class="bottom-nav">
      <button>홈</button>
      <button>발견</button>
      <button>카테고리</button>
      <button>검색</button>
      <button>마이쇼핑</button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import ProductList from '@/components/products/ProductList.vue'
import { ref } from 'vue'

const viewTypes = ['list', 'grid-2', 'grid-3'] as const
type ViewType = typeof viewTypes[number]

const viewType = ref<ViewType>('grid-2')

function toggleViewType() {
  const currentIndex = viewTypes.indexOf(viewType.value)
  const nextIndex = (currentIndex + 1) % viewTypes.length
  viewType.value = viewTypes[nextIndex]
}
</script>

<style scoped>
.container {
  width: 960px;
  padding-bottom: 70px;
  font-family: 'Noto Sans KR', sans-serif;
}

.header {
  padding: 16px;
  background: white;
  border-bottom: 1px solid #eee;
}

.filters {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.filters button {
  border: 1px solid #ccc;
  background: #fafafa;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.bottom-nav button {
  background: none;
  border: none;
  font-size: 12px;
  color: #333;
}
</style>
