<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-white">
    <div class="flex flex-col items-center space-y-6">
      <div class="flex justify-center">
        <img :src="logo.mainLogo" alt="메인 로고" class="block h-auto w-60" />
      </div>
      <div class="w-90 rounded-md border bg-white p-8 shadow">
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
                <img :src="isPasswordVisible ? eyeOpenIcon : eyeCloseIcon" class="h-5 w-5" />
              </button>
            </template>
          </AuthInput>
          <label class="inline-flex cursor-pointer items-center text-sm text-gray-600">
            <span class="relative mr-2">
              <input
                type="checkbox"
                v-model="keepLoggedIn"
                class="peer checked:bg-primary-500 checked:border-primary-500 h-5 w-5 appearance-none rounded-full border border-gray-300 transition-colors duration-200"
              />
              <img
                :src="checkIcon"
                alt="체크 아이콘"
                class="pointer-events-none absolute top-1 left-1 hidden h-3 w-3 peer-checked:block"
              />
            </span>
            로그인 상태 유지
          </label>
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
    </div>

    <!-- 하단 링크 -->
    <AuthFooterLinks />

    <!-- 배너 (임시 빈공간) -->
    <div
      class="mt-10 flex h-[6.25rem] w-[37.5rem] items-center justify-center bg-gray-100 text-gray-400"
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
import eyeOpenIcon from '@/assets/image/icons/eyeOpenIcon.svg'
import eyeCloseIcon from '@/assets/image/icons/eyeCloseIcon.svg'
import logo from '@/assets/image/logo/logo'
import checkIcon from '@/assets/image/icons/checkIcon.svg'

const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')
const isPasswordVisible = ref(false)
const isLoading = ref(false)
const keepLoggedIn = ref(false)

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
    const success = await userStore.login(email.value, password.value)
    isLoading.value = false

    if (success) {
      router.push('/')
    } else {
      passwordError.value = '이메일 또는 비밀번호가 잘못되었습니다.'
    }
  } catch (err) {
    isLoading.value = false
    console.error('로그인 실패:', err)
    passwordError.value = '로그인에 실패했습니다.'
  }
}
</script>
