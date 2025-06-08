<template>
  <form @submit.prevent="onLogin">
    <input v-model="email" type="email" placeholder="이메일" />
    <input v-model="password" type="password" placeholder="비밀번호" />
    <BaseBtn color="primary" label="로그인" rounded="lg" size="md" />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import BaseBtn from '@/components/buttons/BaseBtn.vue'

const email = ref('')
const password = ref('')
const router = useRouter()
const userStore = useUserStore()

const onLogin = async () => {
  const success = await userStore.login(email.value, password.value)
  if (success) router.push('/') // 홈으로 이동
}
</script>
