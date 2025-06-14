<template>
  <div
    ref="container"
    class="h-full flex-1 space-y-10 overflow-y-auto bg-[var(--color-surface-100)] p-4"
    @scroll="handleScroll"
  >
    <div
      v-for="cat in categories"
      :key="cat.id"
      :id="`section-${cat.id}`"
      :ref="el => sectionRefs.set(cat.id, el)"
      class="mb-6"
    >
      <br />
      <h2 class="mb-2 text-xl font-[var(--font-gmarket-light)] text-[var(--color-primary-500)]">
        {{ cat.name }}
      </h2>

      <ul v-if="subCategories[cat.id]?.length" class="grid grid-cols-1 gap-1">
        <li
          v-for="sub in subCategories[cat.id]"
          :key="sub.id"
          @click="navigateToSub(sub.id)"
          class="rounded bg-[--color-surface-100] p-2 text-xs transition-colors hover:cursor-pointer hover:bg-[--color-surface-300]"
        >
          {{ sub.name }}
        </li>
      </ul>
      <p v-else class="text-surface-400 text-sm">등록된 서브카테고리가 없습니다.</p>

      <hr class="bg-surface-100 my-2 border-t" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { storeToRefs } from 'pinia'

import { useRouter } from 'vue-router'
const router = useRouter()

function navigateToSub(subCategoryId: number) {
  router.push({
    name: 'category-detail',
    params: {
      categoryId: store.selectedCategoryId,
      subCategoryId: subCategoryId,
    },
  })
}
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
