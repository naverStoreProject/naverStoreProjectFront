<template>
  <div
    class="offcanvas-container offcanvas-slide"
    :class="{ show: offcanvasStore.isVisible(props.index) }"
  >
    <Header :menu="props.menu" />
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
import { useSearchPageOffcanvasCountStore } from '@/stores/searchPageOffcanvasCountStore';

const route = useRoute()

const offcanvasStore = useOffcanvasStore()
const searchPageOffcanvasCountStore = useSearchPageOffcanvasCountStore()


const isSearchRelatedOffcanvas = computed(() => {
  const name = props.menu.name
  return (name === 'searchInput' || name === 'searchResult')
});

// 오프캔버스가 DOM에 추가될 때 (열림)
onMounted(() => {
  if (route.path === '/search' && isSearchRelatedOffcanvas.value) {
    searchPageOffcanvasCountStore.increment()
    console.log('search offcanvas count 증가')
  }
});

// 오프캔버스가 DOM에서 제거되기 직전 (닫힘)
onUnmounted(() => {
  if (route.path === '/search' && isSearchRelatedOffcanvas.value) {
    searchPageOffcanvasCountStore.decrement()
    console.log('search offcanvas count 감소')
  }
});


const currentPage = computed(() => {
  const component = routeMap[props.menu]
  return defineAsyncComponent(component)
})

//header 강제
const props = defineProps<{
  menu: routeType
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

