<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-1 pb-20 relative ...">
      <RouterView />
      <TabBar />
    </main>
  </div>
  <Offcanvas v-for="(item, index) in offcanvasStore.stack" :key="index" :menu="item" :index="index">
  </Offcanvas>
</template>

<script setup lang="ts">
import TabBar from '@/components/layouts/TabBar.vue'
import Offcanvas from '../offcanvas/Offcanvas.vue'
import { useOffcanvasStore } from '@/stores/offcanvasStore'

const offcanvasStore = useOffcanvasStore()
</script>
