<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1 pb-20">
      <RouterView />
    </main>
    <TabBar />
  </div>
</template>

<script setup>
import Header from '@/components/layouts/Header.vue'
import TabBar from '@/components/layouts/TabBar.vue'
</script>
