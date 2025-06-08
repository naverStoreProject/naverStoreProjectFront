<template>
  <AuthFormBox title="회원가입">
    <form @submit.prevent="onRegister" class="space-y-4">
      <AuthInput v-model="name" placeholder="이름" :error-message="nameError" />
      <AuthInput v-model="nickname" placeholder="닉네임" :error-message="nicknameError" />
      <AuthInput v-model="email" type="email" placeholder="이메일" :error-message="emailError" />
      <AuthInput
        v-model="password"
        type="password"
        placeholder="비밀번호"
        :error-message="passwordError"
      />
      <AuthInput
        v-model="confirmPassword"
        type="password"
        placeholder="비밀번호 확인"
        :error-message="confirmPasswordError"
      />
      <AuthInput v-model="phone" placeholder="전화번호" :error-message="phoneError" />
      <AuthInput v-model="address" placeholder="주소" :error-message="addressError" />

      <BaseBtn
        :label="isLoading ? '회원가입 중...' : '회원가입'"
        color="primary"
        size="md"
        rounded="lg"
        :disabled="isLoading"
      />
    </form>
  </AuthFormBox>
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
