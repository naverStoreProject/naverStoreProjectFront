import { ref } from 'vue'

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
const mainTitleList = ref({
  user: '마이쇼핑',
  setting: '설정',
  superCredit: '슈퍼적립',
})

//route 에 따라 필요한 항목만 표기
const routerList = {
  home: ['mainLogo', 'alarm', 'basket'],
  user: ['back', 'mainTitle', 'alarm', 'setting', 'basket'],
  superCredit: ['back', 'mainTitle', 'basket'],
}
type routeType = keyof typeof routerList
/* 페이지 추가시 수정해야하는 항목들 end */

export type { routeType }
export { menuList, mainTitleList, routerList }
