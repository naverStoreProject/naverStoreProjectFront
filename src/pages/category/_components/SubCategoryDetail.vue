<template>
    <div class="p-8">
        <h2 class="text-xl">
            카테고리 : {{ categoryId }} / 서브카테고리 : {{ subCategoryId }}
        </h2>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryId = route.params.categoryId;
const subCategoryId = route.params.subCategoryId;
</script>