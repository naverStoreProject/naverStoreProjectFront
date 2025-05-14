<template>
    <nav class="w-1/4 border-r overflow-y-auto">
        <ul>
            <li v-for="item in store.categories" :key="item.id"
                :class="['cursor-pointer py-3 px-4', store.selectedCategoryId === item.id ? 'bg-gray-100 font-bold' : 'hover:bg-gray-50']"
                @click="store.selectCategory(item.id)">
                {{ item.name }}
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';

const store = useCategoryStore();
</script>
