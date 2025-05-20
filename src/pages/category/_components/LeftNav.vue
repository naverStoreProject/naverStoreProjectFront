<template>
    <div ref="navContainer" class="w-1/8 overflow-y-auto bg-white">
        <div v-for="cat in categories" :key="cat.id" :data-id="cat.id" ref="itemRefs" @click="scrollToCategory(cat.id)"
            :class="[
                'p-4 cursor-pointer transition text-xs',
                selectedCategoryId === cat.id
                    ? 'bg-[var(--color-surface-300)] font-[\'GmarketSansBold\']'
                    : 'hover:bg-[var(--color-surface-300)] text-[var(--color-surface-900)]'
            ]">
            {{ cat.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { storeToRefs } from 'pinia'

const store = useCategoryStore()
const { categories, selectedCategoryId } = storeToRefs(store)
const { selectCategory } = store

const itemRefs = ref<HTMLElement[]>([])
const navContainer = ref<HTMLElement | null>(null)

const scrollToCategory = (id: number) => {
    const el = document.getElementById(`section-${id}`)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        selectCategory(id)
    }
}
// DOM이 업데이트된 후 스크롤IntoView 메서드가 호출 -> 변경 감지 후 카테고리 스크롤
// 변경 시 선택한 카테고리로 스크롤
watch(selectedCategoryId, (newId) => {
    const container = navContainer.value
    const el = itemRefs.value.find(el => Number(el.dataset.id) === newId)

    if (el && container) {
        const elTop = el.offsetTop
        const elHeight = el.offsetHeight
        const containerHeight = container.clientHeight

        const scrollPosition = elTop - containerHeight / 2 + elHeight / 2

        container.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        })
    }
})

onMounted(() => {
    itemRefs.value = Array.from(document.querySelectorAll('[data-id]')) as HTMLElement[]
})
</script>
