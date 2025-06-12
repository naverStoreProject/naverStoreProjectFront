<template>
  <div class="p-3">
    <!-- 남은 시간 타이머 -->
    <div class="text-center mb-6">
      <div class="text-xl font-semibold mb-2">행사 종료까지 남은시간</div>
      <div class="text-3xl font-bold tracking-widest text-red-600">
        {{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}
      </div>
    </div>

    <!-- 상품 리스트 출력 -->
    <div :class="['todaySales', viewType]">
      <TodaySaleCard
        v-for="todaySale in todaySales"
        :key="todaySale.id"
        :todaySale="todaySale"
        :view-type="viewType"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodaySaleCard from './TodaySaleCard.vue';
import { todaySales } from '../todaySaleData.ts'
import { onMounted, onUnmounted, ref } from 'vue'

defineProps<{
  viewType: 'long' | 'middle' | 'small'
}>()

const now = new Date()
const END_TIME = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999).getTime()

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
.todaySales {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem 0.5rem;
}

.todaySales.middle > * {
  width: 45%;
}

.todaySales.small > * {
  width: 30%;
}

.todaySales.long {
  flex-direction: column;
  align-items: center;
  height: 20%;
}

.todaySales.long > * {
  width: 100%;
  max-width: 900px;
}
</style>
