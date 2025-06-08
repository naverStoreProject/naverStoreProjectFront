<template>
  <div>
    <div>내브바는 레이아웃에서 설정 예정</div>
    <div class="my-3 flex gap-1.5">
      <BaseBtn
        v-for="(tab, idx) in tabs"
        :key="tab.label"
        :class="[selectedIdx === idx ? 'bg-surface-500 text-white' : 'text-surface-500 bg-white']"
        rounded="full"
        size="md"
        @click="() => (selectedIdx = idx)"
      >
        <template #default>
          <span>{{ tab.label }}</span>
          <span v-if="tab.count !== undefined" class="text-secondary-500 font-gmarket-bold ml-1">
            {{ tab.count.toLocaleString() }}
          </span>
        </template>
      </BaseBtn>
    </div>
    <OrderBox />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseBtn from '@/components/buttons/BaseBtn.vue'
import OrderBox from '@/pages/user/_components/OrderBox.vue'

// 버튼 구성 데이터
const tabs = [
  { label: '전체', count: undefined },
  { label: '최대 포인트 적립 가능 금액', count: 2973 },
  { label: '배송진행', count: 2 },
  { label: '취소/교환/반품', count: 1 },
]

// 선택된 인덱스
const selectedIdx = ref(0)
</script>
