<template>
  <div class="h-screen overflow-hidden flex flex-col">
    <Header />

    <!-- 내부는 스크롤 허용 -->
    <div class="flex flex-1 overflow-hidden pb-16">
      <LeftNav class="overflow-y-auto" />
      <RightNav class="overflow-y-auto flex-1" />
    </div>
  </div>
</template>



<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

import Header from '@/components/layouts/header/Header.vue'
import LeftNav from './_components/LeftNav.vue'
import RightNav from './_components/RightNav.vue'

// 페이지 마운트 시 body 스크롤 막기
onMounted(() => {
  document.body.style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>
