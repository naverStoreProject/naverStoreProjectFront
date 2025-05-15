<template>
    <nav class="w-1/4 border-r border-[var(--color-surface-300)] bg-[var(--color-surface-50)] overflow-y-auto">
        <ul>
            <li v-for="item in store.categories" :key="item.id" :class="[
                'cursor-pointer py-3 px-4',
                store.selectedCategoryId === item.id ?
                    'bg-[var(--color-primary-400)] text-[var(--color-white)] font-[\'GmarketSansBold\']'
                    : 'hover:bg-[var(--color-surface-300)] text-[var(--color-surface-950)]'
            ]" @click="store.selectCategory(item.id)">
                {{ item.name }}
            </li>
        </ul>
    </nav>
</template>


<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';

const store = useCategoryStore();
</script>
