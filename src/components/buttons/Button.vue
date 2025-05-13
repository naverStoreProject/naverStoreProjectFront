<template>
  <button
    :class="[
      'font-gmarket-700 rounded px-4 py-2 text-red-400',
      variantClass,
      disabled ? 'cursor-not-allowed opacity-50' : '',
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const onClick = () => {
  if (!props.disabled) emit('click')
}

const variantClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-gray-500 text-white'
    case 'danger':
      return 'bg-red-500 text-white'
    case 'primary':
    default:
      return 'bg-blue-500 text-white'
  }
})
</script>
