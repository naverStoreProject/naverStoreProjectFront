<template>
  <div class="scrollbar-none w-full overflow-x-auto px-3 py-2">
    <div class="flex gap-2">
      <div
        v-for="list in shorcutList"
        class="relative flex justify-center gap-1 p-1 whitespace-nowrap"
        @click="clickShortcut(list.name)"
      >
        <div class="flex flex-col items-center">
          <Icon
            background="trans"
            :icon="shorcutImg[list.name]"
            rounded="xl"
            size="lg"
            sorting="horizon"
            label=""
            class="bg-surface-100 rounded-3xl"
          />
          <div class="pt-1">{{ list.title }}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sho">
    <div class=""></div>
  </div>
</template>

<script setup>
import { useOffcanvasStore } from '@/stores/offcanvasStore'

//아이콘 가져오기
import Icon from '@/components/icons/Icon.vue'
import shorcutImg from '@/assets/image/shortcut/shorcutImg'

const offcanvasStore = useOffcanvasStore()

const clickShortcut = name => {
  const shorcut = shorcutList.find(item => item.name == name)
  if (shorcut.open == 'offcanvas') {
    offcanvasStore.open(name)
  }
}

const shorcutList = [
  { title: '슈퍼적립', open: 'offcanvas', name: 'superCredit' },
  { title: 'N배송', open: 'offcanvas', name: 'delivery' },
  { title: '쇼핑라이브', open: 'offcanvas', name: 'shoppingLive' },
  { title: '패션타운', open: 'offcanvas', name: 'fashionTown' },
  // { title: '장보기', open: 'offcanvas', name: 'market' },
  { title: '원쁠딜', open: 'offcanvas', name: 'onePlus' },
  { title: '선물샵', open: 'offcanvas', name: 'giftShop' },
  { title: '쿠폰/혜택', open: 'offcanvas', name: 'couponSale' },
  { title: '오늘행사', open: 'offcanvas', name: 'todaySale' },
  { title: '푸드윈도', open: 'offcanvas', name: 'foodWindow' },
]
</script>

<style>
/* scrollbar 는 공통 css로 이동해야함 */
.scrollbar-none {
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-none::webkit-scrollbar {
  display: none;
}
.shortcut-item {
  display: flex;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  padding: 0.3rem 0.5rem 0.5rem 0.3rem;
}
</style>
