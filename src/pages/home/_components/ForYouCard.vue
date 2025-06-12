<template>
  <div class="recent-tag">
    <h2 class="recent-tag__title">
      최근에 찾으신
      <span class="recent-tag__highlight">{{ tag }}</span>
      더 살펴보세요
    </h2>
    <div class="recent-tag__grid">
      <div v-for="(item, index) in visibleItems" :key="item.id" class="recent-tag__card">
        <img :src="item.image" alt="product image" class="recent-tag__image" />
        <h3 class="recent-tag__name">{{ item.name }}</h3>
        <p class="recent-tag__brand">{{ item.brand }}</p>
        <p class="recent-tag__price">₩{{ item.currentPrice }}</p>
      </div>
    </div>
    <div class="recent-tag__load-more-wrap">
      <button
        v-if="visibleCount < filteredItems.length"
        @click="loadMore"
        class="recent-tag__load-more"
      >
        더 보기
      </button>
    </div>
    <div class="recent-tag__info">
      보여지는 개수: {{ visibleCount }} / 전체 개수: {{ filteredItems.length }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TodaySale } from '../forYouData'

// Props
const props = defineProps<{
  tag: string
  items: TodaySale[]
}>()

const visibleCount = ref(4)
const loadMore = () => {
  visibleCount.value += 4
}

const filteredItems = computed(() => props.items.filter(item => item.tag === props.tag))
const visibleItems = computed(() => filteredItems.value.slice(0, visibleCount.value))

console.log('props.tag:', props.tag)
console.log(
  'filteredItems:',
  filteredItems.value.map(item => item.tag)
)

console.log('visibleCount:', visibleCount.value)
</script>

<style scoped>
.recent-tag {
  margin-bottom: 2rem;
  font-family: var(--font-gmarket-500);
}

.recent-tag__title {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.recent-tag__highlight {
  font-size: 1.6rem;
  color: var(--color-primary-400);
  font-family: var(--font-gmarket-500);
}

.recent-tag__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .recent-tag__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.recent-tag__card {
  border: 1px solid var(--color-surface-200);
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease;
}

.recent-tag__card:hover {
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

.recent-tag__image {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 0.375rem;
}

.recent-tag__name {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.recent-tag__brand {
  font-size: 0.75rem;
  color: var(--color-surface-600);
}

.recent-tag__price {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-negative-700);
}

.recent-tag__load-more-wrap {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.recent-tag__load-more {
  padding: 0.6rem 1.5rem;
  background-color: var(--color-primary-400);
  color: #1a1a1a;
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  font-size: 0.875rem;
  font-weight: 500;
}

.recent-tag__load-more:hover {
  background-color: var(--color-primary-500);
}

.recent-tag__info {
  font-size: 0.75rem;
  color: var(--color-surface-400);
  text-align: center;
  margin-top: 0.5rem;
}
</style>
