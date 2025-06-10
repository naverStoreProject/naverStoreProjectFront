<template>
  <AuthFormBox title="비밀번호 찾기">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <AuthInput v-model="name" placeholder="이름" :error-message="nameError" />
      <AuthInput v-model="email" placeholder="이메일" :error-message="emailError" />
      <BaseBtn
        :label="isLoading ? '조회 중...' : '비밀번호 찾기'"
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

// 입력 상태
const name = ref('')
const email = ref('')

// 에러 메시지
const nameError = ref('')
const emailError = ref('')

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
