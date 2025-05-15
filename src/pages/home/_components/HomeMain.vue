<template>
  <!-- 광고 미정 -->
  <div class="news"></div>

  <!-- 로그인 여부 -->
  <div class="p-2" v-show="isLogin">
    <LoginWideBanner />
  </div>

  <!-- 카테고리 네비게이션 -->
  <MainShortcutBar />

  <!-- 컨텐츠들 -->
</template>

<script setup>
import LoginWideBanner from '@/components/layouts/LoginBarBanner.vue'
import MainShortcutBar from '@/components/layouts/MainShortcutBar.vue'

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
