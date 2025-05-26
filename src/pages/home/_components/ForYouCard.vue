<template>
  <div class="mb-8">
    <h2 class="text-xl font-semibold mb-4">
      최근에 찾으신
        <span class="text-xl font-gmarket-500 text-primary-400">{{ tag }}</span>
      더 살펴보세요
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="(item, index) in visibleItems"
        :key="item.id"
        class="border rounded-lg p-2 shadow hover:shadow-md transition"
      >
        <img :src="item.image" alt="product image" class="w-full h-40 object-cover rounded-md" />
        <h3 class="mt-2 text-sm font-medium">{{ item.name }}</h3>
        <p class="text-xs text-gray-600">{{ item.brand }}</p>
        <p class="text-sm font-semibold text-red-500">₩{{ item.currentPrice }}</p>
      </div>
    </div>
    <div class="flex justify-center mt-6">
      <button
        v-if="visibleCount < filteredItems.length"
        @click="loadMore"
        class="px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg shadow hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      >
        더 보기
      </button>
    </div>

    <div class="text-xs text-gray-400">
    보여지는 개수: {{ visibleCount }} / 전체 개수: {{ filteredItems.length }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TodaySale } from '../forYouData'

// Props
const props = defineProps<{
  tag: string
  items: TodaySale[]
}>()

const visibleCount = ref(4)
const loadMore = () => {
  visibleCount.value += 4
}

const filteredItems = computed(() => props.items.filter(item => item.tag === props.tag))
const visibleItems = computed(() => filteredItems.value.slice(0, visibleCount.value))

console.log('props.tag:', props.tag)
console.log('filteredItems:', filteredItems.value.map(item => item.tag))

console.log('visibleCount:', visibleCount.value)
</script>

<style scoped></style>
