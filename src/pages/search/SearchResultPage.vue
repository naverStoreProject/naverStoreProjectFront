<template>
  <div class="container">
    <header class="header">

      <div class="filters pt-2">
        <button @click="changeNextViewType">정렬 방식</button>
      </div>
    </header>
    <ProductList :view-type="viewType" />
  </div>
</template>

<script setup lang="ts">
import ProductList from '@/components/products/ProductList.vue'
import { defineProps, ref } from 'vue'
import { useOffcanvasStore } from '@/stores/offcanvasStore'

interface Props {
  searchQuery?: string // searchQuery는 선택적일 수 있음 (초기값 때문)
}

type ViewType = (typeof viewTypes)[number]

const offcanvasStore = useOffcanvasStore()

const props = defineProps<Props>()

const viewTypes = ['long', 'middle', 'small'] as const
const searchText = ref('')
const viewType = ref<ViewType>('middle')

const openSearchInputOffCanvas = () => {
  offcanvasStore.open('searchInput');
}

const changeNextViewType = () => {
  const currentIndex = viewTypes.indexOf(viewType.value)
  const nextIndex = (currentIndex + 1) % viewTypes.length
  viewType.value = viewTypes[nextIndex]
}

const goBack = () => {
  if (offcanvasStore.stack.length > 0) {
    offcanvasStore.close()
  } else {
    history.back()
  }
}
</script>

<style scoped>
.container {
  font-family: 'Noto Sans KR', sans-serif;
}

.header {
  padding: 1rem;
  background: white;
  border-bottom: 0px solid #eee;
}

.search-input {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
}

.filters {
  display: flex;
  gap: 0.8rem;
  margin-top: 0rem;
}

.filters button {
  border: 1px solid #ccc;
  background: #fafafa;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
