<template>
  <AuthFormBox>
    <!-- 이메일 입력 -->
    <AuthInput
      v-model="email"
      type="email"
      label="이메일"
      placeholder="이메일을 입력하세요"
      :error-message="emailError"
    />

    <!-- 비밀번호 입력 + 보기 토글 -->
    <div class="relative">
      <AuthInput
        v-model="password"
        :type="isPasswordVisible ? 'text' : 'password'"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
        :error-message="passwordError"
        class="pr-16"
      />
      <button
        type="button"
        @click="togglePassword"
        aria-label="비밀번호 보기 토글"
        class="absolute top-9 right-4 text-sm text-gray-500"
      >
        {{ isPasswordVisible ? '숨김' : '보기' }}
      </button>
    </div>

    <!-- 로그인 버튼 -->
    <BaseBtn
      :label="isLoading ? '로그인 중...' : '로그인'"
      color="primary"
      size="md"
      rounded="lg"
      :disabled="isLoading"
      @click="onLogin"
      class="w-full"
    />

    <!-- 하단 링크 -->
    <AuthFooterLinks />
  </AuthFormBox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import AuthFormBox from '@/pages/auth/_components/AuthFormBox.vue'
import AuthInput from '@/pages/auth/_components/AuthInput.vue'
import AuthFooterLinks from '@/pages/auth/_components/AuthFooterLinks.vue'
import BaseBtn from '@/components/buttons/BaseBtn.vue'

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
  const success = await userStore.login(email.value, password.value)
  isLoading.value = false

  if (success) router.push('/')
}
</script>
