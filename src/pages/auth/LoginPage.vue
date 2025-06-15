<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="email">이메일:</label>
      <input id="email" v-model="form.email" type="email" required />
    </div>

    <div>
      <label for="password">비밀번호:</label>
      <input id="password" v-model="form.pwd" type="password" required />
    </div>

    <button type="submit">로그인</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import type { LoginForm } from '@/api/types/user.types'
import { login } from '@/api/userApi'

// 2. 라우터
const router = useRouter()
const route = useRoute()

// 3. 반응형 form 데이터 객체
const form = reactive<LoginForm>({
  email: '',
  pwd: '',
})

// 4. 제출 처리 함수
const handleSubmit = async () => {
  if (!form.email || !form.pwd) {
    alert('모든 필드를 입력해주세요.')
    return
  }

  const response = await login(form)

  if (response?.success) {
    const token = response.data.accessToken
    localStorage.setItem('token', token)
    const redirectPath = (route.query.redirect as string) || '/'
    router.push(redirectPath)
  } else {
    console.log('hello')
    alert(response?.message)
  }
}
</script>
