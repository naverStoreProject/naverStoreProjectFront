<template>
  <!-- 광고 미정 -->
  <div class="news">
    <template v-for="mb in mbData" :key="mb.id">
      <MainBanner :title="mb.title"></MainBanner>
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

import { ref, onMounted } from 'vue'
import MainBanner from '@/pages/home/_components/MainBanner.vue'

const mainBanners = ref([])
const mbloading = ref(true)

const mbData = ref([]);


// 배너 데이터 가져오기
const fetchMainBanners = async () => {
  mbloading.value = true;

  try {
    const response = await fetch('/api/mainBanners', {
      method: 'GET',
      headers: {
        // GET 요청 시 서버에 JSON 형식의 응답을 기대함을 명시
        'Accept': 'application/json',
      },
    });
    mainBanners.value = await response.json();

    if(mainBanners.value.success == true) {
      mbData.value = mainBanners.value.data;
    }
    else {

    }

  } catch (err) {
    console.log(err);
  } finally {
    mbloading.value = false;
  }
};

// 컴포넌트 마운트 시 데이터 가져오기
onMounted(() => {
  fetchMainBanners()
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
