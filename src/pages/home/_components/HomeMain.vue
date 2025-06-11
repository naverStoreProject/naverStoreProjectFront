<template>
  <!-- 광고 미정 -->
  <div class="news">
    <template v-for="mb in mbData" :key=mb.id>
      <MainBanner :MainBanner="mb"></MainBanner>
    </template>
  </div>

  <!-- 로그인 여부 -->
  <div class="p-2" v-show="isLogin">
    <LoginWideBanner />
  </div>

  <!-- 카테고리 네비게이션 -->
  <MainShortcutBar />

  <!-- 컨텐츠들 -->
</template>

<script setup lang="ts">
import LoginWideBanner from '@/components/layouts/LoginBarBanner.vue'
import MainShortcutBar from '@/components/layouts/MainShortcutBar.vue'
import mainBannerApi from '@/api/mainBanner.ts'
import MainBanner from './MainBanner.vue'

import { ref, onMounted } from 'vue'
import type { MainBannerType } from '@/types/mainBanner.ts'

const mbData = ref<MainBannerType[]>([])

//데이터 가져오기
onMounted(async () => {
  try {
    const response = await mainBannerApi.getAllbanners()
    if (response.success) {
      mbData.value = response.data
    } else {
      console.log(response.message)
    }
  } catch (error) {
    console.log(error)
  }
})

//임시 로그인
const isLogin = true
</script>

<style>
.news {
  width: 100%;
  height: 10rem;
  border: 1px solid;
}
</style>
