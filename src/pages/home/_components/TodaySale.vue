<template>
  <br>
  <div class="filters">
    <button @click="changeNextViewType">정렬 방식</button>
  </div>
  <TodaySaleList :view-type="viewType"/>
</template>

<script setup lang="ts">
import TodaySaleList from './TodaySaleList.vue';
import { ref } from 'vue'

const viewTypes = ['long', 'middle', 'small'] as const

type ViewType = (typeof viewTypes)[number]

const viewType = ref<ViewType>('middle')

function changeNextViewType() {
  const currentIndex = viewTypes.indexOf(viewType.value)
  const nextIndex = (currentIndex + 1) % viewTypes.length
  viewType.value = viewTypes[nextIndex]
}
</script>

<style scoped>
.filters {
  display: flex;
  gap: 0.8rem;
  margin-top: 0rem;
}

.filters button {
  border: 1px solid #ccc;
  background: #fafafa;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
