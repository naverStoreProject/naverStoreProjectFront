<template>
  <button
    :class="[
      'border-surface-300 flex w-14 items-center justify-center rounded-lg border py-3',
      $attrs.class,
    ]"
    v-bind="$attrs"
    @click="onClick"
  >
    <img :src="nav" alt="icon" class="h-4" />
  </button>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })
defineProps<{
  nav: string
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const onClick = () => emit('click')
</script>
