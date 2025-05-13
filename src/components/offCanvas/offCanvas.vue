<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-1 pb-20 relative ...">
      <Header :menu="'superCredit'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../layouts/header/Header.vue'
import type { routeType } from '@/components/layouts/header/header'
const props = defineProps<{
  menu: routeType
}>()
</script>
