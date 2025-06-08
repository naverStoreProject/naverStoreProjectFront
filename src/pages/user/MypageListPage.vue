<template>
  <div class="flex flex-col gap-4">
    <!-- 개인 정보 -->
    <div class="flex justify-between">
      <div class="flex items-center gap-2">
        <BaseIcon background="surface" :icon="userIcon" size="md" />
        <div class="flex flex-col">
          <span class="font-gmarket-bold text-lg"> {{ user.nickname }}님</span>

          <span
            class="font-gmarket-light text-surface-600 flex cursor-pointer items-center gap-1 text-xs"
            @click="() => gotoPage('profile')"
            >맞춤 정보 수정 <img class="h-2" :src="NavIcon" alt="전체보기 아이콘"
          /></span>
        </div>
      </div>
      <div
        class="border-surface-300 text-primary-400 flex cursor-pointer items-center gap-1 rounded-full border p-3"
      >
        <img :src="npayIcon" alt="NPay 아이콘" />
        {{ user.balance.toLocaleString() }}원
      </div>
    </div>
    <IconsBox />
    <div class="flex w-full justify-between rounded-2xl bg-white px-3 py-5">
      <Icon
        background="trans"
        icon="src/assets/logo.svg"
        label="긴급공지"
        size="sm"
        sorting="horizon"
      />
      <div
        class="text-surface-600 font-gmarket-light flex cursor-pointer items-center justify-center gap-1 text-xs"
        @click="() => gotoPage(notice.link)"
      >
        {{ notice.title }} <img class="h-3" :src="NavIcon" alt="전체보기 아이콘" />
      </div>
    </div>
    <ProductsBox title="장바구니" view-type="middle" link="cart" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import NavIcon from '@/assets/navFront.svg'
import Icon from '@/components/icons/Icon.vue'
import BaseIcon from '@/components/icons/BaseIcon.vue'
import IconsBox from './_components/IconsBox.vue'
import ProductsBox from './_components/ProductsBox.vue'
import npayIcon from '@/assets/image/icons/npayIcon.svg'
import userIcon from '@/assets/image/icons/userIcon.png'

const router = useRouter()

const notice = { title: '네이버 스마트스토어 사칭 피싱 주의 안내', link: 'notice' }
const user = { nickname: '승에이', balance: 3590 }

function gotoPage(name: string) {
  router.push({ name })
}
</script>
