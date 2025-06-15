<template>
  <header>
    <div class="flex justify-between p-3">
      <div class="header-left text-xl">
        <div v-if="routeMenuList.back" @click="backBtnFunc">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div v-if="routeMenuList.mainLogo">
          <img src="" alt="logo" />
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
          <i class="fa-solid fa-gear"></i>
        </div>
        <div v-if="routeMenuList.basket" class="header-right__basket">
          <i class="fa-solid fa-bag-shopping"></i>
        </div>
        <div v-if="routeMenuList.searching" class="header-right__" @click="openSearchOffCanvas">
          <i class="fa-solid fa-magnifying-glass"></i>
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
import { ref, watch, onMounted } from 'vue'
import routeUtil from '@/utils/route'

import type { routeType } from './header'
import { menuList, mainTitleList, routerList } from './header'

import { useOffcanvasStore } from '@/stores/offcanvasStore'

const route = useRoute()
const router = useRouter()
const offcanvasStore = useOffcanvasStore()
const mainTitle = ref('')
const routeMenuList = ref({ ...menuList })
const routeMainTitleList = ref({ ...mainTitleList })
const searchKeyword = ref('')

onMounted(() => {
  if (props.data !== undefined) {
    searchKeyword.value = String(props.data);
  }
});


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
    offcanvasStore.open('searchResult', searchKeyword.value)
    return
  }
  if(props.menu == 'searchResult') {
    // props로 searchKeyword 전달 필요
    offcanvasStore.open('searchInput', searchKeyword.value)
    return
  }
}

//header 강제
const props = defineProps<{
  menu: routeType
  data?: any
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
</style>
