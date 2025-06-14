<template>
  <!-- 전체 입력 컴포넌트를 감싸는 래퍼, suffix 아이콘을 위한 relative 포지션 설정 -->
  <div class="relative w-full">
    <!-- 라벨이 있을 경우 표시 -->
    <label v-if="label" class="mb-1 block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <!-- 실제 입력 필드 -->
    <input
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      v-bind="$attrs"
      :class="[
        'w-full rounded-md border px-4 py-3 pr-10 text-sm transition outline-none',
        'focus:ring-primary-400 focus:ring-2',
        errorMessage ? 'border-red-500' : 'border-gray-300',
      ]"
    />
    <!-- 입력창 오른쪽 아이콘 등을 넣기 위한 슬롯 -->
    <slot name="suffix" />
    <!-- 에러 메시지 표시 -->
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
