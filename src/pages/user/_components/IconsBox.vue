<template>
  <div class="w-full rounded-2xl bg-white p-3">
    <div class="border-b-surface-50 grid grid-cols-4 border-b py-5">
      <Icon
        v-for="(item, index) in iconItems1"
        :key="index"
        background="surface"
        :icon="item.icon"
        :label="item.label"
        :explain="item.explain"
        size="md"
        sorting="horizon"
        :class="isDisabled(item.label) ? 'disabled' : 'cursor-pointer'"
        @click="() => handleClick(item.link)"
      />
    </div>
    <div class="my-5 grid grid-cols-4 gap-3">
      <Icon
        v-for="(item, index) in iconItems2"
        :key="index"
        background="trans"
        :icon="item.icon"
        :label="item.label"
        size="sm"
        sorting="horizon"
        class="disabled"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Icon from '@/components/icons/Icon.vue'
import orderIcon from '@/assets/image/icons/orderIcon.svg'
import reviewIcon from '@/assets/image/icons/reviewIcon.svg'

const router = useRouter()

const iconItems1 = [
  { label: '주문/배송내역', icon: orderIcon, explain: '0', link: 'orders' },
  { label: '찜한상품', icon: 'src/assets/logo.svg', explain: '1' },
  { label: '리뷰작성', icon: reviewIcon, explain: '850원', link: 'reviews' },
  { label: '관심스토어', icon: 'src/assets/logo.svg', explain: '76' },
]

const iconItems2 = [
  { label: '보유쿠폰', icon: 'src/assets/logo.svg' },
  { label: '최근본상품', icon: 'src/assets/logo.svg' },
  { label: '상품Q&A', icon: 'src/assets/logo.svg' },
  { label: '자주구매', icon: 'src/assets/logo.svg' },
  { label: '정기구독', icon: 'src/assets/logo.svg' },
  { label: '선물함', icon: 'src/assets/logo.svg' },
  { label: '렌탈', icon: 'src/assets/logo.svg' },
  { label: '무료체험', icon: 'src/assets/logo.svg' },
]

const isDisabled = (label: string) => {
  return !['주문/배송내역', '리뷰작성'].includes(label)
}

function handleClick(link?: string) {
  if (link) {
    router.push({ name: link })
  }
}
</script>
