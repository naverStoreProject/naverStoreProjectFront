<template>
  <!-- 광고 미정 -->
  <div class="news">
    <MainBanner />
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
import MainBanner from '@/pages/home/_components/MainBanner/MainBanner.vue'
import LoginWideBanner from '@/components/layouts/LoginBarBanner.vue'
import MainShortcutBar from '@/components/layouts/MainShortcutBar.vue'
import HomeInterest from './HomeInterest.vue'
import HomeTodaySale from './HomeTodaySale.vue'

//임시 로그인
const isLogin = true
</script>

<style>
.news {
  width: 100%;
  height: calc(10rem + 5vw);
}
</style>
