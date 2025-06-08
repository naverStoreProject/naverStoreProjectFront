<template>
  <AuthFormBox title="아이디(이메일) 찾기">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <AuthInput v-model="name" placeholder="이름" :error-message="nameError" />
      <AuthInput v-model="phone" placeholder="휴대폰 번호" :error-message="phoneError" />
      <BaseBtn
        :label="isLoading ? '조회 중...' : '이메일 찾기'"
        color="primary"
        size="md"
        rounded="lg"
        :disabled="isLoading"
      />
    </form>

    <template #footer>
      <AuthFooterLinks />
    </template>
  </AuthFormBox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AuthFormBox from '@/pages/auth/_components/AuthFormBox.vue'
import AuthInput from '@/pages/auth/_components/AuthInput.vue'
import BaseBtn from '@/components/buttons/BaseBtn.vue'

// 실제 axios 요청이 필요한 경우 아래 주석 해제
// import axios from 'axios'

const name = ref('')
const phone = ref('')

const nameError = ref('')
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
  } catch (error) {
    alert('일치하는 정보가 없습니다.')
  } finally {
    isLoading.value = false
  }
}
</script>
