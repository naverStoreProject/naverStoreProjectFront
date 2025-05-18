<template>
  <div :class="['products', viewType]">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :view-type="viewType"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import { products } from './productData.ts'

defineProps<{
  viewType: 'long' | 'middle' | 'small'
}>()
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2rem 0;
}

.products.middle > * {
  width: 45%;
}

.products.small > * {
  width: 30%;
}

.products.long {
  flex-direction: column;
  align-items: center;
  height: 18%;
}

.products.long > * {
  width: 100%;
  max-width: 900px;
}
</style>
