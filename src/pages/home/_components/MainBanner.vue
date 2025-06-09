<template>
  {{ props.mbanner.title }}
</template>

<script setup lang="ts">
const props = defineProps<{
  mbanner: mbanner
}>()
</script>

<style scoped></style>
