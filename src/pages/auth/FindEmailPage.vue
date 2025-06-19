<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-white">
    <!-- 로고 영역 (빈공간) -->
    <div class="logo-img mb-6">
      <img :src="logo.mainLogo" alt="mainLogo" class="h-20 w-20" />
    </div>

    <!-- 로그인 박스 -->
    <div class="w-[400px] rounded-md border bg-white p-8 shadow">
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
        <AuthInput v-model="phone" type="text" placeholder="전화번호" :error-message="phoneError" />

        <div class="text-sm text-gray-600"></div>
      </div>

      <!-- 로그인 버튼 -->
      <BaseBtn
        :label="isLoading ? '이메일 찾는 중...' : '이메일 찾기'"
        color="primary"
        size="lg"
        rounded="lg"
        class="mt-7 w-full"
        :disabled="isLoading"
        @click="onSubmit"
      />
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
import AuthFormBox from '@/pages/auth/_components/AuthFormBox.vue'
import AuthInput from '@/pages/auth/_components/AuthInput.vue'
import BaseBtn from '@/components/buttons/BaseBtn.vue'
import logo from '@/assets/image/logo/logo'
// 실제 axios 요청이 필요한 경우 아래 주석 해제
// import axios from 'axios'

const router = useRouter()

const name = ref('')
const nickname = ref('')
const phone = ref('')

const nameError = ref('')

const nicknameError = ref('')
const phoneError = ref('')
const isLoading = ref(false)

const validate = () => {
  let isValid = true

  if (!name.value.trim()) {
    nameError.value = '이름을 입력해주세요.'
    isValid = false
  } else {
    nameError.value = ''
  }
  if (!nickname.value.trim()) {
    nicknameError.value = '별명을 입력해주세요.'
    isValid = false
  } else {
    nicknameError.value = ''
  }
  if (!phone.value.trim()) {
    phoneError.value = '휴대폰 번호를 입력해주세요.'
    isValid = false
  } else {
    phoneError.value = ''
  }

  return isValid
}

const onSubmit = async () => {
  if (!validate()) return

  isLoading.value = true
  try {
    // 실제 서버 요청 예시:
    // const response = await axios.post('/api/auth/find-email', {
    //   name: name.value,
    //   phone: phone.value
    // })
    // alert(`회원님의 이메일은 ${response.data.email} 입니다.`)

    // 임시 예시 응답
    alert(`${name.value}님의 이메일은 example@domain.com 입니다.`)
    router.push('/login')
  } catch (error) {
    alert('일치하는 정보가 없습니다.')
  } finally {
    isLoading.value = false
  }
}
</script>
