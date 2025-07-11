<template>
  <div :class="['product-card', viewType]" v-if="product">
    <img :src="product.thumbnailUrl" alt="이미지 없음" />
    <div class="product-info">
      <div class="meta-row">
        <template v-if="viewType === 'small'">
          <p class="tag-name-line">
<!--            <span class="tag-text-wrapper" v-if="product.adTag">-->
<!--              <span class="tag-text">광고</span>&nbsp;-->
<!--            </span>-->
            {{ product.name }}
          </p>
        </template>
        <template v-else>
          <p class="brand-ad-tag-line">
            <span class="brand">{{ product.brand }} </span>
<!--            <span class="ad-tag" v-if="product.adTag">광고</span>-->
          </p>
          <p class="name">{{ product.name }}</p>
        </template>
      </div>

      <p class="price" v-if="product.discountRate > 0">
        <span class="canceled">{{ product.originalPrice }}원</span>
      </p>
      <p class="price" v-if="product.discountRate > 0">
        <span class="discount-rate">{{ product.discountRate }}%</span> &nbsp;
        <span class="current">{{ product.discountPrice }}원</span>
      </p>
      <p class="price" v-else>
        <span class="current">{{ product.originalPrice }}원</span>
      </p>


      <p class="rating" v-if="viewType === 'small' && product.averageRating && product.ratingCount">
        ⭐ {{ product.averageRating }} ({{ product.ratingCount }})
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from './productData.ts'

const props = defineProps<{
  product: Product
  viewType: 'long' | 'middle' | 'small'
}>()

</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.product-card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.product-card.long {
  flex-direction: row;
  width: 100%;
  height: 120px;
  gap: 16px;
  padding: 0.5rem;
  box-sizing: border-box;
  align-items: center;
}

.product-card.long img {
  width: 100px;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.product-card.long .product-info {
  flex: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-info {
  padding: 8px;
}

.brand {
  font-size: 12px;
  color: #666;
}

.price {
  margin-top: 6px;
}

.discount-rate {
  color: #d00;
  font-weight: bold;
}

.canceled {
  font-size: 12px;
  color: #aaa;
  text-decoration: line-through;
}


.meta-row {
  align-items: center;
  gap: 0px;
  flex-wrap: nowrap; /* 강제로 한 줄 */
}

.tag-name-line {
  font-weight: bold;
  font-size: 15px;
  line-height: 1.4;
  overflow-wrap: anywhere;
  word-break: break-all;
}

.tag-text-wrapper {
  display: contents; /* span이 존재하되 레이아웃에 영향 없음 */
}

.tag-text {
  background: #eee;
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 4px;
  color: #333;
  white-space: nowrap;
  margin-right: 4px;
}

.brand-ad-tag-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ad-tag {
  flex-shrink: 0;
  background: #eee;
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 4px;
  color: #333;
}

.name {
  flex: 1;               /* 나머지 공간 차지 */
  font-weight: bold;
  font-size: 15px;
  overflow: hidden;
  overflow-wrap: anywhere;
  text-overflow: ellipsis;
}

.brand {
  font-size: 13px;
  color: #555;
  width: 100%;
}

</style>
