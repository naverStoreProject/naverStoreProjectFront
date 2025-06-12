<template>
  <div class="text-center mb-6 mt-6">
    <div class="text-xl font-semibold mb-2">
      <p class="text-3xl mb-1 mt-1">오늘끝딜 스페셜</p>
      고민하면 품절! 한정 수량 특가
    </div>
    <div class="text-2xl font-bold tracking-widest text-red-600 mt-10">
      {{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}
    </div>
  </div>

  <!-- 상품 리스트 출력 -->
  <div :class="['todayDeals', viewType]">
    <SpecialDealCard
      v-for="specialDeal in todaydeals"
      :key="specialDeal.id"
      :specialDeal="specialDeal"
      :view-type="viewType"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { todaydeals } from '../../todayDeal'
import SpecialDealCard from './SpecialDealCard.vue'

defineProps<{
  viewType: 'long' | 'middle' | 'small'
}>()

// 오늘 남은 시간 표시를 위한.
const now = new Date()
const END_TIME = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  23,
  59,
  59,
  999
).getTime()

const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')

let timer: ReturnType<typeof setInterval> | null = null

function updateTimer() {
  const now = Date.now()
  const diff = END_TIME - now

  if (diff <= 0) {
    clearInterval(timer!)
    days.value = hours.value = minutes.value = seconds.value = '00'
    return
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const m = Math.floor((diff / (1000 * 60)) % 60)
  const s = Math.floor((diff / 1000) % 60)

  days.value = String(d).padStart(2, '0')
  hours.value = String(h).padStart(2, '0')
  minutes.value = String(m).padStart(2, '0')
  seconds.value = String(s).padStart(2, '0')
}

onMounted(() => {
  updateTimer()
  timer = setInterval(updateTimer, 1000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
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
