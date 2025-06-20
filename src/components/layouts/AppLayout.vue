<template>
  <div class="flex min-h-screen flex-col">
    <main class="relative flex-1 pb-20 ...">
      <RouterView />
      <TabBar />
    </main>
  </div>
  <Offcanvas
    v-for="(item, index) in offcanvasStore.stack"
    :key="index"
    :menu="item.routeType"
    :data="item.data"
    :index="index"
    class="z-20"
  >
  </Offcanvas>
</template>

<script setup lang="ts">
import TabBar from '@/components/layouts/TabBar.vue'
import Offcanvas from '../offcanvas/offcanvas.vue'
import { useOffcanvasStore } from '@/stores/offcanvasStore'

const offcanvasStore = useOffcanvasStore()
</script>
