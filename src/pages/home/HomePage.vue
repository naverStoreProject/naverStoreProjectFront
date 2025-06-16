<template>
  <div>
    <Header :menu="'home'" />
    <div>
      <!-- 검색창 (임시)-->
      <div class="temp-search">
        <input
          type="text"
          placeholder="검색"
          class="border-surface-400 w-full rounded border px-3 py-2"
        />
      </div>

      <!-- 홈 상단 네비게이션 -->
      <HomeNav />

      <RouterView> </RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layouts/header/Header.vue'
import HomeNav from '@/pages/home/_components/HomeNav.vue'
import { useRoute } from 'vue-router'

useRoute()
</script>

<style>
.temp-search {
  padding: 1rem;
}
</style>
