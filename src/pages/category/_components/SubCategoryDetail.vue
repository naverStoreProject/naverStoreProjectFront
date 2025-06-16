<template>
    <div class="container">
        <header class="header">
            <input type="text" v-model="searchText" placeholder="상품명 또는 브랜드 입력" class="search-input" />
            <div class="filters">
                <button @click="changeNextViewType">정렬 방식</button>
            </div>
        </header>
        <ProductList :view-type="viewType" />
    </div>
</template>

<script setup lang="ts">
import ProductList from '@/components/products/ProductList.vue'
import { ref } from 'vue'

const viewTypes = ['long', 'middle', 'small'] as const
const searchText = ref('')

type ViewType = (typeof viewTypes)[number]

const viewType = ref<ViewType>('middle')

function changeNextViewType() {
    const currentIndex = viewTypes.indexOf(viewType.value)
    const nextIndex = (currentIndex + 1) % viewTypes.length
    viewType.value = viewTypes[nextIndex]
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
