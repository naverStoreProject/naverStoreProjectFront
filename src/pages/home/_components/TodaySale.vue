<template>
  <div class="p-6">
    <!-- 남은 시간 타이머 -->
    <div class="text-center mb-6">
      <div class="text-xl font-semibold mb-2">행사 종료까지 남은시간</div>
      <div class="text-3xl font-bold tracking-widest text-red-600">
        {{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}
      </div>
      <!-- <div class="text-sm text-gray-500 mt-1">
        일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;시&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;분&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;초
      </div> -->
    </div>

    <!-- 상품 리스트 출력 -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div
    v-for="item in items"
    :key="item.id"
    class="bg-white p-3 rounded-xl shadow hover:shadow-lg"
  >
    <div class="w-full aspect-square overflow-hidden rounded-md mb-2">
      <img
        :src="item.image"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>
    <h3 class="text-base font-semibold truncate">{{ item.title }}</h3>
    <p class="text-sm text-gray-500">{{ item.brand }}</p>
    <div class="flex items-center gap-2 mt-1">
      <span class="text-red-500 font-bold text-lg">{{ formatPrice(item.discountPrice) }}원</span>
      <span class="line-through text-gray-400 text-sm">{{ formatPrice(item.originalPrice) }}원</span>
    </div>
  </div>
</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useTodaySaleStore } from '@/stores/todaySaleStore'

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

// 상품 목록 가져오기
const { items } = useTodaySaleStore()

function formatPrice(price: number): string {
  return price.toLocaleString()
}

</script>
