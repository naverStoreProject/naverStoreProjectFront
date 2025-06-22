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
          <span v-if="idx !== 0 && tab.count !== undefined" class="text-secondary-500 ml-1">
            {{ tab.count.toLocaleString() }}
          </span>
        </template>
      </BaseBtn>
    </div>
    <OrderBox
      class="mb-3"
      v-for="order in filteredOrders"
      :key="order.id"
      :order="order"
      @delete="doDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect, computed, onMounted } from 'vue'
import BaseBtn from '@/components/buttons/BaseBtn.vue'
import OrderBox from '@/pages/user/_components/OrderBox.vue'
import {
  fetchOrderItems,
  searchOrderItems,
  deleteOrderItem,
  updateOrderItemStatus,
} from '@/api/user'
import type { OrderItem } from '@/types/order'

const orders = ref<OrderItem[]>([])
const memberId = 1
onMounted(async () => {
  const resp = await fetchOrderItems(memberId)
  if (resp?.data) {
    orders.value = resp.data
  }
})

// 버튼 구성 데이터
const tabs = reactive([
  { label: '전체', filterKey: null, count: undefined },
  { label: '최대 포인트 적립 가능 금액', filterKey: ['배송 완료'], count: 0 as number | string },
  { label: '배송진행', filterKey: ['배송 중'], count: 0 },
  { label: '취소/교환/반품', filterKey: ['반품 완료', '교환 완료'], count: 0 },
])

// 선택된 인덱스
const selectedIdx = ref(0)

// watchEffect로 상태별 count 동기화
watchEffect(() => {
  tabs[1].count =
    Math.floor(
      orders.value
        .filter(order => tabs[1].filterKey!.includes(order.status))
        .reduce((sum, order) => sum + order.price, 0) * 0.01
    ).toLocaleString() + '원'

  tabs[2].count = orders.value.filter(order => tabs[2].filterKey!.includes(order.status)).length

  tabs[3].count = orders.value.filter(order => tabs[3].filterKey!.includes(order.status)).length
})

// 필터링된 주문 목록 계산 속성
const filteredOrders = computed(() => {
  const filter = tabs[selectedIdx.value].filterKey
  if (!filter) return orders.value
  return orders.value.filter(order => filter.includes(order.status))
})

function doDelete(orderId: number) {
  deleteOrderItem(orderId).then(() => {
    orders.value = orders.value.filter(order => order.id !== orderId)
  })
}
</script>
