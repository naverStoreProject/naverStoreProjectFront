<template>
    <div class="w-3/4 overflow-y-auto px-8 py-6">
        <h2 class="text-xl font-semibold mb-4">{{ currentCategoryName }}</h2>
        <ul>
            <li v-for="subItem in currentSubCategories" :key="subItem.id"
                class="py-2 flex items-center justify-between hover:text-purple-500 cursor-pointer">
                <div class="flex items-center gap-3">
                    <span v-if="subItem.icon"
                        class="inline-block w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">
                        {{ subItem.icon }}
                    </span>
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
import { ref, computed } from 'vue';

// 예시 하위 카테고리 데이터
const subCategories = ref({
    1: [
        { id: 101, name: "팬츠", tag: "관심있는" },
        { id: 102, name: "상의" },
        { id: 103, name: "아우터" },
    ],
    2: [
        { id: 201, name: "가방" },
        { id: 202, name: "지갑" },
    ],
});

const currentCategory = ref<number>(1);

const currentCategoryName = computed(() => {
    const categoryNames = {
        1: "남성의류",
        2: "패션잡화",
    };
    return categoryNames[currentCategory.value] || "카테고리";
});

const currentSubCategories = computed(() => subCategories.value[currentCategory.value] || []);

// 이곳에 카테고리 선택 로직(이벤트 버스 또는 Pinia 상태)을 추가하면 더 완벽하게 구성 가능
</script>
