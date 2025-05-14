<template>
    <div class="w-3/4 overflow-y-auto px-8 py-6">
        <h2 class="text-xl font-semibold mb-4">{{ store.currentCategoryName }}</h2>
        <ul>
            <li v-for="subItem in store.currentSubCategories" :key="subItem.id"
                class="py-2 flex items-center justify-between hover:text-purple-500 cursor-pointer">
                <div class="flex items-center gap-3">
                    <span>{{ subItem.name }}</span>
                    <span v-if="subItem.tag" class="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                        {{ subItem.tag }}
                    </span>
                </div>
                <span class="text-gray-300">&gt;</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';

const store = useCategoryStore();
</script>
