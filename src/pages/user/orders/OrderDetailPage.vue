<template>
  <!-- <div>주문 상세정보</div> -->
  <!--추후 내브바로 옮겨야 함-->
  <div class="flex flex-col gap-7">
    <!-- 주문상세정보 -->
    <div
      class="shadow-surface-300 drop-shadow-2xs flex flex-col gap-2 rounded-lg bg-white px-4 py-6"
    >
      <span class="text-surface-400 text-sm">{{ formattedOrderDate }}</span>
      <span>주문번호 {{ orderItem?.id }}</span>
    </div>
    <!-- 주문상품 -->
    <div>
      <div class="font-gmarket-bold mb-4 text-xl">주문상품</div>
      <div class="shadow-surface-300 drop-shadow-2xs flex flex-col gap-4 rounded-lg bg-white p-4">
        <div>
          <span class="text-xl">{{ orderItem?.company }}</span>
        </div>
        <div class="border-surface-100 flex flex-col gap-2 border-t pt-4">
          <span class="text-surface-300"
            ><span class="font-gmarket-bold mr-2 text-xl">{{ orderItem?.status }}</span
            >구매확정일 {{ formattedConfirmDate }}</span
          >
          <div class="flex gap-4">
            <img
              :src="orderItem?.image"
              alt="상품 이미지"
              class="h-25 w-25 rounded-lg object-cover"
            />
            <div class="flex flex-col gap-2">
              <span class="text-lg">{{ orderItem?.title }}</span>
              <span class="font-gmarket-bold text-lg"
                >{{ orderItem?.price.toLocaleString() }}원</span
              >
            </div>
          </div>
          <div class="mt-3">
            <BaseBtn
              color="surface"
              label="리뷰쓰기(최대 150원 적립)"
              rounded="lg"
              size="lg"
              class="bg-secondary-200 text-secondary-700 font-gmarket-bold w-full"
            />
            <div class="mt-2 grid w-full grid-cols-2 gap-2">
              <BaseBtn
                color="surface"
                label="배송조회"
                rounded="lg"
                size="lg"
                class="bg-surface-100 w-full"
              />
              <BaseBtn
                color="surface"
                label="장바구니 담기"
                rounded="lg"
                size="lg"
                class="bg-surface-100 w-full"
              />
              <BaseBtn
                color="surface"
                label="바로 구매하기"
                rounded="lg"
                size="lg"
                class="bg-surface-100 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 배송지 -->
    <div>
      <div class="font-gmarket-bold mb-4 text-xl">배송지</div>
      <div class="shadow-surface-300 drop-shadow-2xs flex flex-col gap-3 rounded-lg bg-white p-4">
        <span class="font-gmarket-bold text-lg">최승아(최승아)</span>
        <span class="text-surface-400">010-1234-5678</span>
        <span>서울특별시 강남구 테헤란로 123 (05117)</span>
      </div>
    </div>
    <!-- 결제정보 -->
    <div>
      <div class="font-gmarket-bold mb-4 text-xl">결제정보</div>
      <div class="shadow-surface-300 drop-shadow-2xs flex flex-col gap-3 rounded-lg bg-white p-4">
        <div class="text-secondary-700 font-gmarket-bold flex justify-between text-lg">
          <span>주문금액</span>
          <span>총 {{ orderItem?.price.toLocaleString() }}원</span>
        </div>
        <div class="border-surface-300 flex flex-col gap-2 border-l-4 pl-3">
          <div class="text-surface-400 flex justify-between">
            <span>상품금액</span>
            <span> {{ orderItem?.price.toLocaleString() }}원</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { orderedList } from './OrderData'
import type { OrderItem } from '@/types/order'

import BaseBtn from '@/components/buttons/BaseBtn.vue'

const route = useRoute()
const orderId = Number(route.params.orderId)
const orderItem = orderedList.find(item => item.id === orderId)

// 날짜 포맷팅
const formatOrderDateTime = (iso: string): string => {
  const date = new Date(iso)
  const formatted = date.toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
  return formatted.replace(/\. /g, '.').replace(/\.$/, '')
}

const formatConfirmDate = (iso: string): string => {
  const date = new Date(iso)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekday = date.toLocaleDateString('ko-KR', { weekday: 'short' })

  return `${year}. ${month}. ${day}. (${weekday})`
}

// 실제 데이터에 적용
const formattedOrderDate = orderItem?.date ? formatOrderDateTime(orderItem.date) : ''

const formattedConfirmDate = orderItem?.statusChangedAt
  ? formatConfirmDate(orderItem.statusChangedAt)
  : ''
</script>
