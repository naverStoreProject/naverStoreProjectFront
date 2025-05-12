<template>
  <div class="p-4 space-y-2">
    <h1 class="text-xl font-gmarket-700 mb-4">🙋‍♀️ 마이페이지 메뉴</h1>
    <ul class="space-y-1 text-blue-600 underline">
      <li><RouterLink to="/user/orders">주문내역</RouterLink></li>
      <li><RouterLink to="/user/orders/review/1">리뷰 작성</RouterLink></li>
      <li><RouterLink to="/user/profile">프로필 관리</RouterLink></li>
      <li><RouterLink to="/user/notice">공지사항</RouterLink></li>
      <li><RouterLink to="/user/notice/qna">1:1 문의</RouterLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// script
</script>
