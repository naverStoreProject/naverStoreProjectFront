<template>
  <button
    :class="[
      'w-auto self-start transition',
      color === 'primary' && 'bg-primary-500 text-white',
      color === 'surface' && 'bg-primary-200',
      color === 'base' && 'border-primary-500 border bg-white',
      size === 'sm' && 'px-3 py-2 text-xs',
      size === 'md' && 'px-4 py-2',
      size === 'lg' && 'px-16 py-3 text-base',
      size === 'xl' && 'py-3 text-base',
      size === 'square' && 'aspect-square h-full p-0',
      rounded === 'full' && 'rounded-full',
      rounded === 'lg' && 'rounded-lg',
      rounded === 'square' && 'rounded-sm',
      $attrs.class,
    ]"
    v-bind="$attrs"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })
defineProps<{
  label: string
  color?: 'primary' | 'surface' | 'base'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'square'
  rounded?: 'full' | 'lg' | 'square'
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const onClick = () => emit('click')
</script>
