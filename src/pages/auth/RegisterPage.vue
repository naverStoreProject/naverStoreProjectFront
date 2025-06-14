<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-white">
    <!-- 로고 영역 (빈공간) -->
    <div class="mb-10 text-4xl font-bold text-green-600">NaverStore</div>

    <!-- 로그인 박스 -->
    <div class="w-[400px] rounded-md border bg-white p-8 shadow">
      <!-- 입력 필드 -->
      <div class="space-y-4">
        <AuthInput v-model="name" type="text" placeholder="이름" :error-message="nameError" />
        <AuthInput
          v-model="nickname"
          type="text"
          placeholder="별명"
          :error-message="nicknameError"
        />
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
        <AuthInput
          v-model="confirmPassword"
          type="password"
          placeholder="비밀먼호 확인"
          :error-message="confirmPasswordError"
        />
        <AuthInput v-model="phone" type="text" placeholder="전화번호" :error-message="phoneError" />
        <AuthInput v-model="address" type="text" placeholder="주소" :error-message="addressError" />
        <div class="text-sm text-gray-600"></div>
      </div>

      <!-- 로그인 버튼 -->
      <BaseBtn
        :label="isLoading ? '회원가입 중...' : '회원가입'"
        color="primary"
        size="lg"
        rounded="lg"
        class="mt-7 w-full"
        :disabled="isLoading"
        @click="onRegister"
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
import axios from 'axios'

import AuthFormBox from '@/pages/auth/_components/AuthFormBox.vue'
import AuthInput from '@/pages/auth/_components/AuthInput.vue'
import BaseBtn from '@/components/buttons/BaseBtn.vue'

// 입력값
const name = ref('')
const nickname = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const phone = ref('')
const address = ref('')

// 비밀번호 표시/숨김 토글
const isPasswordVisible = ref(false)

const togglePassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

// 에러 메시지
const nameError = ref('')
const nicknameError = ref('')
const emailError = ref('')
const passwordError = ref('')
const confirmPasswordError = ref('')
const phoneError = ref('')
const addressError = ref('')

const isLoading = ref(false)
const router = useRouter()

const validate = () => {
  let isValid = true

  if (!name.value.trim()) {
    nameError.value = '이름을 입력해주세요.'
    isValid = false
  } else {
    nameError.value = ''
  }

  if (!nickname.value.trim()) {
    nicknameError.value = '닉네임을 입력해주세요.'
    isValid = false
  } else {
    nicknameError.value = ''
  }

  if (!email.value.trim()) {
    emailError.value = '이메일을 입력해주세요.'
    isValid = false
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.value = '올바른 이메일 형식이 아닙니다.'
    isValid = false
  } else {
    emailError.value = ''
  }

  if (!password.value) {
    passwordError.value = '비밀번호를 입력해주세요.'
    isValid = false
  } else {
    passwordError.value = ''
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = '비밀번호가 일치하지 않습니다.'
    isValid = false
  } else {
    confirmPasswordError.value = ''
  }

  if (!phone.value.trim()) {
    phoneError.value = '전화번호를 입력해주세요.'
    isValid = false
  } else {
    phoneError.value = ''
  }

  if (!address.value.trim()) {
    addressError.value = '주소를 입력해주세요.'
    isValid = false
  } else {
    addressError.value = ''
  }

  return isValid
}

const onRegister = async () => {
  if (!validate()) return

  isLoading.value = true

  try {
    const payload = {
      name: name.value,
      nickname: nickname.value,
      email: email.value,
      pwd: password.value, // 평문 전달
      phone: phone.value,
      address: address.value,
    }

    await axios.post('/api/auth/register', payload)
    alert('회원가입이 완료되었습니다.')
    router.push('/login')
  } catch (error) {
    console.error(error)
    alert('회원가입에 실패했습니다.')
  } finally {
    isLoading.value = false
  }
}
</script>
