<template>
  <div :class="['specialDeal-card', viewType]" v-if="specialDeal">
    <img :src="specialDeal.image" alt="이미지 없음" />
    <div class="specialDeal-info">
      <div class="meta-row">
        <template v-if="viewType === 'small'">
          <p class="tag-name-line">
            <span class="tag-text-wrapper" v-if="specialDeal.adTag">
              <span class="tag-text">광고</span>&nbsp; </span
            >{{ specialDeal.name }}
          </p>
        </template>
        <template v-else>
          <p class="brand-ad-tag-line">
            <span class="brand">{{ specialDeal.brand }} </span>
            <span class="ad-tag" v-if="specialDeal.adTag">광고</span>
          </p>
          <p class="name">{{ specialDeal.name }}</p>
        </template>
      </div>

      <p class="price" v-if="specialDeal.originalPrice">
        <span v-if="viewType !== 'small'" class="my-price">나의 할인가 </span>
        <span class="original">{{ specialDeal.originalPrice }}원</span>
      </p>
      <p class="price">
        <span class="discount-rate" v-if="specialDeal.discountRate">{{
          specialDeal.discountRate
        }}</span>
        &nbsp;
        <span class="current">{{ specialDeal.currentPrice }}원</span>
      </p>

      <p
        class="rating"
        v-if="viewType === 'small' && specialDeal.averageRating && specialDeal.ratingCount"
      >
        ⭐ {{ specialDeal.averageRating }} ({{ specialDeal.ratingCount }})
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TodayDeal } from '../../todayDeal.ts'

const props = defineProps<{
  specialDeal: TodayDeal
  viewType: 'long' | 'middle' | 'small'
}>()
</script>

<style scoped>
.specialDeal-card {
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background: var(--color-white);
  box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  font-family: var(--font-gmarket-500);
}

.specialDeal-card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.specialDeal-card.long {
  flex-direction: row;
  width: 100%;
  height: 7.5rem;
  gap: 1rem;
  padding: 0.5rem;
  box-sizing: border-box;
  align-items: center;
}

.specialDeal-card.long img {
  width: 6.25rem;
  height: 100%;
  object-fit: cover;
  border-radius: 0.375rem;
}

.specialDeal-card.long .todaySale-info {
  flex: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.specialDeal-info {
  padding: 0.5rem;
}

.brand {
  font-size: 0.8125rem;
  color: var(--color-surface-600);
  width: 100%;
}

.price {
  margin-top: 0.375rem;
  font-family: var(--font-gmarket-700);
}

.discount-rate {
  color: var(--color-negative-700);
  font-weight: bold;
}

.original {
  font-size: 0.75rem;
  color: var(--color-surface-300);
  text-decoration: line-through;
  font-family: var(--font-gmarket-300);
}

.meta-row {
  align-items: center;
  gap: 0;
  flex-wrap: nowrap;
}

.tag-name-line {
  font-weight: bold;
  font-size: 0.9375rem;
  line-height: 1.4;
  overflow-wrap: anywhere;
  word-break: break-word;
  font-family: var(--font-gmarket-700);
}

.tag-text-wrapper {
  display: contents;
}

.tag-text {
  background: var(--color-surface-300);
  padding: 0.125rem 0.375rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  color: var(--color-surface-950);
  white-space: nowrap;
  margin-right: 0.25rem;
  font-family: var(--font-gmarket-500);
}

.brand-ad-tag-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ad-tag {
  flex-shrink: 0;
  background: var(--color-surface-300);
  padding: 0.125rem 0.375rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  color: var(--color-surface-950);
  font-family: var(--font-gmarket-500);
}

.name {
  flex: 1;
  font-weight: bold;
  font-size: 0.9375rem;
  overflow: hidden;
  overflow-wrap: anywhere;
  text-overflow: ellipsis;
  font-family: var(--font-gmarket-700);
}
</style>
