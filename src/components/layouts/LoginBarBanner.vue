<template>
  <div class="text-md flex justify-between">
    <div v-if="!isLogin">
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

    <div v-else>
      <div>
        <i class="fa-solid fa-lock"></i>
        <span> {{ userName }}님 환영합니다! </span>
      </div>

      <div>
        <button @click="handleLogout" class="text-primary-500">로그아웃</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getMyInfo } from '@/api/userApi'

const router = useRouter()
const isLogin = ref(false)
const userName = ref('')

// 로컬스토리지에서 토큰 확인
onMounted(async () => {
  const response = await getMyInfo()
  if (response?.success) {
    isLogin.value = true
    userName.value = response.data.nickname
  }
})

// 로그아웃 처리
const handleLogout = () => {
  localStorage.removeItem('token')
  alert('로그아웃 되었습니다.')
  isLogin.value = false
  router.push({ name: 'home' }) // 홈 또는 원하는 경로로 이동
}
</script>
