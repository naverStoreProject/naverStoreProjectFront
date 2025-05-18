<template>
  <div class="p-6 bg-white rounded-xl shadow-md">
    <div class="flex items-center justify-between mb-4">
    <h2 class="text-xl font-gmarket-500">
      <span class="text-xl font-gmarket-500 text-primary-400">오늘의 행사</span> 놓치지 마세요!
    </h2>
      <RouterLink to="/sale" class="text-blue-500 hover:underline text-sm font-medium">
        전체보기 &gt;
      </RouterLink>
    </div>

    <!-- 상품 미리보기 -->
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="item in previewItems"
        :key="item.id"
        class="flex flex-col gap-1 cursor-pointer hover:scale-105 transition-transform"
      >
        <div class="w-full aspect-square overflow-hidden rounded-md mb-2">
          <img
            :src="item.image"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="text-sm font-medium text-center truncate">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useTodaySaleStore } from '@/stores/todaySaleStore'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

// ✅ 스토어 접근
const todaySale = useTodaySaleStore()

// ✅ 앞에서 6개만 추출
const previewItems = computed(() => todaySale.items.slice(0, 6))
</script>
