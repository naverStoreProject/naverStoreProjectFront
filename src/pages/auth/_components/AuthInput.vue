<template>
  <div class="w-full">
    <label v-if="label" class="mb-1 block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <input
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      v-bind="$attrs"
      :class="[
        'w-full rounded-md border px-4 py-3 text-sm transition outline-none',
        'focus:ring-primary-400 focus:ring-2',
        errorMessage ? 'border-red-500' : 'border-gray-300',
      ]"
    />
    <p v-if="errorMessage" class="mt-1 text-xs text-red-500">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
  type?: string
  placeholder?: string
  errorMessage?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputValue = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})
</script>
