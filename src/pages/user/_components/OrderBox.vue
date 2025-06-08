<template>
  <div class="flex flex-col gap-2 rounded-2xl bg-white p-4">
    <div class="flex items-center justify-between">
      <div>
        <span class="font-gmarket-bold text-lg">{{ order.status }}</span>
        <span v-if="isBeforeAutoConfirm" class="text-surface-300 font-gmarket-light ml-2">
          {{ formattedDate }} 자동 구매확정 예정
        </span>
      </div>
      <img :src="CloseIcon" alt="삭제버튼" class="cursor-pointer" @click="doDelete" />
    </div>
    <div class="flex gap-6">
      <img
        class="aspect-square w-32 cursor-pointer rounded-lg"
        :src="order.image"
        alt="상품이미지"
        @click="gotoDetail"
      />
      <div class="flex w-full flex-col gap-1">
        <span class="text-surface-300 font-gmarket-light">{{ order.date }} </span>
        <span class="cursor-pointer" @click="gotoDetail">{{ order.title }}</span>
        <span class="font-gmarket-bold flex items-center text-lg">
          {{ order.price.toLocaleString() }}원
          <img :src="NpayIcon" alt="네이버페이" class="ml-1 h-8 w-auto" />
        </span>
        <div class="flex justify-between">
          <span class="text-secondary-500 cursor-pointer text-base" @click="gotoDetail"
            >상세보기 ></span
          >
          <span class="text-surface-300 cursor-pointer" @click="gotoQna"
            >{{ order.company }} 문의 ></span
          >
        </div>
      </div>
    </div>
    <div class="mt-2 flex w-full items-stretch gap-1">
      <BaseBtn
        v-for="(btn, idx) in buttonsByStatus"
        :key="btn"
        :label="btn"
        rounded="square"
        size="lg"
        :class="[
          'flex-1 border',
          idx === 0
            ? 'border-secondary-500 font-gmarket-bold text-secondary-500'
            : 'border-surface-300',
        ]"
      />
      <div
        class="border-surface-300 flex aspect-square w-12 items-center justify-center rounded-sm border text-center"
      >
        ⋯
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import BaseBtn from '@/components/buttons/BaseBtn.vue'
import NpayIcon from '@/assets/image/shortcut/delivery.png'
import CloseIcon from '@/assets/closeIcon.svg'
import type { OrderItem } from '../orders/OrderData'

const props = defineProps<{ order: OrderItem }>()
const router = useRouter()

// 상세 페이지로 이동
const gotoDetail = () => {
  console.log('상세 페이지로 이동:', props.order.id)
  // router.push({ name: 'mypage' })
}

// 문의 페이지로 이동
const gotoQna = () => {
  console.log('문의 페이지로 이동:', props.order.company)
  // router.push({ name: 'mypage' })
}

function doDelete() {
  // 삭제 로직 구현
  console.log('주문 삭제:', props.order.id)
}

// 구매확정 예정일 계산 함수
const autoConfirmDate = (status: string, statusChangedAt: string) => {
  const confirmDate = new Date(statusChangedAt)
  confirmDate.setDate(confirmDate.getDate() + 7)

  const today = new Date()
  const isBefore = status === '배송 완료' && confirmDate > today
  const formattedDate = `${confirmDate.getMonth() + 1}.${confirmDate.getDate()}(${['일', '월', '화', '수', '목', '금', '토'][confirmDate.getDay()]})`

  return {
    isBeforeAutoConfirm: isBefore,
    formattedDate,
  }
}
// 자동 구매확정 예정일 사용
const { isBeforeAutoConfirm, formattedDate } = autoConfirmDate(
  props.order.status,
  props.order.statusChangedAt
)

// 주문 상태에 따라 버튼 구성
const buttonsByStatus = computed(() => {
  const status = props.order.status
  if (status === '배송 완료' || status === '배송 중') {
    return ['구매확정', '반품요청', '교환요청']
  }
  if (status === '구매확정완료') {
    return ['한달사용리뷰', '장바구니 담기', '바로 구매하기']
  }
  return []
})
</script>
