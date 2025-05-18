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


  </div>
</template>

<script setup lang="ts">
import ProductList from '@/components/products/ProductList.vue'
import { ref } from 'vue'

const viewTypes = ['long', 'middle', 'small'] as const
type ViewType = (typeof viewTypes)[number]

const viewType = ref<ViewType>('middle')

function toggleViewType() {
  const currentIndex = viewTypes.indexOf(viewType.value)
  const nextIndex = (currentIndex + 1) % viewTypes.length
  viewType.value = viewTypes[nextIndex]
}
</script>

<style scoped>
.container {
  /*
  width: 960px;
  padding-bottom: 70px;
   */
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

</style>
