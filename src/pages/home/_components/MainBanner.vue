<template>
  {{ props.title }}
</template>

<script setup lang="ts">

  const props = defineProps<{
    title: title
  }>()

</script>

<style scoped>

</style>
