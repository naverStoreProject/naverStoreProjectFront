<template>
  <div
    v-if="mainImg.length > 0"
    class="flex h-full w-full flex-col justify-center bg-cover bg-center"
    :style="{ backgroundImage: `url(${mainImg})` }"
  >
    <div class="flex h-6/7 w-1/2 flex-col justify-center gap-1 p-3 text-white">
      <div class="flex flex-col">
        <div class="text-lg" v-html="processedTitle"></div>
        <div class="text-xs" v-html="processedSemiTitle"></div>
      </div>

      <div v-if="semiImg1.length > 0 || semiImg2.length > 0" class="flex h-1/2 justify-around">
        <div class="w-3/7">
          <img :src="semiImg1" alt="" class="h-full w-full rounded object-contain" />
        </div>

        <div class="w-3/7">
          <img :src="semiImg2" alt="" class="h-full w-full rounded object-contain" />
        </div>
      </div>
    </div>
    <div class="w-1/2"></div>
  </div>
</template>

<script setup lang="ts">
import type { MainBannerType } from '@/types/mainBanner'
import { computed } from 'vue'
import { ref } from 'vue'

const props = defineProps<{
  mainBanner: MainBannerType
}>()

//이미지 url
const baseUrl = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}`
  : 'http://localhost:8080'
const imgPath = `${baseUrl}/images/mainBanner`
const mainImg = ref(
  props.mainBanner.mainImg ? `${imgPath}/mbanner_${props.mainBanner.mainImg}.jpg` : ''
)

const semiImg1 = ref(
  props.mainBanner.semiImg1
    ? `${imgPath}/mbanner_${props.mainBanner.mainImg}_${props.mainBanner.semiImg1}.jpg`
    : ''
)
const semiImg2 = ref(
  props.mainBanner.semiImg2
    ? `${imgPath}/mbanner_${props.mainBanner.mainImg}_${props.mainBanner.semiImg2}.jpg`
    : ''
)
// const semiImg3 = ref(
//   props.mainBanner.semiImg3
//     ? `${imgPath}/mbanner_${props.mainBanner.mainImg}_${props.mainBanner.semiImg1}.jpg`
//     : ''
// )
// const semiImg4 = ref(
//   props.mainBanner.semiImg4
//     ? `${imgPath}/mbanner_${props.mainBanner.mainImg}_${props.mainBanner.semiImg1}.jpg`
//     : ''
// )

// mainBanner.title의 \n을 <br>로 변환하는 계산된 속성
const processedTitle = computed(() => {
  return props.mainBanner.title ? props.mainBanner.title.replace(/\\n/g, '<br>') : ''
})

// mainBanner.semiTitle의 \n을 <br>로 변환하는 계산된 속성
const processedSemiTitle = computed(() => {
  return props.mainBanner.semiTitle ? props.mainBanner.semiTitle.replace(/\\n/g, '<br>') : ''
})

// const mainBannerData = ref([props.mainBanner])
</script>
