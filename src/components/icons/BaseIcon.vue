<template>
  <div
    :class="[
      'flex aspect-square items-center justify-center overflow-hidden rounded-full',
      size === 'md' && '!h-10 !w-10',
      size === 'sm' && '!h-6 !w-6',
      background === 'surface' && 'bg-surface-50',
      background === 'trans' && 'bg-transparent',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    <!-- 아이콘 파일 삽입 -->
    <img :src="icon" alt="icon" class="h-full w-full object-contain" />
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

defineProps<{
  icon: string
  background?: 'surface' | 'trans'
  size?: 'sm' | 'md'
}>()
</script>
