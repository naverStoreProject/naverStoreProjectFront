<template>
  <nav
    class="w-1/4 overflow-y-auto border-r border-[var(--color-surface-300)] bg-[var(--color-surface-50)]"
  >
    <ul>
      <li
        v-for="item in store.categories"
        :key="item.id"
        :class="[
          'cursor-pointer px-4 py-3',
          store.selectedCategoryId === item.id
            ? 'bg-[var(--color-primary-500)] font-[\'GmarketSansBold\'] text-[var(--color-white)]'
            : 'text-[var(--color-surface-500)] hover:bg-[var(--color-surface-300)]',
        ]"
        @click="store.selectCategory(item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore'

const store = useCategoryStore()
</script>
