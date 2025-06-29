<template>
  <div class="relative">
    <vueper-slides
      ref="mainBannerSlide"
      v-if="mainBannerData.length > 0"
      :bullets="false"
      :arrows="false"
      :autoplay="autoPlaying"
      @autoplay-pause="internalAutoPlaying = false"
      @autoplay-resume="internalAutoPlaying = true"
      :duration="3000"
      :pause-on-hover="false"
    >
      <vueper-slide v-for="(data, index) in mainBannerData" :key="index">
        <template #content>
          <MainBannerCard :mainBanner="data"></MainBannerCard>
        </template>
      </vueper-slide>
    </vueper-slides>

    <div v-if="mainBannerData.length > 0" class="absolute right-5 bottom-5 z-10">
      <div class="flex text-center text-white opacity-80">
        <button
          @click="
            ;(mainBannerSlide as any)?.[`${autoPlaying ? 'pause' : 'resume'}Autoplay`]?.()
            autoPlaying = !autoPlaying
          "
          class="bg-surface-500 flex cursor-pointer rounded-tl-[1rem] rounded-bl-[1rem] px-[0.2rem] py-[0.1rem] text-[0.4rem] whitespace-nowrap opacity-90"
        >
          &nbsp;<img
            class="brightness-0 invert"
            :src="autoPlaying ? iconsSvg.pauseIcon : iconsSvg.playIcon"
          />
        </button>
        &nbsp;
        <div
          class="bg-surface-500 flex cursor-pointer items-center rounded-tr-[1rem] rounded-br-[1rem] px-[0.3rem] py-[0.1rem] text-[0.6rem] whitespace-nowrap opacity-90"
        >
          {{ (mainBannerSlide?.slides?.current ?? 0) + 1 }} / {{ mainBannerData.length }}
          &nbsp;
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import mainBannerApi from '@/api/mainBanner.ts'
import MainBannerCard from './MainBannerCard.vue'
import { ref, onMounted } from 'vue'
import type { MainBannerType } from '@/types/mainBanner.ts'
import iconsSvg from '@/assets/image/icons/icons'

//vueperslide
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const mainBannerData = ref<MainBannerType[]>([])

//데이터 가져오기
onMounted(async () => {
  try {
    const response = await mainBannerApi.getAllbanners()
    if (response.success) {
      mainBannerData.value = response.data
    } else {
      console.log(response.message)
    }
  } catch (error) {
    console.log(error)
  }
})

//슬라이드 변수
const mainBannerSlide = ref<typeof VueperSlides>()
const autoPlaying = ref(true)
const internalAutoPlaying = ref(true)
</script>

<style scoped>
/* vuper 라이브러리 스타일 강제 지정 */
:deep(.vueperslides) {
  height: calc(10rem + 5vw);
}
:deep(.vueperslides__inner) {
  height: calc(10rem + 5vw);
}
:deep(.vueperslides__parallax-wrapper) {
  height: calc(10rem + 5vw);
  padding-bottom: 0% !important;
}

:deep(.vueperslides__track) {
  height: calc(10rem + 5vw);
}
</style>
