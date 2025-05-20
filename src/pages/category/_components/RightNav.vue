<template>
    <div ref="container" class="w-3/4 overflow-y-scroll h-full p-4 space-y-10" @scroll="handleScroll">
        <div v-for="cat in categories" :key="cat.id" :id="`section-${cat.id}`" :ref="el => sectionRefs.set(cat.id, el)"
            class="mb-6">
            <h2 class="text-xl font-bold text-[--color-primary-400] mb-2">{{ cat.name }}</h2>

            <ul v-if="subCategories[cat.id]?.length" class="grid grid-cols-1 gap-1">
                <li v-for="sub in subCategories[cat.id]" :key="sub.id" class="p-2 rounded bg-[--color-surface-300]">
                    {{ sub.name }}
                </li>
            </ul>

            <p v-else class="text-gray-400 text-sm">등록된 서브카테고리가 없습니다.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { storeToRefs } from 'pinia'

const store = useCategoryStore()
const { categories, subCategories, selectedCategoryId } = storeToRefs(store)
const { selectCategory } = store

const container = ref<HTMLElement | null>(null)
const sectionRefs = new Map<number, HTMLElement>()

const handleScroll = () => {
    if (!container.value) return

    const containerTop = container.value.getBoundingClientRect().top

    let closestId = categories.value[0].id
    let minDistance = Infinity

    for (const [id, el] of sectionRefs.entries()) {
        const distance = Math.abs(el.getBoundingClientRect().top - containerTop)
        if (distance < minDistance) {
            minDistance = distance
            closestId = id
        }
    }

    if (selectedCategoryId.value !== closestId) {
        selectCategory(closestId)
    }
}

onMounted(() => {
    handleScroll()
})
</script>