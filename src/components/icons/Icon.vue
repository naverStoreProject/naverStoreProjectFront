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
    <BaseIcon :icon="icon" :background="background" :size="size" />
    <div class="flex flex-col items-start">
      <div
        :class="[
          'text-center',
          size === 'sm' && (explain ? 'text-xs' : 'text-sm'),
          size === 'md' && (explain ? 'text-sm' : 'text-base'),
        ]"
      >
        {{ label }}
      </div>
      <div v-if="explain" class="text-primary-500 font-gmarket-bold text-base">
        {{ explain }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
defineOptions({ inheritAttrs: false })

defineProps<{
  icon: string
  label: string
  explain?: string
  background: 'surface' | 'trans'
  size: 'sm' | 'md' | 'lg'
  sorting: 'vertical' | 'horizon'
  rounded: 'md' | 'lg' | 'xl' | 'full'
}>()
</script>
