<template>
  <div>
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
      v-for="order in orders"
      :key="order.id"
      :order="order"
      @statusUpdated="fetchOrders"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import BaseBtn from '@/components/buttons/BaseBtn.vue'
import OrderBox from '@/pages/user/_components/OrderBox.vue'
import { orderApi } from '@/api/user'
import type { OrderItem } from '@/types/order'

const orders = ref<OrderItem[]>([])
const isLoading = ref(true)

async function fetchOrders() {
  isLoading.value = true
  try {
    const response = await orderApi.getMyOrders()
    orders.value = response.data
  } catch (err) {
    console.error('주문 데이터를 가져오는데 실패했습니다.', err)
  } finally {
    isLoading.value = false
  }
}

// 전체 주문 개수
const countAll = computed(() => {
  return orders.value.length
})
// 배송완료인 것만 1% 계산
const computePoint = computed(() => {
  const deliveredOrders = orders.value.filter(order => order.status === '배송완료')
  const totalDelivered = deliveredOrders.reduce((sum, order) => sum + order.price, 0)
  return Math.floor(totalDelivered * 0.01)
})
// 배송 중
const countShipping = computed(() => {
  return orders.value.filter(order => order.status === '배송중').length
})
// 취소/교환/반품
const countReturnedOrExchanged = computed(() => {
  return orders.value.filter(order => order.status === '환불완료' || order.status === '교환완료')
    .length
})

// 버튼 구성 데이터
const tabs = reactive([
  { label: '전체', filterKey: null, count: countAll },
  { label: '최대 포인트 적립 가능 금액', filterKey: ['배송완료'], count: computePoint },
  { label: '배송진행', filterKey: ['배송중'], count: countShipping },
  { label: '취소/교환/반품', filterKey: ['환불완료', '교환완료'], count: countReturnedOrExchanged },
])

// 선택된 인덱스
const selectedIdx = ref(0)

onMounted(() => {
  fetchOrders()
})
</script>
