<template>
  <div class="flex flex-col gap-4">
    <!-- 개인 정보 -->
    <IconsBox />
    <ProductsBox title="찜한 상품" view-type="middle" link="notice" />
    <ProductsBox title="최근 본 상품" view-type="middle" link="notice" />
    <!-- 관심스토어 -->
    <!-- 추천 상품 -->
  </div>
</template>

<script setup lang="ts">
import IconsBox from './_components/IconsBox.vue'
import ProductsBox from './_components/ProductsBox.vue'
</script>
