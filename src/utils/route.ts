import type { RouteLocationNormalized } from 'vue-router'

const routeUtil = {
  //현재 라우트의 부모 찾기
  getParent: (route: RouteLocationNormalized, routeName: string) => {
    //현재 라우트 단계
    const currentIndex = route.matched.findIndex(r => r.name === routeName)

    //부모가 최상단 (0) 이면 안되므로 1부터 시작
    return currentIndex > 1 ? route.matched[currentIndex - 1] : undefined
  },
}

export default routeUtil
