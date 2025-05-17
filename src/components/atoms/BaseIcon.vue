<template>
  <div
    :class="[
      'flex items-center justify-center rounded-full',
      background === 'surface' && 'bg-surface-50',
      background === 'trans' && 'bg-auto',
      size === 'md' && 'h-12 w-12',
      size === 'sm' && 'h-8 w-8',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    {{ icon }}
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
