<template>
  <!-- 광고 미정 -->
  <div class="news">
    <template v-for="mb in mbData" :key="mb.id">
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
  <HomeInterest />

  <HomeTodaySale />
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

import LoginWideBanner from '@/components/layouts/LoginBarBanner.vue'
import MainShortcutBar from '@/components/layouts/MainShortcutBar.vue'
import HomeInterest from './HomeInterest.vue'
import HomeTodaySale from './HomeTodaySale.vue'

import mainBannerApi from '@/api/mainBanner.ts'
import MainBanner from './MainBanner.vue'
import type { MainBannerType } from '@/types/mainBanner.ts'

const userStore = useUserStore()
const isLogin = computed(() => !!userStore.user)

const mbData = ref<MainBannerType[]>([])

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
</script>

<style>
.news {
  width: 100%;
  height: 10rem;
  border: 1px solid;
}
</style>
