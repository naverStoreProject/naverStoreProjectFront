<template>
  <div :class="['products', viewType]">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :view-type="viewType"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type {Product} from './productData.ts'
import { ref, onMounted } from 'vue'

const props = defineProps<{
  viewType: 'long' | 'middle' | 'small'
  searchKeyword?: string    // 검색어. 이를 바탕으로 가장 가까운 카테고리를 DB에서 찾은 후 그 카테고리에 해당하는 제품 데이터를 띄워야함. (계획)
}>()

const mainCategoryId = ref<number>(999999);
const subCategoryId = ref<number>(999999);

const products = ref<Product[]>([]);
const isLoading = ref<boolean>(false); // 로딩 상태
const error = ref<Error | null>(null); // 에러 상태

const fetchProducts = async (keyword?: string) => {

  console.log('1번')

  isLoading.value = true;
  error.value = null;
  products.value = [];

  // const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
  const API_BASE_URL = 'http://localhost:8080'
  const baseUrl = `/api/products`;
  let url = baseUrl;

  console.log('2번')

  try {
    const response = await fetch(url);

    if (!response.ok) {
      error.value = new Error(`HTTP error! status: ${response.status}`);
      isLoading.value = false;
      console.log('3번')
      return;
    }

    const apiResponse = await response.json();

    if (apiResponse.success && apiResponse.data) {

      products.value = apiResponse.data;
    } else {
      error.value = new Error(`API 응답 실패: ${apiResponse.message || '알 수 없는 오류'}`);
    }
  } catch (e: any) {
    console.log('6번')
    error.value = e;
    console.error("상품 데이터 가져오기 중 오류 발생:", e);
  } finally {
    console.log('7번')
    isLoading.value = false;
  }

  console.log(products.value);
};

console.log('이거 왜 안됨?');
fetchProducts();

</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem 0.5rem;
}

.products.middle > * {
  width: 45%;
}

.products.small > * {
  width: 30%;
}

.products.long {
  flex-direction: column;
  align-items: center;
  height: 20%;
}

.products.long > * {
  width: 100%;
  max-width: 900px;
}
</style>
