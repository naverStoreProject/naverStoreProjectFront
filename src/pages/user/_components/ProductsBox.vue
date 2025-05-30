<template>
  <div class="w-full rounded-2xl bg-white p-3">
    <div class="my-2 flex gap-2">
      <p class="font-gmarket-bold text-lg">{{ title }}</p>
      <p class="text-primary-500 font-gmarket-bold text-lg">{{ cnt }}</p>
    </div>
    <div class="flex gap-2">
      <!-- 상품 부분 -->
      <div class="grid grid-cols-6 gap-2">
        <ProductCard
          v-for="(product, index) in products.slice(0, 6)"
          :key="index"
          :product="product"
          :view-type="viewType"
        />
      </div>
    </div>
    <div
      class="border-t-surface-50 text-surface-300 flex w-full items-center justify-center gap-1 border-t py-3"
      @click="clickAll"
    >
      <!-- 모두 보기 -->
      {{ title }} 모두 보기 <img class="h-4" :src="NavIcon" alt="전체보기 아이콘" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import NavIcon from '@/assets/navFront.svg'
import ProductCard from '@/components/products/ProductCard.vue'
import { products } from '@/components/products/productData.ts'

const { title, viewType, link } = defineProps<{
  title: string
  viewType: 'long' | 'middle' | 'small'
  link: string
}>()

const router = useRouter()

const cnt = products.length

function clickAll() {
  router.push({ name: link })
}
</script>
