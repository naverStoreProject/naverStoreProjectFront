/* ForYouList.vue */
<template>
  <div class="p-4">
    <ForYouCard v-for="tag in uniqueTags" :key="tag" :tag="tag" :items="items" />
  </div>
</template>

<script setup lang="ts">
import ForYouCard from './ForYouCard.vue'
import { todaySales } from '../forYouData'
import type { TodaySale } from '../forYouData'

const items: TodaySale[] = todaySales
const uniqueTags = [...new Set(todaySales.map(item => item.tag).filter(Boolean))] as string[]
</script>

<style scoped></style>
