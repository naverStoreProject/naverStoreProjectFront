<template>
  <div class="flex flex-col gap-4">
    <!-- 개인 정보 -->
    <div class="flex justify-between">
      <div class="flex items-center gap-2">
        <BaseIcon background="surface" icon="BaseIcon" size="md" />
        <div class="flex flex-col">
          <span class="font-gmarket-bold text-lg"> {{ user.nickname }}님</span>
          <span class="font-gmarket-light text-surface-600 flex items-center gap-1 text-xs"
            >맞춤 정보 수정 <img class="h-2" :src="NavIcon" alt="전체보기 아이콘"
          /></span>
        </div>
      </div>
      <div class="border-surface-300 text-primary-400 rounded-full border p-3">
        NPay
        {{ user.balance.toLocaleString() }}원
      </div>
    </div>
    <IconsBox :wish-num="user.wishNum" />
    <div class="flex w-full justify-between rounded-2xl bg-white px-3 py-5">
      <Icon
        background="trans"
        icon="src/assets/logo.svg"
        label="긴급공지"
        size="sm"
        sorting="horizon"
      />
      <div
        class="text-surface-600 font-gmarket-light flex items-center justify-center gap-1 text-xs"
        @click="clickNotice"
      >
        {{ notice.title }} <img class="h-3" :src="NavIcon" alt="전체보기 아이콘" />
      </div>
    </div>
    <ProductsBox title="찜한 상품" view-type="middle" link="notice" />
    <ProductsBox title="최근 본 상품" view-type="middle" link="notice" />
    <!-- 관심스토어 -->
    <!-- 추천 상품 -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import NavIcon from '@/assets/navFront.svg'
import Icon from '@/components/icons/Icon.vue'
import BaseIcon from '@/components/icons/BaseIcon.vue'
import IconsBox from './_components/IconsBox.vue'
import ProductsBox from './_components/ProductsBox.vue'
import { reactive, onMounted, nextTick } from 'vue'
import { getMyInfo } from '@/api/userApi.ts'
import type { UserInfo } from '@/api/types/user.types'

const router = useRouter()

const notice = { title: '네이버 스마트스토어 사칭 피싱 주의 안내', link: 'notice' }
// const user = { nickname: '승에이', balance: 3590 }
const user = reactive<UserInfo>({
  name: '',
  nickname: '',
  email: '',
  phone: '',
  address: '',
  wishNum: 0,
  balance: 3590,
})

onMounted(async () => {
  const response = await getMyInfo()
  if (response?.success) {
    const data = response.data
    user.name = data.name
    user.nickname = data.nickname
    user.email = data.email
    user.phone = data.phone
    user.address = data.address
    user.wishNum = data.wishNum
  } else {
    localStorage.removeItem('token')

    router.replace({
      name: 'Login',
      query: { redirect: router.currentRoute.value.fullPath },
    })
  }
})

function clickNotice() {
  router.push({ name: notice.link })
}
</script>
