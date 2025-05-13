<template>
  <div class="p-4 space-y-2">
    <h1 class="text-xl font-gmarket-700 mb-4">📌 라우트 링크 목록</h1>
    <ul class="space-y-1 text-blue-500 underline">
      <li><RouterLink :to="{ name: 'mypage' }">마이페이지</RouterLink></li>
      <li><RouterLink :to="{ name: 'search' }">검색</RouterLink></li>
      <li><RouterLink :to="{ name: 'login' }">로그인</RouterLink></li>
      <li><RouterLink :to="{ name: 'cart' }">장바구니</RouterLink></li>
      <li><RouterLink :to="{ name: 'event' }">이벤트</RouterLink></li>
      <li><RouterLink :to="{ name: 'category' }">카테고리</RouterLink></li>
      <li><RouterLink :to="{ name: 'product-list' }">상품 리스트</RouterLink></li>
      <li>
        <RouterLink :to="{ name: 'product-item', params: { itemId: 123 } }">상품 디테일</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'item-review', params: { itemId: 123 } }">상품 리뷰</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 필요 시 script 추가
</script>
