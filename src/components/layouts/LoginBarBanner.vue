<template>
  <div class="text-md flex justify-between">
    <div v-if="userName">
      <i class="fa-solid fa-user"></i>
      <span>{{ userName }}님, 어서오세요!</span>
    </div>
    <div v-else>
      <i class="fa-solid fa-lock"></i>
      <span>로그인 하고 맞춤 혜택 받으세요</span>
    </div>

    <div>
      <RouterLink :to="{ name: userName ? 'mypage' : 'login' }">
        <div class="text-primary-500">
          {{ userName ? '마이페이지' : '로그인 하러 가기' }}
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const userName = userStore.user?.name || null
</script>
