<template>
  <header>
    <div class="flex justify-between p-4">
      <div class="header-left text-xl">
        <div v-if="routeMenuList.back" @click="backBtnFunc">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div v-if="routeMenuList.mainLogo" class="logo-img">
          <img :src="logo.mainLogo" alt="mainLogo"/>
        </div>
        <div v-if="routeMenuList.mainTitle">
          <div v-text="mainTitle"></div>
        </div>
        <div v-if="routeMenuList.inputKeyword">
          <input
            type="text"
            placeholder="상품명 또는 브랜드 입력"
            class="flex-1 border-b p-2 outline-none"
            v-model="searchKeyword"
            @keyup.enter="openSearchOffCanvas"
          />
        </div>
      </div>
      <!-- header-left end -->

      <div class="header-right text-xl">
        <div
          v-if="routeMenuList.alarm"
          class="header-right__alarm"
          @click="offcanvasStore.open('alarm')"
        >
          <i class="fa-regular fa-bell"></i>
        </div>
        <div v-if="routeMenuList.setting" class="header-right__alarm">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="_headerControl_icon_EaQfx">
            <path stroke="currentColor" stroke-width="1.5" d="M15.359 12.032c0 1.806-1.48 3.27-3.31 3.27s-3.31-1.464-3.31-3.27 1.48-3.27 3.31-3.27 3.31 1.464 3.31 3.27z" clip-rule="evenodd"></path>
            <path stroke="currentColor" stroke-width="1.5" d="M19.495 12.03c0-.318-.021-.632-.06-.94a.156.156 0 01.044-.131l1.628-1.61a.925.925 0 00.15-1.128L19.94 5.968a.953.953 0 00-1.064-.437l-2.274.603a.156.156 0 01-.132-.026 7.412 7.412 0 00-1.535-.862.156.156 0 01-.091-.103l-.613-2.26a.945.945 0 00-.914-.694h-2.635a.945.945 0 00-.913.693l-.626 2.303a.156.156 0 01-.088.102 7.489 7.489 0 00-1.456.84.156.156 0 01-.133.025l-2.343-.62a.953.953 0 00-1.064.435L2.742 8.22a.926.926 0 00.15 1.128l1.713 1.693a.16.16 0 01.045.13 7.223 7.223 0 00-.006 1.664.156.156 0 01-.046.128L2.892 14.65a.928.928 0 00-.15 1.128l1.318 2.255a.949.949 0 001.063.436l2.284-.605a.156.156 0 01.133.026c.471.354.985.655 1.534.892a.156.156 0 01.09.103l.605 2.235c.11.408.486.692.913.692h2.635a.944.944 0 00.913-.692l.595-2.194a.156.156 0 01.091-.103 7.439 7.439 0 001.612-.913.156.156 0 01.133-.026l2.215.585a.95.95 0 001.064-.436l1.317-2.255a.926.926 0 00-.15-1.128l-1.622-1.602a.156.156 0 01-.045-.13c.036-.29.055-.586.055-.886z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <div v-if="routeMenuList.basket" class="header-right__basket">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="_headerControl_icon_EaQfx">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.013 10.224v-4.42A4.003 4.003 0 0012.01 1.8v0a4.003 4.003 0 00-4.003 4.003v4.421"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.644 7.707H3.356a.877.877 0 00-.854 1.077L4.662 18a3.508 3.508 0 003.416 2.707h7.845A3.508 3.508 0 0019.337 18l2.16-9.216a.877.877 0 00-.854-1.077z"></path>
        </svg>
        </div>
      </div>
      <!-- header-right end -->
    </div>
  </header>
</template>

<script setup lang="ts">
/*
  헤더는 두가지 방식으로 가져옴
  1. 라우터가 바뀌었을때, 라우터 path 값에 따라 가져옴
  2. 특정 path값을 props 를 통해 주입시켰을때 (우선)
*/
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import routeUtil from '@/utils/route'

import type { routeType } from './header'
import { menuList, mainTitleList, routerList } from './header'

import { useOffcanvasStore } from '@/stores/offcanvasStore'

import logo from '@/assets/image/logo/logo'

const route = useRoute()
const router = useRouter()
const offcanvasStore = useOffcanvasStore()
const mainTitle = ref('')
const routeMenuList = ref({ ...menuList })
const routeMainTitleList = ref({ ...mainTitleList })
const searchKeyword = ref('')

//뒤로가기 버튼 설정
const backBtnFunc = () => {
  //오프캔버스면 창닫기
  if (offcanvasStore.stack.length > 0) {
    offcanvasStore.close()
  } else {
    router.back()
  }
}

const openSearchOffCanvas = () => {
  if(props.menu == 'searchInput') {
    // props로 searchKeyword 전달 필요
    offcanvasStore.open('searchResult')
    return
  }
  if(props.menu == 'searchResult') {
    // props로 searchKeyword 전달 필요
    offcanvasStore.open('searchInput')
    return
  }
}

//header 강제
const props = defineProps<{
  menu: routeType
}>()

//헤더 리셋
const resetHeader = () => {
  Object.keys(routeMenuList.value).forEach(key => {
    routeMenuList.value[key as keyof typeof menuList] = false
  })

  mainTitle.value = ''
}

//route 경로에 따라 항목 표기해주기
const changeHeader = (name: string = 'home') => {
  const selectedMenuList = routerList[name as keyof typeof routerList]
  selectedMenuList.forEach(menu => {
    routeMenuList.value[menu as keyof typeof menuList] = true
  })
}

//메인로고쓸지 타이틀을 쓸지
const checkMainTitle = (name: string = 'home') => {
  const title = routeMainTitleList.value[name as keyof typeof mainTitleList]
  if (title) {
    mainTitle.value = title
  } else {
    mainTitle.value = ''
  }
}

//route가 바뀔때마다 실행
watch(
  () => route.name,
  _ => {
    let routeName: string

    //header 강제설정이면 이대로
    if (props.menu) {
      routeName = props.menu
    }
    //아니면 부모구하기
    else {
      const parent = routeUtil.getParent(route, route.name as string)
      routeName = typeof parent?.name === 'string' ? parent.name : 'home'
    }

    //페이징 시작
    resetHeader()
    changeHeader(routeName as string)
    checkMainTitle(routeName as string)
  },
  { immediate: true }
)
</script>

<style>
.header-left {
  display: flex;
  gap: 1rem;
}
.header-right {
  display: flex;
  gap: 1rem;
}

.logo-img {
  height: 1.3rem;
}
.logo-img > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
