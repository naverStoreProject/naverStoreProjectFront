<template>
  <div
    :class="[
      'flex aspect-square items-center justify-center overflow-hidden',
      size === 'lg' && '!h-15 !w-15',
      size === 'md' && '!h-10 !w-10',
      size === 'sm' && '!h-6 !w-6',
      rounded === 'md' && 'rounded-md',
      rounded === 'lg' && 'rounded-lg',
      rounded === 'xl' && 'rounded-xl',
      rounded === 'full' && 'rounded-full',
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

const props = defineProps<{
  icon: string
  background?: 'surface' | 'trans'
  size?: 'sm' | 'md' | 'lg'
  rounded?:'md' | 'lg' | 'xl' | 'full'
}>()
</script>
