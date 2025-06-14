<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-white">
    <!-- 로고 영역 (빈공간) -->
    <div class="mb-10 text-4xl font-bold text-green-600">NaverStore</div>

    <!-- 로그인 박스 -->
    <div class="w-[400px] rounded-md border bg-white p-8 shadow">
      <!-- 탭 (디자인만) -->

      <!-- 입력 필드 -->
      <div class="space-y-4">
        <AuthInput v-model="email" type="text" placeholder="이메일" :error-message="emailError" />
        <AuthInput
          v-model="password"
          :type="isPasswordVisible ? 'text' : 'password'"
          placeholder="비밀번호"
          :error-message="passwordError"
        >
          <template #suffix>
            <button
              type="button"
              class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              @click="togglePassword"
            >
              <svg
                v-if="!isPasswordVisible"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.056 10.056 0 012.442-4.158M9.88 9.88a3 3 0 104.24 4.24M6.1 6.1l11.8 11.8"
                />
              </svg>
            </button>
          </template>
        </AuthInput>
        <div class="text-sm text-gray-600">
          <label class="inline-flex items-center">
            <input type="checkbox" class="mr-1" /> 로그인 상태 유지
          </label>
        </div>
      </div>

      <!-- 로그인 버튼 -->
      <BaseBtn
        :label="isLoading ? '로그인 중...' : '로그인'"
        color="primary"
        size="lg"
        rounded="lg"
        class="mt-7 w-full"
        :disabled="isLoading"
        @click="onLogin"
      />
    </div>

    <!-- 하단 링크 -->
    <AuthFooterLinks />

    <!-- 배너 (임시 빈공간) -->
    <div
      class="mt-10 flex h-[100px] w-[600px] items-center justify-center bg-gray-100 text-gray-400"
    >
      배너 영역
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { loginApi } from '@/api/user'
import AuthInput from '@/pages/auth/_components/AuthInput.vue'
import BaseBtn from '@/components/buttons/BaseBtn.vue'
import AuthFooterLinks from '@/pages/auth/_components/AuthFooterLinks.vue'

const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')
const isPasswordVisible = ref(false)
const isLoading = ref(false)

const router = useRouter()
const userStore = useUserStore()

const togglePassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const validate = () => {
  let isValid = true
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!email.value.trim()) {
    emailError.value = '이메일을 입력해주세요.'
    isValid = false
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.value = '올바른 이메일 형식이 아닙니다.'
    isValid = false
  } else {
    emailError.value = ''
  }

  if (!password.value.trim()) {
    passwordError.value = '비밀번호를 입력해주세요.'
    isValid = false
  } else {
    passwordError.value = ''
  }

  return isValid
}

const onLogin = async () => {
  if (!validate()) return

  isLoading.value = true
  try {
    const res = await loginApi(email.value, password.value)
    const token = res.data.data.accessToken
    localStorage.setItem('token', token)
    isLoading.value = false
    router.push('/')
  } catch (err) {
    isLoading.value = false
    console.error('로그인 실패:', err)
    passwordError.value = '로그인에 실패했습니다.'
  }
}
</script>
