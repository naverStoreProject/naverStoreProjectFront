<template>
  <div class="today-deal">
    <!-- 탭 메뉴 -->
    <div class="tab-menu">
      <button @click="scrollTo('special')">스페셜딜</button>
      <button @click="scrollTo('brand')">브랜드딜</button>
      <button @click="scrollTo('today')">오늘끝딜</button>
      <button @click="scrollTo('last')">맨끝딜</button>
    </div>

    <!-- 딜 섹션들 -->
    <div ref="special" class="deal-section">
      <div class="filters">
        <button @click="changeNextViewType">정렬 방식</button>
      </div>
      <SpecialDeal :view-type="viewType" />
    </div>
    <div ref="brand" class="deal-section">
      <div class="filters">
        <button @click="changeNextViewType">정렬 방식</button>
      </div>
      <BrandDeal :view-type="viewType" />
    </div>
    <div ref="today" class="deal-section">
      <div class="filters">
        <button @click="changeNextViewType">정렬 방식</button>
      </div>
      <TodayOnlyDeal :view-type="viewType" />
    </div>
    <div ref="last" class="deal-section"><LastDeal /></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SpecialDeal from './TodayDeal/SpecialDeal.vue'
import BrandDeal from './TodayDeal/BrandDeal.vue'
import TodayOnlyDeal from './TodayDeal/TodayOnlyDeal.vue'
import LastDeal from './TodayDeal/LastDeal.vue'

// 각 섹션 참조
const special = ref<HTMLElement | null>(null)
const brand = ref<HTMLElement | null>(null)
const today = ref<HTMLElement | null>(null)
const last = ref<HTMLElement | null>(null)

const sectionRefs = {
  special,
  brand,
  today,
  last,
}

// 클릭 시 해당 섹션으로 스크롤 이동
function scrollTo(section: keyof typeof sectionRefs) {
  sectionRefs[section]?.value?.scrollIntoView({
    behavior: 'smooth',
  })
}

const viewTypes = ['long', 'middle', 'small'] as const

type ViewType = (typeof viewTypes)[number]

const viewType = ref<ViewType>('middle')

function changeNextViewType() {
  const currentIndex = viewTypes.indexOf(viewType.value)
  const nextIndex = (currentIndex + 1) % viewTypes.length
  viewType.value = viewTypes[nextIndex]
}
</script>

<style scoped>
.tab-menu {
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #eee;
  padding: 12px 0;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}
.tab-menu button {
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 8px 16px;
}
.deal-section {
  padding: 40px 16px;
  border-bottom: 1px solid #ddd;
}

.filters {
  display: flex;
  gap: 0.8rem;
  margin-top: 0rem;
}

.filters button {
  border: 1px solid #ccc;
  background: #fafafa;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
