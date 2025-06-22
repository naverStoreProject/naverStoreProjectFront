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
  fetchOrderGroups,
  fetchOrderItemsByOrderId,
  searchOrderItems,
  deleteOrderItem,
  updateOrderItemStatus,
} from '@/api/user'
import type { OrderGroup, OrderItem } from '@/types/order'

interface FullOrder {
  group: OrderGroup
  items: OrderItem[]
}

const memberId = 1
const orders = ref<FullOrder[]>([])
onMounted(async () => {
  const { data: orderGroups } = await fetchOrderGroups(memberId)

  const results: FullOrder[] = []
  for (const group of orderGroups) {
    const { data: items } = await fetchOrderItemsByOrderId(group.id)
    results.push({
      group,
      items,
    })
  }

  orders.value = results
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
  // 배송 완료 금액 → 모든 상품 중 배송 완료 상태인 상품의 총액
  const deliveryDoneItems = orders.value.flatMap(order =>
    order.items.filter(item => tabs[1].filterKey!.includes(item.status))
  )
  tabs[1].count =
    Math.floor(
      deliveryDoneItems.reduce((sum, item) => sum + item.price, 0) * 0.01
    ).toLocaleString() + '원'

  // 배송 중 상품 수
  tabs[2].count = orders.value.reduce(
    (count, order) =>
      count + order.items.filter(item => tabs[2].filterKey!.includes(item.status)).length,
    0
  )

  // 교환/반품 상품 수
  tabs[3].count = orders.value.reduce(
    (count, order) =>
      count + order.items.filter(item => tabs[3].filterKey!.includes(item.status)).length,
    0
  )
})

// 필터링된 주문 목록 계산 속성
const filteredOrders = computed(() => {
  const filter = tabs[selectedIdx.value].filterKey
  if (!filter) return orders.value.flatMap(order => order.items) // 전체 상품
  return orders.value.flatMap(order => order.items.filter(item => filter.includes(item.status)))
})

function doDelete(orderId: number) {
  deleteOrderItem(orderId).then(() => {
    orders.value = orders.value.filter(order => order.group.id !== orderId)
  })
}
</script>
