<template>
  <div class="w-3/4 overflow-y-auto bg-[var(--color-white)] px-8 py-6">
    <h2 class="mb-4 font-['GmarketSansBold'] text-xl text-[var(--color-surface-500)]">
      {{ store.currentCategoryName }}
    </h2>
    <ul>
      <li
        v-for="subItem in store.currentSubCategories"
        :key="subItem.id"
        class="flex cursor-pointer items-center justify-between py-2 hover:text-[var(--color-primary-500)]"
        @click="navigateToSub(subItem.id)"
      >
        <div class="flex items-center gap-3">
          <span class="text-[var(--color-surface-500)]">
            {{ subItem.name }}
          </span>
          <span
            v-if="subItem.tag"
            class="rounded-full bg-[var(--color-secondary-200)] px-2 py-1 font-['GmarketSansLight'] text-xs text-[var(--color-white)]"
          >
            {{ subItem.tag }}
          </span>
        </div>
        <span class="text-[var(--color-surface-300)]">&gt;</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useCategoryStore()

function navigateToSub(subCategoryId: number) {
  router.push({
    name: 'category-detail',
    params: {
      categoryId: store.selectedCategoryId,
      subCategoryId: subCategoryId,
    },
  })
}
</script>
