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
          <AuthInput v-model="name" type="text" placeholder="이름" :error-message="nameError" />
          <AuthInput
            v-model="nickname"
            type="text"
            placeholder="별명"
            :error-message="nicknameError"
          />
          <AuthInput v-model="email" type="text" placeholder="이메일" :error-message="emailError" />
          <AuthInput
            v-model="phone"
            type="text"
            placeholder="전화번호"
            :error-message="phoneError"
          />

          <div class="text-sm text-gray-600"></div>
        </div>

        <!-- 로그인 버튼 -->
        <BaseBtn
          :label="isLoading ? '비밀번호 찾는 중...' : '비밀번호 찾기'"
          color="primary"
          size="lg"
          rounded="lg"
          class="mt-7 w-full"
          :disabled="isLoading"
          @click="onSubmit"
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
import AuthFormBox from '@/pages/auth/_components/AuthFormBox.vue'
import AuthInput from '@/pages/auth/_components/AuthInput.vue'
import BaseBtn from '@/components/buttons/BaseBtn.vue'
import logo from '@/assets/image/logo/logo'
// 입력 상태
const name = ref('')
const email = ref('')
const nickname = ref('')
const phone = ref('')

// 에러 메시지
const nameError = ref('')
const emailError = ref('')
const nicknameError = ref('')
const phoneError = ref('')

const isLoading = ref(false)

const validate = () => {
  let valid = true

  if (!name.value.trim()) {
    nameError.value = '이름을 입력해주세요.'
    valid = false
  } else {
    nameError.value = ''
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value.trim()) {
    emailError.value = '이메일을 입력해주세요.'
    valid = false
  } else if (!emailPattern.test(email.value)) {
    emailError.value = '올바른 이메일 형식이 아닙니다.'
    valid = false
  } else {
    emailError.value = ''
  }

  if (!nickname.value.trim()) {
    nicknameError.value = '별명을 입력해주세요.'
    valid = false
  } else {
    nicknameError.value = ''
  }

  if (!phone.value.trim()) {
    phoneError.value = '전화번호를 입력해주세요.'
    valid = false
  } else {
    phoneError.value = ''
  }

  return valid
}

const onSubmit = async () => {
  if (!validate()) return

  isLoading.value = true

  try {
    // 서버 요청 예시
    // await findPasswordApi(name.value, email.value)
    // alert('비밀번호 재설정 링크가 이메일로 전송되었습니다.')
    alert(`(예시) ${name.value}님에게 비밀번호 재설정 이메일이 발송되었습니다.`)
  } catch (err) {
    alert('일치하는 정보가 없습니다.')
  } finally {
    isLoading.value = false
  }
}
</script>
