<template>
  <div
    :class="[
      'flex w-fit items-center justify-center gap-2',
      sorting === 'vertical' && 'flex-col',
      sorting === 'horizon' && 'flex-row',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    <BaseIcon :icon="icon" :background="background" :size="size" />
    <div class="text-center" :class="size === 'sm' && 'text-sm',size==='md'&& 'text-base'">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
defineOptions({ inheritAttrs: false })

defineProps<{
  icon: string
  label: string
  background: 'surface' | 'trans'
  size: 'sm' | 'md'
  sorting: 'vertical' | 'horizon'
}>()
</script>
