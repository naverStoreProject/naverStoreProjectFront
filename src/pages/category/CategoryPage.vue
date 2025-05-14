<template>
  <div class="flex h-screen">
    <!-- 좌측 메뉴 -->
    <LeftNav />

    <!-- 우측 메뉴 -->
    <RightNav />
  </div>
</template>

<script setup lang="ts">
import LeftNav from "./_components/LeftNav.vue";
import RightNav from "./_components/RightNav.vue";
</script>
