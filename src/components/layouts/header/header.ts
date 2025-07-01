//기본 항목들 표기
const menuList = {
  back: false,
  mainLogo: false,
  mainTitle: false,
  alarm: false,
  setting: false,
  basket: false,
  searching: false,
  inputKeyword: false,
}

//메인로고자리 대체 문자
const mainTitleList = {
  user: '마이쇼핑',
  setting: '설정',
  alarm: '알림',
  superCredit: '슈퍼적립',
}

//route 에 따라 필요한 항목만 표기
const routerList = {
  home: ['mainLogo', 'alarm', 'basket'],
  user: ['back', 'mainTitle', 'alarm', 'setting', 'basket'],
  alarm: ['back', 'mainTitle', 'alarm', 'basket'],
  superCredit: ['back', 'mainTitle', 'basket'],
  searchInput: ['back', 'inputKeyword', 'searching'],
  searchResult: ['back', 'inputKeyword', 'searching']
}
type routeType = keyof typeof routerList

type OffcanvasData = {
  routeType: routeType
  data?: any
}

export type { routeType, OffcanvasData }
export { menuList, mainTitleList, routerList }
