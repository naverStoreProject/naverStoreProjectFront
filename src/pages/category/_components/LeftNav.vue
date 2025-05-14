<template>
    <nav class="w-1/4 border-r overflow-y-auto">
        <ul>
            <li v-for="item in categories" :key="item.id"
                :class="['cursor-pointer py-3 px-4', selected === item.id ? 'bg-gray-100 font-bold' : 'hover:bg-gray-50']"
                @click="selectCategory(item.id)">
                {{ item.name }}
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 예시 카테고리 데이터
const categories = ref([
    { id: 1, name: "남성의류" },
    { id: 2, name: "패션잡화" },
    { id: 3, name: "PC/주변기기" },
    { id: 4, name: "스포츠/레저" },
]);

const selected = ref<number>(1);

function selectCategory(id: number) {
    selected.value = id;
    // 실제 라우터를 통한 페이지 이동 로직 추가
}
</script>
