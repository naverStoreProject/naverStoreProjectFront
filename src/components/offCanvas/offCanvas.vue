<template>
  <div
    class="offcanvas-container offcanvas-slide"
    :class="{ show: offcanvasStore.isVisible(props.index) }"
  >
    <Header :menu="props.menu" :data="props.data" />
    <component :is="currentPage" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/layouts/header/Header.vue'
import type { routeType } from '@/components/layouts/header/header'

import { routeMap } from '@/router/routeMap'

import { useOffcanvasStore } from '@/stores/offcanvasStore'

const route = useRoute()

const offcanvasStore = useOffcanvasStore()

const currentPage = computed(() => {
  const component = routeMap[props.menu]
  return defineAsyncComponent(component)
})

//header 강제
const props = defineProps<{
  menu: routeType
  data?: any
  index: number
}>()
</script>

<style scoped>
.offcanvas-container {
  position: absolute;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
}

.offcanvas-slide {
  right: 0;
  top: 0;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.offcanvas-slide.show {
  transform: translateX(0);
}
</style>
@/router/routerMap@/router/routeMap
