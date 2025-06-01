<template>
  <div class="text-center mb-6 mt-20">
    <div class="text-xl font-semibold mb-2">
      <p class="text-3xl mb-1 mt-1">브랜드딜 :스페셜</p>
      대세 브랜드의 다시없는 1DAY 초특가
    </div>
  </div>

  <!-- 상품 리스트 출력 -->
  <div :class="['todayDeals', viewType]">
    <BrandDealCard
      v-for="brandDeal in todaydeals"
      :key="brandDeal.id"
      :brandDeal="brandDeal"
      :view-type="viewType"
    />
  </div>
</template>

<script setup lang="ts">
import { todaydeals } from '../../todayDeal'
import BrandDealCard from './BrandDealCard.vue'

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
