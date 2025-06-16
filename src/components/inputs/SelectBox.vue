<template>
  <div class="relative w-48" :class="$attrs.class">
    <button
      @click="toggle"
      :class="[
        'w-fit text-left shadow transition',
        color === 'primary' && 'bg-primary-500 text-white',
        color === 'surface' && 'bg-primary-200',
        color === 'base' && 'border-primary-500 border bg-white',
        size === 'sm' && 'px-3 py-2 text-xs',
        size === 'md' && 'px-4 py-2 text-sm',
        size === 'lg' && 'px-6 py-3 text-base',
        rounded === 'full' && 'rounded-full',
        rounded === 'lg' && 'rounded-lg',
        rounded === 'square' && 'rounded-sm',
      ]"
      role="combobox"
      :aria-expanded="open"
      aria-haspopup="listbox"
      :aria-activedescendant="selected"
    >
      {{ selected || '옵션 선택' }}
    </button>
    <ul
      v-if="open"
      class="border-primary-500 absolute z-10 mt-1 w-full rounded-lg border bg-white shadow transition"
      role="listbox"
    >
      <!-- 옵션 항목 -->
      <li
        v-for="option in options"
        :key="option"
        @click="select(option)"
        role="option"
        :aria-selected="option === selected"
        class="hover:bg-surface-50 cursor-pointer px-3 py-2"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  options: string[]
  modelValue: string
  color?: 'primary' | 'surface' | 'base'
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'full' | 'lg' | 'square'
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const open = ref(false)

// modelValue를 기반으로 선택된 값 연결
const selected = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})

// 드롭다운 토글
const toggle = () => {
  open.value = !open.value
}

// 옵션 선택 시 값 업데이트
const select = (option: string) => {
  selected.value = option
  open.value = false
}
</script>
