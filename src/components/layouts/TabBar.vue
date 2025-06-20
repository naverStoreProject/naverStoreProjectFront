<template>
  <div class="border-t-surface-50 fixed bottom-0 left-0 z-50 w-full border-t bg-white py-2">
    <div class="mx-auto flex h-9 w-4/5 items-center justify-around">
      <template v-for="bnlist in bottomNavList">
        <RouterLink :to="{ name: bnlist.router }">
          <div class="flex flex-col items-center justify-center gap-0.5">
            <img
              class="h-6 w-7"
              :src="route.name === bnlist.router ? bnlist.srcActive : bnlist.src"
              :alt="bnlist.name"
            />
            <div v-text="bnlist.name" class="text-[0.7rem]"></div>
          </div>
        </RouterLink>
      </template>
    </div>
  </div>
  <!-- bottom-nav end -->
</template>

<script setup lang="ts">
import tabBarIcon from '@/assets/image/tabBar/tabBar'
import { useRoute } from 'vue-router'

const route = useRoute()

//bottom-nav 리스트
const bottomNavList = [
  { name: '홈', router: 'main-home', src: tabBarIcon.home, srcActive: tabBarIcon.homeActive },
  {
    name: '카테고리',
    router: 'category',
    src: tabBarIcon.category,
    srcActive: tabBarIcon.categoryActive,
  },
  { name: '검색', router: 'search', src: tabBarIcon.search, srcActive: tabBarIcon.searchActive },
  {
    name: '마이쇼핑',
    router: 'mypage',
    src: tabBarIcon.shopping,
    srcActive: tabBarIcon.shoppingActive,
  },
]
</script>
