<template>
  <button
    :class="[
      // 기본
      'transition',
      //   변수에 따른 버튼 모양 변경
      //   색상
      color === 'primary' && 'bg-primary-400 text-white',
      color === 'surface' && 'bg-primary-100',
      color === 'base' && 'border-primary-400 border bg-white',
      //   버튼 크기
      size === 'sm' && 'w-auto px-3 py-2 text-xs',
      size === 'md' && 'w-auto px-4 py-2',
      size === 'lg' && 'font-gmarket-bold w-auto px-16 py-3 text-base',
      size === 'xl' && 'font-gmarket-bold w-auto py-3 text-base',
      size === 'square' && 'aspect-square h-full p-0',
      //   border-radius
      rounded === 'full' && 'rounded-full',
      rounded === 'lg' && 'rounded-lg',
      rounded === 'square' && 'rounded-sm',
      //   외부 class 병합
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
