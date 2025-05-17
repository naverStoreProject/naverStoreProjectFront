<template>
  <div>404 page</div>
  <div>우선 컴포넌트 사용법은 여기에 기술해두겠습니다. 추후에 not found 페이지로 변경</div>
  <div class="flex gap-2">
    <BaseBtn label="카네이션" size="md" rounded="full" color="surface" @click="handleClick" />
    <!-- 기본으로 만들어둔 버튼 외에 다른 색상이나 크기가 필요하다면 해당 스타일이 적용되는 변수를 빼고 class로 직접 설정해주면 됩니다. -->
    <BaseBtn label="외부 커스텀" size="sm" rounded="full" class="bg-positive-500" />
  </div>
</template>

<script setup>
import BaseBtn from '@/components/atoms/BaseBtn.vue'

const handleClick = () => {
  alert('버튼이 클릭됐습니다!')
}
</script>
