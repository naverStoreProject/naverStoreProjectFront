<template>
  <div class="flex flex-col h-screen">
    <!-- <Header :menu="'category'" /> -->
    <Header />

    <div class="flex flex-1 overflow-hidden h-screen">
      <LeftNav />
      <RightNav />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layouts/header/Header.vue'
import LeftNav from './_components/LeftNav.vue'
import RightNav from './_components/RightNav.vue'
</script>
