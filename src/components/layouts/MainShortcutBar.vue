<template>
  <div class="overflow-x-auto scrollbar-none w-full">
    <div class="shorcut-box">
      <RouterLink to="/" v-for="list in shorcutList" class="shortcut-item">
        <div class="flex flex-col items-center text-xs">
          <div class="shortcut-item__img"></div>
          <div v-text="list.title" class="shortcut-item__text"></div>
        </div>
      </RouterLink>
    </div>
  </div>

  <div class="sho">
    <div class=""></div>
  </div>
</template>

<script setup>
// open = [ 'offcanvas', 'paging']
const shorcutList = [
  { title: '슈퍼적립', open: 'offcanvas' },
  { title: 'N배송', open: 'offcanvas' },
  { title: '쇼핑라이브', open: 'offcanvas' },
  { title: '패션타운', open: 'offcanvas' },
  { title: '장보기', open: 'offcanvas' },
  { title: '장원쁠딜', open: 'offcanvas' },
  { title: '선물샵', open: 'offcanvas' },
  { title: '쿠폰혜택', open: 'offcanvas' },
  { title: '오늘행사', open: 'offcanvas' },
  { title: '푸드윈드', open: 'offcanvas' },
]
</script>

<style>
/* scrollbar 는 공통 css로 이동해야함 */
.scrollbar-none {
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-none::webkit-scrollbar {
  display: none;
}

.shorcut-box {
  display: flex;
}
.shortcut-item {
  display: flex;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  padding: 0.3rem 0.5rem 0.5rem 0.3rem;
}

.shortcut-item__img {
  width: 3rem;
  height: 3rem;
  border: 1px solid;
  border-radius: 0.5rem;
}
.shortcut-item__text {
  padding: 0.5rem;
}
</style>
