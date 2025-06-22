<template>
  <div class="flex flex-col gap-2 rounded-2xl bg-white p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
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
        :src="order.productImage"
        alt="상품이미지"
        @click="gotoDetail"
      />
      <div class="flex w-full flex-col gap-1">
        <span class="text-surface-300 font-gmarket-light">{{ order.statusChangedDate }} </span>
        <span class="cursor-pointer" @click="gotoDetail">{{ order.productName }}</span>
        <span class="font-gmarket-bold flex items-center text-lg">
          {{ order.price.toLocaleString() }}원
          <img :src="NpayIcon" alt="네이버페이" class="ml-1 h-8 w-auto" />
        </span>
        <div class="flex justify-between">
          <span class="text-secondary-500 cursor-pointer text-base" @click="gotoDetail"
            >상세보기 ></span
          >
          <span class="text-surface-400 cursor-pointer" @click="gotoQna"
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
        @click="() => handleAction(btn)"
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
import CloseIcon from '@/assets/image/icons/closeIcon.svg'
import type { OrderItem } from '@/types/order'
import {
  fetchOrderItems,
  searchOrderItems,
  deleteOrderItem,
  updateOrderItemStatus,
} from '@/api/user'

const props = defineProps<{ order: OrderItem }>()
const router = useRouter()

// 상세 페이지로 이동
const gotoDetail = () => {
  router.push(`/orders/${props.order.id}`)
}

// 문의 페이지로 이동
const gotoQna = () => {
  router.push(`/qna?company=${props.order.company}&orderId=${props.order.id}`)
}

function doDelete() {
  deleteOrderItem(props.order.id)
    .then(() => console.log('주문 삭제 완료'))
    .catch(console.error)
}

// 상태 업데이트
function handleAction(action: string) {
  const statusMap: Record<string, string> = {
    '주문 완료': '주문완료',
    '상품 준비 중': '상품준비중',
    '배송 중': '배송중',
    '배송 완료': '배송완료',
    '구매 확정': '구매확정',
    '반품 완료': '반품완료',
    '교환 완료': '교환완료',
  }

  const nextStatus = statusMap[action]
  if (nextStatus) {
    updateOrderItemStatus(props.order.id, nextStatus)
      .then(() => console.log(`%{nextStatus} 상태로 업데이트 완료`))
      .catch(console.error)
  }
}

// 구매확정 예정일 계산 함수
const autoConfirmDate = (status: string, statusChangedAt: string) => {
  const confirmDate = new Date(statusChangedAt)
  confirmDate.setDate(confirmDate.getDate() + 7)

  const today = new Date()
  const isBefore = status === '배송완료' && confirmDate > today
  const formattedDate = `${confirmDate.getMonth() + 1}.${confirmDate.getDate()}(${['일', '월', '화', '수', '목', '금', '토'][confirmDate.getDay()]})`

  return {
    isBeforeAutoConfirm: isBefore,
    formattedDate,
  }
}

// 자동 구매확정 예정일 사용
const { isBeforeAutoConfirm, formattedDate } = autoConfirmDate(
  props.order.status,
  props.order.statusChangedDate
)

// 주문 상태에 따라 버튼 구성
const buttonsByStatus = computed(() => {
  const status = props.order.status
  if (status === '배송완료' || status === '배송중') {
    return ['구매확정', '반품요청', '교환요청']
  }
  if (status === '구매확정') {
    return ['한달사용리뷰', '장바구니 담기', '바로 구매하기']
  }
  return []
})
</script>
