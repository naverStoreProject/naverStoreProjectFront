<template>
    <div class="w-1/4 overflow-y-auto bg-white border-r">
        <div v-for="cat in categories" :key="cat.id" @click="scrollToCategory(cat.id)" :class="[
            'p-4 cursor-pointer transition',
            selectedCategoryId === cat.id
                ? 'bg-[var(--color-primary-400)] font-[\'GmarketSansBold\']'
                : 'hover:bg-[var(--color-surface-300)] text-[var(--color-surface-900)]'
        ]">
            {{ cat.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore'
import { storeToRefs } from 'pinia'

const store = useCategoryStore()
const { categories, selectedCategoryId } = storeToRefs(store)
const { selectCategory } = store

const scrollToCategory = (id: number) => {
    const el = document.getElementById(`section-${id}`)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        selectCategory(id)
    }
}
</script>
