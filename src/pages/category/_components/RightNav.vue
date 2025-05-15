<template>
    <div class="w-3/4 overflow-y-auto px-8 py-6 bg-[var(--color-white)]">
        <h2 class="text-xl font-['GmarketSansBold'] mb-4 text-[var(--color-surface-950)]">
            {{ store.currentCategoryName }}
        </h2>
        <ul>
            <li v-for="subItem in store.currentSubCategories" :key="subItem.id"
                class="py-2 flex items-center justify-between cursor-pointer hover:text-[var(--color-primary-400)]"
                @click="navigateToSub(subItem.id)">
                <div class="flex items-center gap-3">
                    <span class="text-[var(--color-surface-950)]">
                        {{ subItem.name }}
                    </span>
                    <span v-if="subItem.tag"
                        class="bg-[var(--color-secondary-300)] text-[var(--color-white)] text-xs px-2 py-1 rounded-full font-['GmarketSansLight']">
                        {{ subItem.tag }}
                    </span>
                </div>
                <span class="text-[var(--color-surface-300)]">&gt;</span>
            </li>
        </ul>
    </div>
</template>



<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useCategoryStore();

function navigateToSub(subCategoryId: number) {
    router.push({
        name: 'category-detail',
        params: {
            categoryId: store.selectedCategoryId,
            subCategoryId: subCategoryId
        },
    });
}

</script>
