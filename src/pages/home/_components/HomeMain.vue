<template>
  <!-- 광고 미정 -->
  <div class="news">
    <template v-for="data in mbData" :key="mb.id">
      <MainBanner :mbanner="data"></MainBanner>
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
import mbanners from '@/api/mainBanner.ts'

import { ref, onMounted } from 'vue'
import MainBanner from '@/pages/home/_components/MainBanner.vue'

const mbData = ref([])

//데이터 가져오기
onMounted(async () => {
  try {
    const response = await mbanners.getAllbanners()
    if (response.success == true) {
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
