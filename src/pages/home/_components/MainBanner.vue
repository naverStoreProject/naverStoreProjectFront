<template>
  {{ props.MainBanner }}
</template>

<script setup lang="ts">
import type { MainBannerType } from '@/types/mainBanner';

const props = defineProps<{
  MainBanner: MainBannerType
}>()
</script>

<style scoped></style>
