<template>
<div class="p-6">
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div
      v-for="item in viewedArr"
      :key="item.id"
      class="bg-white p-3 rounded-xl shadow hover:shadow-lg cursor-pointer"
    >
      <div class="w-full aspect-square overflow-hidden rounded-md mb-2">
        <img
          :src="item.image"
          alt="상품 이미지"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3
        class="text-base font-semibold truncate"
        :title="item.name"
      >
        {{ item.name }}
      </h3>
      <p
        class="text-sm text-gray-500 truncate"
        :title="item.brand"
      >
        {{ item.brand }}
      </p>
      <div class="flex items-center gap-2 mt-1">
        <span class="text-red-500 font-bold text-lg">
          {{ formatPrice(Number(item.discountPrice)) }}원
        </span>
        <span
          v-if="item.originalPrice"
          class="line-through text-gray-400 text-sm"
        >
          {{ formatPrice(Number(item.originalPrice)) }}원
        </span>
      </div>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">
import { useForYouStore } from '@/stores/forYouStore'
import { storeToRefs } from 'pinia'

const { viewedArr } = storeToRefs(useForYouStore())

function formatPrice(price: number): string {
  return price.toLocaleString()
}
</script>
