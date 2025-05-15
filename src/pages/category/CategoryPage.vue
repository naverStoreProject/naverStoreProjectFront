<template>
  <div class="flex flex-col h-screen">

    <!-- 헤더 -->
    <Header />

    <!-- 네비게이션 및 콘텐츠 -->
    <div class="flex flex-1 overflow-hidden">

      <!-- 좌측 네비게이션 -->
      <LeftNav />

      <!-- 우측 네비게이션 -->
      <RightNav />

    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/layouts/header/Header.vue";
import LeftNav from "./_components/LeftNav.vue";
import RightNav from "./_components/RightNav.vue";
</script>
