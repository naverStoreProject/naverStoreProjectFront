<template>
  <div class="border-t-surface-50 fixed bottom-0 left-0 z-50 w-full border-t bg-white py-2">
    <div class="mx-auto flex w-3/5 items-center justify-around">
      <template v-for="bnlist in bottomNavList">
        <RouterLink :to="{ name: bnlist.router }">
          <div class="flex flex-col items-center justify-center gap-0.5">
            <img class="w-7" :src="bnlist.src" :alt="bnlist.name" />
            <div v-text="bnlist.name" class="text-xs"></div>
          </div>
        </RouterLink>
      </template>
    </div>
  </div>
  <!-- bottom-nav end -->
</template>

<script setup lang="ts">
//bottom-nav 리스트
const bottomNavList = [
  { name: '홈', router: 'main-home', src: 'src/assets/logo.svg' },
  { name: '발견', router: 'home', src: 'src/assets/logo.svg' },
  { name: '카테고리', router: 'category', src: 'src/assets/logo.svg' },
  { name: '검색', router: 'search', src: 'src/assets/logo.svg' },
  { name: '마이쇼핑', router: 'mypage', src: 'src/assets/logo.svg' },
]
</script>
