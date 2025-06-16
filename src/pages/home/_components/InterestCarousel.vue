<template>
  <div class="flex items-center gap-3 overflow-x-auto py-4 px-2">
    <button
      v-for="item in items"
      :key="item.id"
      class="flex-shrink-0 w-16 h-16 rounded-full border-2 transition-transform hover:scale-105"
      :class="activeId === item.id ? 'border-primary-400' : 'border-surface-300'"
      @click="$emit('select', item)"
    >
      <img :src="item.image" class="w-full h-full object-cover rounded-full" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { TodaySale } from '../forYouData'

defineProps<{
  items: TodaySale[]
  activeId: string | null
}>()

defineEmits<{
  (e: 'select', item: TodaySale): void
}>()
</script>
