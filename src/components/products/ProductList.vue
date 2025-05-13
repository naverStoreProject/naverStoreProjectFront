<template>
  <div :class="['products', viewType]">
    <ProductCard
      v-for="(product, index) in products"
      :key="index"
      :product="product"
      :view-type="viewType"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import { products } from './tmpProductData.ts'

defineProps<{
  viewType: 'list' | 'grid-2' | 'grid-3'
}>()
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 16px 0;
}

.products.grid-2 > * {
  width: 45%;
}

.products.grid-3 > * {
  width: 30%;
}

.products.list {
  flex-direction: column;
  align-items: center;
}

.products.list > * {
  width: 100%;
  max-width: 900px;
}
</style>
