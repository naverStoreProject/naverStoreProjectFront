<template>
  <div
    :class="[
      'flex w-fit items-center justify-center',
      sorting === 'vertical' && 'flex-col',
      sorting === 'horizon' && 'flex-row',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    <BaseIcon :icon="icon" :background="background" :size="size" :rounded="rounded"/>
    <div class="text-center" :class="size === 'sm' && 'text-sm',size==='md'&& 'text-base', rounded==='full'">
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
  size: 'sm' | 'md' | 'lg'
  sorting: 'vertical' | 'horizon'
  rounded: 'md' | 'lg' | 'xl' | 'full'
}>()
</script>
