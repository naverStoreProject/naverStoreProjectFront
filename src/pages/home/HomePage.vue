<template>
  <div>
    <!-- 검색창 (임시)-->
    <div class="temp-search">
      <input
        type="text"
        placeholder="검색"
        class="border border-gray-300 rounded px-3 py-2 w-full"
      />
    </div>

    <!-- 라우터 -->
    <HomeNav />

    <RouterView> </RouterView>
  </div>
</template>

<script setup lang="ts">
import HomeNav from '@/pages/home/_components/HomeNav.vue'
</script>

<style>
.temp-search {
  padding: 1rem;
}
</style>
