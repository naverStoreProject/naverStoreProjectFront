<template>
  <header>
    <div class="flex justify-between p-3">
      <div class="header-left">
        <div v-if="menuList.back">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div v-if="menuList.mainLogo">
          <img src="" alt="logo" />
        </div>
        <div v-if="menuList.mainTitle">
          <div v-text="mainTitle"></div>
        </div>
      </div>
      <!-- header-left end -->

      <div class="header-right">
        <div v-if="menuList.alarm" class="header-right__alarm">
          <i class="fa-regular fa-bell"></i>
        </div>
        <div v-if="menuList.setting" class="header-right__alarm">
          <i class="fa-solid fa-gear"></i>
        </div>
        <div v-if="menuList.basket" class="header-right__basket">
          <i class="fa-solid fa-bag-shopping"></i>
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
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import routeUtil from '@/utils/route'

import type { routeType } from './header'
import { menuList, mainTitleList, routerList } from './header'

const route = useRoute()

const mainTitle = ref('')

//header 강제
const props = defineProps<{
  menu: routeType
}>()

//헤더 리셋
const resetHeader = () => {
  Object.keys(menuList.value).forEach(key => {
    menuList.value[key as keyof typeof menuList.value] = false
  })

  mainTitle.value = ''
}

//route 경로에 따라 항목 표기해주기
const changeHeader = (name: string = 'home') => {
  const selectedMenuList = routerList[name as keyof typeof routerList]
  selectedMenuList.forEach(menu => {
    menuList.value[menu as keyof typeof menuList.value] = true
  })
}

//메인로고쓸지 타이틀을 쓸지
const checkMainTitle = (name: string = 'home') => {
  const title = mainTitleList.value[name as keyof typeof mainTitleList.value]
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
</style>
