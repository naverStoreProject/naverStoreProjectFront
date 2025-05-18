<template>
  <div class="flex items-center gap-3 overflow-x-auto py-4 px-2">
    <button
      v-for="it in items"
      :key="it.id"
      class="flex-shrink-0 w-16 h-16 rounded-full border-2"
      :class="activeId === it.id ? 'border-primary-400' : 'border-surface-300'"
      @click="$emit('select', it)"
    >
      <img :src="it.image" class="w-full h-full object-cover rounded-full" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ViewedItem } from '@/stores/forYouStore'
defineProps<{ items: ViewedItem[]; activeId: string | null }>()
defineEmits<{ select: [ViewedItem] }>()
</script>
