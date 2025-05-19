<template>
  <div class="overflow-x-auto scrollbar-none">
    <div class="home-nav">
      <div
        v-for="nav in homeRouterNavs"
        class="home-nav-item"
        :class="currentRoute === nav.name ? 'current-home-item' : ''"
      >
        <RouterLink :to="{ name: nav.name }">
          <div v-text="nav.title"></div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed(() => {
  return route.name
})

const homeRouterNavs = [
  { title: '홈', name: 'main-home' },
  { title: '오늘끝딜', name: 'deal-home' },
  { title: 'FOR YOU', name: 'for-you-home' },
  { title: '베스트', name: 'best-home' },
  { title: 'N배송', name: 'delivery-home' },
  { title: '패션뷰티', name: 'fashion-home' },
  { title: '오늘행사', name: 'sale-home' },
]
</script>

<style>
.home-nav {
  display: flex;
  gap: 0.5rem;
  padding: 0rem 0.7rem 0rem 0.7rem;
}
.home-nav-item {
  display: flex;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  padding: 0.3rem 0.5rem 0.5rem 0.3rem;
}

.current-home-item::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  height: 4px;
  background-color: blue;
  width: 50%;
  max-width: 20px;
}
</style>
