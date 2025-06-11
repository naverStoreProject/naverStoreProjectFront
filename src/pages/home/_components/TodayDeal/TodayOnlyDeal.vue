<template>
  <div class="text-center mb-6 mt-20">
    <div class="text-xl font-semibold mb-2">
      <p class="text-3xl mb-1 mt-1">오늘끝딜</p>
      24시간 한정 이 가격! 역대급 득템
    </div>
  </div>

  <!-- 상품 리스트 출력 -->
  <div :class="['todayDeals', viewType]">
    <TodayOnlyDealCard
      v-for="todayOnlyDeal in todaydeals"
      :key="todayOnlyDeal.id"
      :todayOnlyDeal="todayOnlyDeal"
      :view-type="viewType"
    />
  </div>
</template>

<script setup lang="ts">
import { todaydeals } from '../../todayDeal'
import TodayOnlyDealCard from './TodayOnlyDealCard.vue'

defineProps<{
  viewType: 'long' | 'middle' | 'small'
}>()
</script>

<style scoped>
.todayDeals {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem 0.5rem;
}

.todayDeals.middle > * {
  width: 88%;
}

.todayDeals.small > * {
  width: 45%;
}

.todayDeals.long {
  flex-direction: column;
  align-items: center;
  height: 20%;
}

.todayDeals.long > * {
  width: 100%;
  max-width: 900px;
}
</style>
