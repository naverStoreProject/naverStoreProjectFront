<template>
  <div class="text-md flex justify-between">
    <div>
      <i class="fa-solid fa-lock"></i>
      <span>로그인 하고 맞춤 혜택 받으세요</span>
    </div>

    <div>
      <RouterLink :to="{ name: 'login' }">
        <div class="text-primary-500">로그인 하러 가기</div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup></script>
