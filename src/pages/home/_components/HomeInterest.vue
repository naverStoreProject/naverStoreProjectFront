<template>
  <hr><br>
  <h2 class="text-xl">관심있게 봤던 상품</h2>
  <section class="pb-6">
    <InterestCarousel
    :items="forYou.uniqueTags"
    :active-id="selected?.id || null"
    @select="select"
  />

    <!-- 선택된 아이템이 있을 때만 보여줌 -->
    <div v-if="selected && selectedItems.length" class="mb-8">
    <div class="flex justify-between items-center px-4 mb-3">
      <h2 class="text-xl font-gmarket-500">
        {{ selectedLabel }}
        <span class="text-xl font-gmarket-500 text-primary-400">
        {{ firstKeyword(selectedItems) }}
        </span>
        비슷한 상품
      </h2>
        <RouterLink
          :to="{ name: 'for-you-home', query: { label: selectedLabel } }"
          class="text-sm text-surface-600"
        >더보기 &gt;</RouterLink>
      </div>

      <div class="grid grid-cols-3 gap-3 px-4">
        <div
          v-for="it in selectedItems.slice(0, 3)"
          :key="it.id"
          class="flex flex-col gap-1 cursor-pointer hover:scale-105 transition-transform"
        >
          <img :src="it.image" class="w-full aspect-square object-cover" />
          <p class="text-xs truncate">{{ it.brand }}</p>
          <p class="text-xs truncate">{{ it.name }}</p>
      <p class="text-xs line-through text-surface-600" v-if="it.originalPrice">
        {{ it.originalPrice }}원
      </p>
      <p class="text-sm font-gmarket-700 text-negative-700">
        {{ it.discountPrice }}원
      </p>
        </div>
      </div>
    </div>
  </section>
  <hr><br>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useForYouStore, type ViewedItem } from '@/stores/forYouStore'
import InterestCarousel from './InterestCarousel.vue'
import { computed, ref, watchEffect } from 'vue'


const forYou = useForYouStore()
const { viewedArr, grouped } = storeToRefs(forYou)
const selected = ref(forYou.sortedViewedArr[0] || null);

// 페이지 진입 시 가장 최근 viewed 아이템 자동 선택
watchEffect(() => {
  if (!selected.value && viewedArr.value.length > 0) {
    selected.value = viewedArr.value[0]
  }
})

const select = (item: any) => (selected.value = item)

const firstKeyword = (arr: any[]) => arr[0]?.tag || arr[0]?.name.split(' ')[0]

const selectedLabel = computed(() => {
  if (!selected.value) return null

  for (const [label, arr] of Object.entries(grouped.value)) {
    if (arr.some(it => it.id === selected.value?.id)) {
      return label
    }
  }
  return null
})

const selectedItems = computed(() => {
  if (!selectedLabel.value) return []
  return grouped.value[selectedLabel.value] || []
})

</script>
