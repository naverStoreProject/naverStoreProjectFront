<template>
  <div class="flex min-h-screen flex-col">
    <main class="relative flex-1 pb-20 ...">
      <!-- <Header v-if="route.meta.useHeader !== false" /> -->
      <RouterView />
      <TabBar />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
// import Header from '@/components/layouts/Header.vue'
import TabBar from '@/components/layouts/TabBar.vue'

const route = useRoute()
</script>
