<template>
  <div :class="['product-card', viewType]">
    <img :src="product.image" alt="이미지 없음" />
    <div class="product-info">
      <p class="brand">{{ product.brand }}</p>
      <p class="name">{{ product.name }}</p>
      <p class="price">
        <span class="discount">{{ product.discountPrice }}원</span>
        <span class="original" v-if="product.originalPrice">{{ product.originalPrice }}원</span>
      </p>
      <span class="tag" v-if="product.tag">{{ product.tag }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    brand: string
    name: string
    discountPrice: string
    originalPrice?: string
    tag?: string
    image: string
  }
  viewType: 'list' | 'grid-2' | 'grid-3'
}>()
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column; /* 기본은 세로 배치 */
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.product-card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.product-card.list {
  flex-direction: row;
  width: 100%;
  height: 120px;
  gap: 16px;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
}

.product-card.list img {
  width: 100px;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.product-card.list .product-info {
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

.name {
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
}

.price {
  margin-top: 6px;
}

.discount {
  color: #d00;
  font-weight: bold;
}

.original {
  font-size: 12px;
  color: #aaa;
  text-decoration: line-through;
  margin-left: 6px;
}

.tag {
  display: inline-block;
  margin-top: 6px;
  background: #eee;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
}
</style>
