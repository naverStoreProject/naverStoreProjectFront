<template>
  <div class="space-x-2 text-center text-sm text-gray-500">
    <RouterLink to="/find-password" class="hover:underline">비밀번호 찾기</RouterLink>
    <span>|</span>
    <RouterLink to="/find-id" class="hover:underline">아이디 찾기</RouterLink>
    <span>|</span>
    <RouterLink to="/register" class="hover:underline">회원가입</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
