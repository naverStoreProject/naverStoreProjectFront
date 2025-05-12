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
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import routeUtil from '@/utils/route'

const route = useRoute()

/* 페이지 추가시 수정해야하는 항목들 start */
//기본 항목들 표기
const menuList = ref({
  back: false,
  mainLogo: false,
  mainTitle: false,
  alarm: false,
  setting: false,
  basket: false,
})

//메인로고자리 대체 문자
const mainTitle = ref('')
const mainTitleList = ref({
  user: '마이쇼핑',
  setting: '설정',
})

//route 에 따라 필요한 항목만 표기
const routerList = {
  home: ['mainLogo', 'alarm', 'basket'],
  user: ['back', 'mainTitle', 'alarm', 'setting', 'basket'],
}
/* 페이지 추가시 수정해야하는 항목들 end */

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
  newName => {
    //부모구하기
    const parent = routeUtil.getParent(route, route.name as string)
    const routeName = parent ? parent.name : newName

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
