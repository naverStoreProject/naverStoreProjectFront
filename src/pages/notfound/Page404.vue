<template>
  <div class="flex flex-col gap-4 p-10">
    <div>404 page</div>
    <div>우선 컴포넌트 사용법은 여기에 기술해두겠습니다. 추후에 not found 페이지로 변경</div>
    <BaseBtn label="카네이션" size="md" rounded="full" color="surface" @click="handleClick" />
    <!-- 기본으로 만들어둔 버튼 외에 다른 색상이나 크기가 필요하다면 해당 스타일이 적용되는 변수를 빼고 class로 직접 설정해주면 됩니다. -->
    <BaseBtn label="외부 커스텀" size="sm" rounded="full" class="bg-red-500" />
    <Icon
      icon="src/assets/logo.svg"
      label="리빙포인트"
      background="surface"
      sorting="vertical"
      size="md"
    />
    <Icon icon="src/assets/logo.svg" label="홈" background="trans" sorting="vertical" size="md" />
    <Icon icon="src/assets/logo.svg" label="리빙" background="trans" sorting="horizon" size="sm" />
    <NavBtn nav="src/assets/navBack.svg" />
    <NavBtn nav="src/assets/navFront.svg" />
    <div role="listbox" class="flex flex-col gap-2">
      <SelectBox v-model="selected" :options="options" color="base" size="sm" rounded="full" />
      <p>{{ selected }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseBtn from '@/components/buttons/BaseBtn.vue'
import NavBtn from '@/components/buttons/NavBtn.vue'
import Icon from '@/components/icons/Icon.vue'
import SelectBox from '@/components/inputs/SelectBox.vue'
import { ref } from 'vue'

const handleClick = () => {
  alert('버튼이 클릭됐습니다!')
}

const options = ['가나다', '마바사아', '라마바']
const selected = ref('가나다')
</script>
