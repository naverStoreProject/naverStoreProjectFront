<template>
  <div class="bottom-nav">
    <template v-for="bnlist in bottomNavList">
      <RouterLink :to="{ name: bnlist.router }" class="bottom-nav__button">
        <div class="bottom-nav__icon">
          <img src="" alt="" />
        </div>
        <div>
          <div v-text="bnlist.name"></div>
        </div>
      </RouterLink>
    </template>
  </div>
  <!-- bottom-nav end -->
</template>

<script setup lang="ts">
//bottom-nav 리스트
const bottomNavList = [
  { name: '홈', router: 'home', src: '' },
  { name: '발견', router: 'home', src: '' },
  { name: '카테고리', router: 'category', src: '' },
  { name: '검색', router: 'search', src: '' },
  { name: '마이쇼핑', router: 'user', src: '' },
]
</script>

<style>
.bottom-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: var(--color-gray-200);
  height: 5rem;
  padding: 0rem 2rem 0rem 2rem;
}
.bottom-nav__button {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto 0;
}
</style>
