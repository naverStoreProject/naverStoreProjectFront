import { defineStore } from 'pinia'
import type { routeType } from '@/components/layouts/header/header'
import { nextTick } from 'vue'

//새로운 offcanvas 를 만들경우 stack에 push 하는 식으로 띄우기 가능
export const useOffcanvasStore = defineStore('offcanvas', {
  state: () => ({
    //오프캔버스 관리
    stack: [] as routeType[],
    //각 오프캔버스의 visible 관리
    isVisibleStates: new Map<number, boolean>(),
  }),
  actions: {
    //오프캔버스 열기 (클릭)
    open(item: routeType) {
      this.stack.push(item)
      setTimeout(() => {
        this.isVisibleStates.set(this.stack.length - 1, true)
      })
    },
    //오프캔버스 닫기 (클릭)
    close() {
      const currentItem = this.stack.length - 1
      this.isVisibleStates.set(currentItem, false)
      setTimeout(() => {
        this.stack.pop()
        this.isVisibleStates.delete(currentItem)
      }, 300)
    },
    //현재 오프캔버스 상태값 리턴
    //transition 사용으로 show값이 변경되는걸 감지하기때문
    isVisible(itemIndex: number) {
      return this.isVisibleStates.get(itemIndex)
    },
  },
})
