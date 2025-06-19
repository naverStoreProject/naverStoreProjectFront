<template>
  <div class="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
    <RouterLink to="/find-password" class="px- block hover:underline">비밀번호 찾기</RouterLink>
    <span>|</span>
    <RouterLink to="/find-email" class="block px-1 hover:underline">이메일 찾기</RouterLink>
    <span>|</span>
    <RouterLink to="/register" class="block px-1 hover:underline">회원가입</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
